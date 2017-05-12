var Wheel = (function () {
    function Wheel(x, y) {
        var container = document.getElementById("car");
        var div = document.createElement("wheel");
        container.appendChild(div);
        div.style.transform = "translate(" + x + "px," + y + "px)";
    }
    return Wheel;
}());
var Car = (function () {
    function Car() {
        this.braking = false;
        this.width = 145;
        var container = document.getElementById("container");
        this.div = document.createElement("car");
        container.appendChild(this.div);
        this.div.setAttribute("id", "car");
        new Wheel(20, 30);
        new Wheel(100, 30);
        this.x = 0;
        this.y = 220;
        var rando = Math.floor((Math.random() * 4) + 1);
        Car.speed = rando;
        window.addEventListener("keyup", this.onKey.bind(this));
        this.move();
    }
    Car.prototype.getWidth = function () {
        return this.width;
    };
    Car.prototype.getX = function () {
        return this.x;
    };
    Car.prototype.getY = function () {
        return this.y;
    };
    Car.prototype.move = function () {
        if (Car.speed >= 0 && this.braking == true) {
            Car.speed -= 1;
        }
        if (this.x >= 350) {
            Car.speed = 0;
            Game.instance.endGame(this.x);
        }
        if (Car.speed > 0) {
            this.x += Car.speed;
        }
        else {
            Game.instance.endGame(this.x);
        }
        this.div.style.transform = "translate(" + this.x + "px," + this.y + "px)";
    };
    Car.prototype.onKey = function (event) {
        console.log('keyPress');
        this.braking = true;
    };
    return Car;
}());
var Util = (function () {
    function Util() {
    }
    Util.calculateCollision = function (ob1, ob2) {
        if (!!ob1.getX && !!ob2.getWidth) {
            if (ob1.getX() < ob2.getX() + ob2.getWidth() &&
                ob1.getX() + ob1.getWidth() > ob2.getX()) {
                console.log('coll');
                Rock.speed = Car.speed;
            }
        }
    };
    return Util;
}());
var Game = (function () {
    function Game() {
        this.car = new Car();
        this.rock = new Rock();
        requestAnimationFrame(this.gameLoop.bind(this));
    }
    Game.getInstance = function () {
        if (Game.instance == null) {
            Game.instance = new Game();
        }
        return Game.instance;
    };
    Game.prototype.gameLoop = function () {
        Util.calculateCollision(this.car, this.rock);
        this.car.move();
        this.rock.move();
        requestAnimationFrame(this.gameLoop.bind(this));
    };
    Game.prototype.endGame = function (carX) {
        if (carX >= 350) {
            document.getElementById("score").innerHTML = "Score : 0";
        }
        else {
            document.getElementById("score").innerHTML = "Score : " + carX * 7;
        }
    };
    return Game;
}());
window.addEventListener("load", function () {
    Game.getInstance();
});
var Rock = (function () {
    function Rock() {
        this.width = 62;
        var container = document.getElementById("container");
        this.div = document.createElement("rock");
        container.appendChild(this.div);
        this.div.setAttribute("id", "rock");
        Rock.speed = 0;
        this.x = 490;
        this.y = 210;
        this.move();
    }
    Rock.prototype.getWidth = function () {
        return this.width;
    };
    Rock.prototype.getX = function () {
        return this.x;
    };
    Rock.prototype.getY = function () {
        return this.x;
    };
    Rock.prototype.move = function () {
        if (Rock.speed > 0) {
            this.x += Rock.speed;
        }
        this.div.style.transform = "translate(" + this.x + "px," + this.y + "px)";
    };
    return Rock;
}());
//# sourceMappingURL=main.js.map