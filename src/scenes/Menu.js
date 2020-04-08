class Menu extends Phaser.Scene{
    constructor(){
        super("menuScene");
    }
    create() {
    //override create() from phaser, which is blank
        //console.log(this);
        //display menu text
        this.add.text(20,20,"Rocket Patrol Menu");


        //launch the next scene "play"
        this.scene.start("playScene");

    }
}