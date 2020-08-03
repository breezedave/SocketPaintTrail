import blocks from "./blocks.js";

class Board {
    constructor(world) {
        this.world = world;
        this.canvas = document.querySelector("#board");
        this.ctx = this.canvas.getContext("2d");
    }

    updateWorld = (data) => {
        const {x, y, v} = data;
        const {blockSize} = this.world;

        this.ctx.fillStyle = blocks[v];
        this.ctx.fillRect(x * blockSize, y* blockSize, blockSize, blockSize);
    }

    draw = () => {
        const self = this;
        const {blockSize, w, h} = this.world;

        if(!this.world.world) return window.requestAnimationFrame(self.draw);

        this.canvas.width = w * blockSize;
        this.canvas.height = h * blockSize;

        for(let i = 0; i < this.world.world.length; i += 1) {
            this.ctx.fillStyle = blocks[this.world.world[i]];
            this.ctx.fillRect((i % w) * blockSize, parseInt(i / w) * blockSize, blockSize, blockSize);
        }
    }
}

export default Board;
