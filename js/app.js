let score = 0;

class Enemy {
    constructor(x, y, speed) {
      this.x = x;
      this.y = y;
      this.speed = speed;
      this.sprite = 'images/enemy-bug.png';
    }

    update(dt) {
      this.x += this.speed;
      // You should multiply any movement by the dt parameter
      // which will ensure the game runs at the same speed for
      // all computers.
      this.checkCollisions();
    }

    render() {
      ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }

    checkCollisions() {
      if ((this.x-70 <= player.x && this.x+90>= player.x) && this.y == player.y) {
        player.resetPlayer();
      }
    }
}

var enemy1 = new Enemy(-100, 60, 1);
var enemy2 = new Enemy(-100, 145, 2);
var enemy3 = new Enemy(-100, 230, 3);


class Player {
    constructor(x=200, y=400) {
      this.x = x;
      this.y = y;
      this.icon = 'images/char-boy.png';
    }

    update(dt) {

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
      if (this.y < 0) {
        this.resetPlayer();
      }
    }

    resetPlayer() {
      setTimeout(function() {
        player.x = 200;
        player.y = 400;
      }, 250);
    }
}

var allEnemies = [enemy1, enemy2, enemy3];
var player = new Player();


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
