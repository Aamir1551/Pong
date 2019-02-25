class BootState extends Phaser.Scene {
    constructor() {
        super({key:"boot"})
    }

    preload() {
        //console.log("checking if everything is working")
        game.scene.start('load')
    }

}