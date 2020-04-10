let config = {

    type: Phaser.CANVAS, 
    width: 640,
    height: 480,
    scene: [Menu, Play], // order of the classes matter, phaser does the first one first

};


let game = new Phaser.Game(config);

//reserve some keyboard variables
let keyF, keyLEFT, keyRIGHT;


