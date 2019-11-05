class Boot extends Phaser.Scene{

    constructor(){
        super("BootGame");
    }
    preload(){
    }



    create(){
        this.add.text(20,20,"Boot Game...");
        this.scene.start("PreloaderGame");

    }
}