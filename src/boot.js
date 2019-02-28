class BootState extends Phaser.Scene {
    constructor() {
        super({key:"boot"}) //This stuff doesnt matter
    }

    preload() {
        //console.log("checking if everything is working")
        this.scene.start('load');
    }

}