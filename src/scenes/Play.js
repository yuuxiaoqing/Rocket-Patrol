class Play extends Phaser.Scene{
    constructor(){
        super("playScene");
    }
    preload(){
        //load images/tiles sprite
        //texture
        this.load.image('rocket', 'assets/rocket.png');
        this.load.image('spaceship', 'assets/spaceship.png');
        this.load.image('starfield', 'assets/starfield.png');
    }
    create() {
    //override create() from phaser, which is blank
        //console.log(this);

        //place tile sprite
        this.starfield = this.add.tileSprite(0,0,640,480,"starfield").setOrigin(0,0);
        // white rectangle borders (x, y, width, height, color)
        this.add.rectangle(5,5,630,32,0xFFFFFF).setOrigin(0,0) 
        this.add.rectangle(5,433,630,32,0xFFFFFF).setOrigin(0,0) 
        this.add.rectangle(5,5,32,455,0xFFFFFF).setOrigin(0,0) 
        this.add.rectangle(603,5,32,455,0xFFFFFF).setOrigin(0,0) 
        // green UI background
        this.add.rectangle(37,42,566,64,0X00FF00).setOrigin(0,0);

        // add rocket (p1)
        // constructor(scene, x, y, texture, frame)
        this.p1Rocket = new Rocket(this, game.config.width/2, 420, 'rocket').setScale(0.5,0.5).setOrigin(0,0);

        //add spaceship
        this.ship01 = new Spaceship(this, game.config.width +192, 132, 'spaceship', 0, 30).setOrigin(0,0);
        this.ship02 = new Spaceship(this, game.config.width +120, 170, 'spaceship', 0, 30).setOrigin(0,0);
        this.ship03 = new Spaceship(this, game.config.width +100, 220, 'spaceship', 0, 30).setOrigin(0,0);
        //define keyboard keys
        keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);


    }

    update(){
        //scroll starfield
        this.starfield.tilePositionX -=4;

        //update rocket
        this.p1Rocket.update();

        //update spaceship
        this.ship01.update();
        this.ship02.update();
        this.ship03.update();
        
    }
}