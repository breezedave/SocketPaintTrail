class Players {
    constructor(world) {
        this.canvas = document.querySelector("#players");
        this.ctx = this.canvas.getContext("2d");
        this.world = world;
        this.playerSize = 10;
    }

    updatePlayers(data) {
        const {w, h, blockSize} = this.world;
        const {colors, playerSize} = this;

        this.canvas.width = w * blockSize;
        this.canvas.height = h * blockSize;

        data.forEach(player => {
            if(!player.pos) return;
            const {x, y} = player.pos;
            const {col} = player;

            this.ctx.fillStyle = "rgba(0,0,0,.2)";
            this.ctx.beginPath();
            this.ctx.ellipse(x + 3, y + 3, playerSize, playerSize, Math.PI / 4, 0, 2 * Math.PI);
            this.ctx.fill();

            this.ctx.fillStyle = col;
            this.ctx.beginPath();
            this.ctx.ellipse(x, y, playerSize, playerSize, Math.PI / 4, 0, 2 * Math.PI);
            this.ctx.fill();
        });
    }
}

export default Players;
