class LoadState extends Phaser.Scene {
    constructor() {
        super({key:'load'})
    }

    loadImage(fileName) {
        for(let i =0;i<fileName.length;i++){
            this.load.image('../assets/' + fileName[i]);
            console.log('../assets/' + fileName[i]) ;
        }
    }

    preload() {
        this.loadImage(["fancy-ball.png", "fancy-court.png", "fancy-paddle-green.png"])

    }

    create() {
        game.scene.start('menu');
    }
}