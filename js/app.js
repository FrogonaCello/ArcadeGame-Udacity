//
// Enemiy class: constructor + methods 
//

const Enemy = function Enemy(x, y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = x + 101;
    this.y = y;
    this.speed = speed;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-owl.png';
};

// Update the enemy's position

Enemy.prototype.update = function (dt) {
    
   this.x += this.speed * dt;
        
    if (this.x >= 500) {
        this.x = 0;
    }
    
};

// Draw the enemy on the screen

Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

//
//    Player class: constructor + methods
//
        
const Player = function Player(x,y) {
    this.x = x;
    this.y = y;
    this.leftRigth = 101;
    this.upDown = 83;
    this.sprite = 'images/char-frog-with-umbrella.png';
};

// collision with enemies and winning the game

Player.prototype.update = function(dt) {

    for(let enemy of allEnemies) {
        if (this.y === enemy.y && (enemy.x + 50.5 > this.x && enemy.x < this.x + 50.5)) {
            this.x = 190;
            this.y = 400;
        }
    }

    if (player.y <= 50) {
        allWinners.push(winner1);
        allWinners.push(winner2);
        allWinners.push(winner3);
        allWinners.push(winner4);
        allWinners.push(winner5);
        allWinners.push(winner6);
        allWinners.push(winner7);
        player.x = 190;
        player.y = 400; 
 
    }
    
    for(let winner of allWinners) {
        if (this.y === winner.y && (winner.x + 50.5 > this.x && winner.x < this.x + 50.5 )) {
            this.x = 190;
            this.y = 400;
        }
        
    }  
    
};

// rendering the player

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// what to do, when eventlistener logged a keydown

Player.prototype.handleInput = function(allowedKeys) {
    if (allowedKeys == 'left') {
        if (this.x > 0) {
            this.x -= this.leftRigth;
        }
    }
    
    if (allowedKeys == 'right') {
        if (this.x < 300) {
            this.x += this.leftRigth;
        }
    }
    
    if (allowedKeys == 'up') {
        if (this.y > 50) {
            this.y -= this.upDown;
        }
    }
    
    if (allowedKeys == 'down') {
        if (this.y < 400) {
            this.y += this.upDown;
        }
    }
};

//
// Stars, shown, when game is won; functionalitiy same as with enemies
//

const Winner = function Winner(x,y,speed,sprite) {
    this.x = x + 101;
    this.y = y;
    this.speed = speed;
    this.sprite = 'images/star.png';
};

Winner.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Winner.prototype.update = function (dt) {
        
        this.x += this.speed * dt;
    
        if (this.x >= 500) {
        this.x = -90;
    }
    };

//
// Creating the Objects
//

const allEnemies = [new Enemy(-200,234,30), new Enemy(-200,151,70), new Enemy(-200,68,40)];// Place all enemy objects in an array called allEnemies

let player = new Player(190,400);

let winner1 = new Winner(0,68,30);
let winner2 = new Winner(-50,68,50);
let winner3 = new Winner(10,68,20);
let winner4 = new Winner(0,234,30);
let winner5 = new Winner(-50,234,50);
let winner6 = new Winner(10,234,20);
let winner7 = new Winner(100,151,50);
const allWinners = [];



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.

document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
