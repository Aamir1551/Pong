class PlayState extends Phaser.Scene {
    constructor() {
        super({key:'play'})
    }

    preload(){}

    addSprites() {
        this.add.image(400, 300, 'court');
        this.paddle1 = this.physics.add.sprite(100, 250, 'paddle');
        this.paddle2 = this.physics.add.sprite(700, 250, 'paddle');
        this.ball = this.physics.add.sprite(200, 300, 'ball');
        this.scoreText = this.add.text(16,16, 'score: ' + this.score, {fontsize: '32px', fill: '#000'});
    }

    setPhysics() {
        this.physics.add.collider(this.paddle1, this.ball, function() {this.score +=1}, null, this);
        this.physics.add.collider(this.paddle2, this.ball, null, null, this);
        this.ball.setBounce(1);
        this.ball.setVelocity(-700, 500);
        this.ball.body.onWorldBounds = true;
    }

    static setImmovableFalse(sprites) {
        for(let i= 0; i<sprites.length; i++) {
            sprites[i].setImmovable(true);
        }
    }

    static setWorldBounds(sprites) {
        for(let i = 0; i<sprites.length; i++) {
            sprites[i].setCollideWorldBounds(true);
        }
    }


    create() {


        this.score = 0;

        this.addSprites();
        this.setPhysics();


        this.ball.body.world.on('worldbounds', function(body) {
            if(body.gameObject === this && !(this.y > (600 - this.height) ) && !(this.y < this.height) ) {
                this.scene.score = 0;
                this.scene.scoreText.setText('Score: ' + this.scene.score);
                this.x = 400;
                this.y = 300;
                this.setVelocity(-700, 500);
            }
        }, this.ball);

        PlayState.setWorldBounds([this.ball, this.paddle1, this.paddle2]);

        PlayState.setImmovableFalse([this.paddle1, this.paddle2]);

        this.cursors = this.input.keyboard.createCursorKeys();
    }

    setControls() {
        if(this.cursors.up.isDown) {
            this.paddle1.setVelocityY(-300);
        }

        if(this.cursors.down.isDown) {
            this.paddle1.setVelocityY(300);
        }

        if(!(this.cursors.up.isDown || this.cursors.down.isDown)) {
            this.paddle1.setVelocity(0);
        }
    }

    update() {
        this.setControls();
        this.scoreText.setText('Score: ' + this.score);
        this.paddle2.y = this.ball.y;
    };

    //to view this scene from js console write game.scene.scenes[3].stopM
    //game.scene.scene[3].game.config.height is how you refer to height property in game object
    //game.scene.scenes[3].ball.scene.ball ===  game.scene.scenes[3].ball
}