var config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            //gravity: {y: 0},
            debug: false
        }

    },
    scene : [BootState, LoadState, MenuState, PlayState]
};

let game = new Phaser.Game(config);
