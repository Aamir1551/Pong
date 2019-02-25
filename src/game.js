var config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    physics: {
        default: 'ninja',
        ninja: {
            gravity: {y: 0},
            debug: false
        }

    },
};


let game = new Phaser.Game(config);

game.scene.add('boot', BootState);
game.scene.add('load', LoadState);
game.scene.add('menu', MenuState);

game.scene.start('boot');

