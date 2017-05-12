/// <reference path="car.ts"/>
/// <reference path="util.ts"/>

class Game {
    public static instance:Game;
    private car: Car;
    private rock: Rock;

    private constructor() {
        this.car = new Car();
        this.rock = new Rock();
        requestAnimationFrame(this.gameLoop.bind(this));
    }

    public static getInstance(){
        if(Game.instance == null){
            Game.instance = new Game();
        }
        return Game.instance;
    }

    private gameLoop(){
        Util.calculateCollision(this.car,this.rock);
        this.car.move();
        this.rock.move();
        requestAnimationFrame(this.gameLoop.bind(this));
    }

    public endGame(carX){
        if(carX >= 350){
            document.getElementById("score").innerHTML = "Score : 0";
        }
        else{
            document.getElementById("score").innerHTML = "Score : " + carX * 7;
        }
    }

} 


// load
window.addEventListener("load", function() {
    Game.getInstance();
});