import io from "socket.io-client";
import Board from "./Board.js";
import Players from "./Players.js";

const keycodes = [
    38, //up
    40, //down
    37, //left
    39, //right
    87, //w
    83, //s
    65, //a
    68, //d
];


class Client {
    constructor() {
        const self = this;

        this.socket = io();
        this.board =  new Board(this);
        this.players = new Players(this);
        this.world = false;
        this.blockSize = 16;
        this.w = 64;
        this.h = 64;
        this.socket.on("world", (val) => {
            this.world = val;
            this.board.draw();
        });

        this.socket.on('connect', () => this.socket.emit("join"));
        this.socket.on("updateWorld", self.updateWorld);
        this.socket.on("updatePlayers", self.updatePlayers);

        window.document.addEventListener("keydown", (e) => {
            if(this[`keyDown${e.keyCode}`] === true) return;
            this[`keyDown${e.keyCode}`] = true;
            if(keycodes.indexOf(e.keyCode) >= 0) {
                this.socket.emit("keydown", e.keyCode);
            }
        });

        window.document.addEventListener("keyup", (e) => {
            this[`keyDown${e.keyCode}`] = false;
            if(keycodes.indexOf(e.keyCode) >= 0) {
                this.socket.emit("keyup", e.keyCode);
            }
        });

    }

    updateWorld = (data) => {
        const {x, y, v} = data;
        const {blockSize, w, h} = this;

        if(this.world) this.world[y * w + x] = v;
        this.board.updateWorld(data);
    }

    updatePlayers = (data) => {
        delete this.playersData;
        this.playersData = data;
        this.players.updatePlayers(data);
    }

    temp = (data) => {
        this.socket.emit("temp", data)
    }
}

export default Client;
