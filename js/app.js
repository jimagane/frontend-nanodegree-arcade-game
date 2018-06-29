let score = 0;
let scorelog = document.querySelector('.scorenumber');
let heartStatus = document.querySelectorAll('.heart');
let heartlog = document.querySelectorAll('.show');
let allIcons = document.querySelectorAll('.char');
let icon ='images/char-boy.png';



class Enemy {
    constructor(x, y, speed) {
      this.x = x;
      this.y = y;
      this.speed = speed;
      this.sprite = 'images/enemy-bug.png';
    }

    update(dt) {
      this.x += this.speed;
      if(this.x > 600) {
        this.x = -1000;
      }
      // You should multiply any movement by the dt parameter
      // which will ensure the game runs at the same speed for
      // all computers.
      this.checkCollisions();
    }

    render() {
      ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }

    checkCollisions() {
      if ((this.x-70 <= player.x && this.x+80>= player.x) && this.y == player.y) {
        player.resetPlayer();
      }

    }
}

var enemy1 = new Enemy(-100, 60, Math.random()*5);
var enemy2 = new Enemy(-100, 145, Math.random()*5);
var enemy3 = new Enemy(-100, 230, Math.random()*5);
var enemy4 = new Enemy(-300, 60, Math.random()*5);
var enemy5 = new Enemy(-300, 145, Math.random()*5);
var enemy6 = new Enemy(-300, 230, Math.random()*5);
var enemy7 = new Enemy(-600, 60, Math.random()*5);
var enemy8 = new Enemy(-600, 145, Math.random()*5);
var enemy9 = new Enemy(-600, 230, Math.random()*5);
var enemy10 = new Enemy(-900, 60, Math.random()*5);
var enemy11 = new Enemy(-900, 145, Math.random()*5);
var enemy12 = new Enemy(-900, 230, Math.random()*5);

class Player {
    constructor(x=200, y=400, icon) {
      this.x = x;
      this.y = y;
      this.icon = icon;
    }

    update(dt) {
      if (this.y < 0) {
        player.resetPlayer();
      }
      scorelog.innerText = score;

      allIcons.forEach(function(selectedPlayer) {
      selectedPlayer.addEventListener('click', function(e) {
        player.icon = this.id;
        
      })
      });
    }

    render() {
        ctx.drawImage(Resources.get(this.icon), this.x, this.y);
    }

    handleInput(action) {
      if (action == 'up' && this.y > 0) {
        this.y -= 85;
      }
      if (action == 'down' && this.y < 400) {
        this.y += 85;
      }
      if (action == 'left' && this.x > 0) {
        this.x -= 100;
      }
      if (action == 'right' && this.x < 400) {
        this.x += 100;
      }
    }

    resetPlayer() {
      setTimeout(function() {
        if (player.y < 0) {
          score += 1;
        }
        player.x = 200;
        player.y = 400;
      }, 50);
    }

    choosePlayer() {
      allIcons.forEach(function(selectedPlayer) {
        selectedPlayer.addEventListener('click', function(e) {
          player.icon=this.id;
          return this.id;
        })
    });
    }
}

class SpecialItem {
    constructor(x, y, speed, sprite, points) {
      this.x = x;
      this.y = y;
      this.speed = speed;
      this.sprite = sprite;
      this.points = points;
    }

    update(dt) {
      this.x += this.speed;
      if(this.x > 600) {
        this.x = -10000;
      }
      // You should multiply any movement by the dt parameter
      // which will ensure the game runs at the same speed for
      // all computers.
      this.checkCollisions();
    }

    render() {
      ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }

    checkCollisions() {
      if ((this.x-70 <= player.x && this.x+80>= player.x) && this.y == player.y) {
        setTimeout(this.x = -10000, 100);
        score += this.points;
      }
    }
}
var allEnemies = [enemy1, enemy2, enemy3, enemy4, enemy5, enemy6, enemy7, enemy8, enemy9, enemy10, enemy11, enemy12];
var player = new Player(200, 400, icon);

var blueGem = new SpecialItem(-500, 60, Math.random()*5, 'images/Gem Blue.png', 10);
var greenGem = new SpecialItem(-1200, 230, Math.random()*5, 'images/Gem Green.png', 20);
var orangeGem = new SpecialItem(-1800, 145, Math.random()*5, 'images/Gem Orange.png', 30);
var heart = new SpecialItem(-1000, 60, Math.random()*5, 'images/Heart.png');
var key = new SpecialItem(-3000, 145, Math.random()*5, 'images/Key.png', 100);
var star = new SpecialItem(-8000, 60, Math.random()*5, 'images/Star.png', 1000);
var bonusItems = [blueGem, greenGem, orangeGem, key, star];
// This listens for key presses and sends the keys to your
// Player.handleInput() method. Provided by Udacity for this project.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
