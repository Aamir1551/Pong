class PlayState extends Phaser.Scene {
    constructor() {
        super({key:'play'})
    }

    preload(){}
    create() {
        this.add.image(400,300,'court');
        this.paddle1 = this.physics.add.sprite(100,200,'paddle');
        this.physics.add.sprite(200,300,'ball');
    }
    update() {}
}