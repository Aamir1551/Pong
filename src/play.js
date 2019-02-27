class PlayState extends Phaser.Scene {
    constructor() {
        super({key:'play'})
    }

    preload(){}
    create() {
        this.add.image(400, 300, 'court');

        //TODO Try to disable physics on paddle1 & 2 as they move when the ball hits em
        //TODO also read over the other todo (cos theres 2 (well 3 including this one)



        this.paddle1 = this.physics.add.sprite(100, 250, 'paddle');
        this.paddle2 = this.physics.add.sprite(700, 250, 'paddle');
        this.ball = this.physics.add.sprite(200, 300, 'ball');


        this.wkey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        this.skey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);

        this.physics.add.collider(this.paddle2, this.ball, null, null, this);
        this.physics.add.collider(this.paddle1, this.ball, null, null, this);
        this.ball.setBounce(1);
        this.ball.setVelocity(-700, 500);

        this.ball.body.onWorldBounds = true;

        //this.ball.body.offset()

        // TODO check if bounds is corrects and start with ML NOW!!!
        this.ball.body.world.on('worldbounds', function(body) {
            //console.log(600 - this.height);
            //console.log("spl");
            //console.log(this.y);
            if(body.gameObject === this && !(this.y > (600 - this.height) ) && !(this.y < this.height) ) {
                this.x = 400;
                console.log(this.y);
                this.y = 300;
                this.setVelocity(-700, 500);
            }
        }, this.ball);

        this.ball.setCollideWorldBounds(true);
        this.paddle1.setCollideWorldBounds(true);
        this.paddle2.setCollideWorldBounds(true);

        this.paddle1.setImmovable(true);
        this.paddle2.setImmovable(true);

    }



    update() {
        this.cursors = this.input.keyboard.createCursorKeys();

        if(this.cursors.up.isDown) {
            this.paddle1.setVelocityY(-300);
        }

        if(this.cursors.down.isDown) {
            this.paddle1.setVelocityY(300);
        }

        if(!(this.cursors.up.isDown || this.cursors.down.isDown)) {
            this.paddle1.setVelocity(0);
        }

        if(this.wkey.isDown) {
            this.paddle2.setVelocityY(-300);
        }

        if(this.skey.isDown) {
            this.paddle2.setVelocityY(300);

        }
        if(!(this.wkey.isDown || this.skey.isDown)) {
            this.paddle2.setVelocity(0);
        }


    };

    //to view this scene from js console write game.scene.scenes[3].stopM
    //game.scene.scene[3].game.config.height is how you refer to height property in game object
}