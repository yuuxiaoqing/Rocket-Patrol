class Play extends Phaser.Scene{
    constructor(){
        super("playScene");
    }
    preload(){
        //load images/tiles sprite
        this.load.image('rocket', './assets/rocket.png');
        this.load.image('spaceship', './assets/spaceship.png');
        this.load.image('starfield', './assets/starfield.png');
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

    }

    update(){
        //scroll starfield
        this.starfield.tilePositionX -=4;
        
    }
}