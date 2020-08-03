const playerColors = require("./playerColors.js");

class World {
    constructor() {
        this.size = 64;
        this.data = [];
        this.blockSize = 16;
        this.buildWorld();
        this.playerColorI = 0;
        this.worldValForPlayer = {};
    }

    buildWorld() {
        for(let i = 0; i < this.size ** 2; i +=1) {
            this.data.push(0);
        }
    }

    addPlayer(socket) {
        socket.player = {
            pos: this.randomPos(),
            id: socket.id,
            col: this.assignColor(),
            world: this,
            updatePos: function(keyCode) {
                switch(keyCode) {
                    case 38:
                    case 87:
                        this.pos.y = Math.max(0, this.pos.y - 5);
                        break;
                    case 40:
                    case 83:
                        this.pos.y = Math.min(this.world.size * this.world.blockSize - 1, this.pos.y + 5);
                        break;
                    case 37:
                    case 65:
                        this.pos.x = Math.max(0, this.pos.x - 5);
                        break;
                    case 39:
                    case 68:
                        this.pos.x = Math.min(this.world.size * this.world.blockSize - 1, this.pos.x + 5);
                        break;
                }
                io.sockets.emit("updatePlayers", this.world.getPlayers());
                this.world.setValFromPlayer(this);
            }
        };
        io.sockets.emit("updatePlayers", this.getPlayers());
        this.setValFromPlayer(socket.player);
    }

    assignColor = () => {
        this.playerColorI += 1;
        return playerColors[this.playerColorI % playerColors.length];
    }

    randomPos() {
        return {
            x: parseInt(Math.random() * this.size * this.blockSize),
            y: parseInt(Math.random() * this.size * this.blockSize),
        };
    }

    getPlayers() {
        return Object.keys(io.sockets.sockets).map((socket) => {
            if(!io.sockets.sockets[socket].player) return null;
            const {pos, id, col} = io.sockets.sockets[socket].player;
            return {
                pos,
                id,
                col,
            };
        });
    }

    setValFromPlayer = (player) => {
        if(!this.worldValForPlayer[player.id]) this.worldValForPlayer[player.id] = Object.keys(this.worldValForPlayer).length + 1;
        const v = this.worldValForPlayer[player.id];
        const x = parseInt(player.pos.x / this.blockSize);
        const y = parseInt(player.pos.y / this.blockSize);

        this.setVal({
            x,
            y,
            v,
        });
    }

    setVal(data) {
        const {x, y, v} = data;

        if(x >= this.size || x < 0) return;
        if(y >= this.size || y < 0) return;

        const pos = y * this.size + x;

        this.data.splice(pos, 1, v);

        io.sockets.emit("updateWorld", data);
    }

    getWorld() {
        return this.data;
    }
}


module.exports = World
