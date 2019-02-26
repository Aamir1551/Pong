class PlayState extends Phaser.Scene {
    constructor() {
        super({key:'play'})
    }

    preload(){}
    create() {
        this.add.image(400,300,'court');
        this.paddle1 = this.physics.add.sprite(100,250,'paddle');
        this.paddle2 = this.physics.add.sprite(700,250,'paddle');
        this.physics.add.sprite(200,300,'ball');
    }
    update() {}
}