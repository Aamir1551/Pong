class BootState extends Phaser.Scene {
    constructor() {
        // TODO check if super({key:"boot"}) really makes a difference
        super({key:"boot"}) //This stuff doesnt matter
    }

    preload() {
        //console.log("checking if everything is working")
        this.scene.start('load');
    }

}