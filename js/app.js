// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

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
    }
}

var allEnemies = [];
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
