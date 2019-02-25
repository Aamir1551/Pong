class LoadState extends Phaser.Scene {
    constructor() {
        super({key:'load'})
    }

    loadImage(fileName, keys) {
        for(let i =0;i<fileName.length;i++){
            this.load.image(keys[i], '../assets/' + fileName[i]);
        }
    }

    preload() {
        this.loadImage(["fancy-ball.png", "fancy-court.png", "fancy-paddle-green.png"],
            ["ball", "court", "paddle"])

    }

    create() {
        game.scene.start('menu');
    }
}