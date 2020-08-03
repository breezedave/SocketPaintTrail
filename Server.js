const Koa = require("koa");
const Router = require('koa-router');
const World = require("./World.js");

class Server {
    constructor() {
        const self = this;
        const router = new Router();
        this.app = new Koa();
        this.world = new World();
        global.world = this.world

        const server = require('http').createServer(this.app.callback());
        this.io = require("socket.io")(server);
        global.io = this.io;

        this.io.on("connection", (socket) => {
            socket.on("join", () => {
                console.log(socket.id);
                this.world.addPlayer(socket);
                socket.emit("world", this.world.getWorld());
            });
            socket.on("getWorld", () => {
                socket.emit("world", this.world.getWorld());
            });
            socket.on("temp", (data) => this.world.setVal(data));
            socket.on("keydown", (val) => {
                if(socket.player[`interval${val}`]) return;
                socket.player[`interval${val}`] = setInterval(() => socket.player.updatePos(val), 150);
                socket.player.updatePos(val);
            });
            socket.on("keyup", (val) => {
                clearInterval(socket.player[`interval${val}`]);
                delete socket.player[`interval${val}`];
            });
        });

        router.get("/stats", async(ctx) => {
            ctx.body = {
                "connections": Object.keys(self.io.sockets.sockets).length,
            };
        });

        this.app
        .use(router.routes())
        .use(router.allowedMethods())
        .use(require('koa-static')("./fe", {defer: true, index: "index.html"}));

        //Sets up both socket & koa listeners
        this.app.listen = (...args) => {
            server.listen.call(server, ...args);
            return server;
        };

        this.app.listen(process.env.PORT || 8080);
    }
}

module.exports = Server;
