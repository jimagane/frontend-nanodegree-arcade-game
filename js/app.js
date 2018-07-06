let score = 0;
let scorelog = document.querySelector('.scorenumber');
let heartlog = [];
let heartStatus = document.querySelectorAll('.heart');
let icon = 'images/char-boy.png';
let allIcons = document.querySelectorAll('.char');
let box1 = document.querySelector('#box1');
let box2 = document.querySelector('#box2');
let box3 = document.querySelector('#box3');
let box4 = document.querySelector('#box4');
let box5 = document.querySelector('#box5');

class Enemy {
    constructor(x, y, speed) {
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.sprite = 'images/enemy-bug.png';
    }

    update(dt) {
        this.x += this.speed*dt*45;
        // Loop position once offscreen.
        if (this.x > 600) {
            this.x = -1000;
        }
        this.checkCollisions();
    }

    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }

    checkCollisions() {
        if ((this.x-70 <= player.x && this.x+80 >= player.x) && this.y == player.y) {
            player.resetPlayer();
        }
    }
}

// Vary enemy x and y positions, randomize speed.
let enemy1 = new Enemy(-100, 60, Math.random()*5);
let enemy2 = new Enemy(-100, 145, Math.random()*5);
let enemy3 = new Enemy(-100, 230, Math.random()*5);
let enemy4 = new Enemy(-300, 60, Math.random()*5);
let enemy5 = new Enemy(-300, 145, Math.random()*5);
let enemy6 = new Enemy(-300, 230, Math.random()*5);
let enemy7 = new Enemy(-600, 60, Math.random()*5);
let enemy8 = new Enemy(-600, 145, Math.random()*5);
let enemy9 = new Enemy(-600, 230, Math.random()*5);
let enemy10 = new Enemy(-900, 60, Math.random()*5);
let enemy11 = new Enemy(-900, 145, Math.random()*5);
let enemy12 = new Enemy(-900, 230, Math.random()*5);
let allEnemies = [enemy1, enemy2, enemy3, enemy4, enemy5, enemy6, enemy7, enemy8, enemy9, enemy10, enemy11, enemy12];

class Player {
    constructor(x = 200, y = 400, icon) {
        this.x = x;
        this.y = y;
        this.icon = icon;
    }

    update(dt) {
        // Winning condition
        if (this.y < 0) {
            this.resetPlayer();
        }
        // Update score in header
        scorelog.innerText = score;
        // Update player selection in header
        this.choosePlayer();
        // Update heart status in header
        this.heartCheck();
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
        const self = this;
        setTimeout(function() {
            // Increase score if player has reached water.
            if (self.y < 0) {
              score += 1;
            }
            // Decrease heart if player contacts enemy.
            if (self.y > 0 && self.y < 315) {
              heartlog.push(1);
            }
            self.x = 200;
            self.y = 400;
        }, 50);
    }

    choosePlayer() {
        const self = this;
        allIcons.forEach(function(selectedPlayer) {
            selectedPlayer.addEventListener('click', function(e) {
              self.icon = this.id;
              self.checkPlayer();
            });
        });
    }

    // Updates number of hearts in header as well as game over condition
    heartCheck() {
        if (heartlog.length == 0) {
            heartStatus[3].classList.remove('show');
            heartStatus[2].classList.remove('show');
            heartStatus[1].classList.remove('show');
            heartStatus[0].classList.remove('show');
        }
        if (heartlog.length == 1) {
            heartStatus[3].classList.add('show');
            heartStatus[2].classList.remove('show');
            heartStatus[1].classList.remove('show');
            heartStatus[0].classList.remove('show');
        }
        if (heartlog.length == 2) {
            heartStatus[3].classList.add('show');
            heartStatus[2].classList.add('show');
            heartStatus[1].classList.remove('show');
            heartStatus[0].classList.remove('show');
        }
        if (heartlog.length == 3) {
            heartStatus[3].classList.add('show');
            heartStatus[2].classList.add('show');
            heartStatus[1].classList.add('show');
            heartStatus[0].classList.remove('show');
        }
        if (heartlog.length == 4) {
            heartStatus[3].classList.add('show');
            heartStatus[2].classList.add('show');
            heartStatus[1].classList.add('show');
            heartStatus[0].classList.add('show');
            setTimeout(alert(`
                Game Over!
                Score: ${score}
                Play Again?`), 200);
            heartStatus[0].classList.remove('show');
            heartStatus[1].classList.remove('show');
            heartStatus[2].classList.remove('show');
            heartStatus[3].classList.remove('show');
            heartlog = [];
            score = 0;
        }
    }

    // Displays selector image under selected character in header.
    checkPlayer() {
        if (player.icon == "images/char-boy.png") {
            box1.classList.remove('show');
            box2.classList.add('show');
            box3.classList.add('show');
            box4.classList.add('show');
            box5.classList.add('show');
        }
        if (player.icon == "images/char-cat-girl.png") {
            box1.classList.add('show');
            box2.classList.remove('show');
            box3.classList.add('show');
            box4.classList.add('show');
            box5.classList.add('show');
        }
        if (player.icon == 'images/char-horn-girl.png') {
            box1.classList.add('show');
            box2.classList.add('show');
            box3.classList.remove('show');
            box4.classList.add('show');
            box5.classList.add('show');
        }
        if (player.icon == 'images/char-pink-girl.png') {
            box1.classList.add('show');
            box2.classList.add('show');
            box3.classList.add('show');
            box4.classList.remove('show');
            box5.classList.add('show');
        }
        if (player.icon == 'images/char-princess-girl.png') {
            box1.classList.add('show');
            box2.classList.add('show');
            box3.classList.add('show');
            box4.classList.add('show');
            box5.classList.remove('show');
        }
    }
}

let player = new Player(200, 400, icon);

class SpecialItem {
    constructor(x, y, speed, sprite, points) {
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.sprite = sprite;
        this.points = points;
    }

    update(dt) {
        this.x += this.speed*dt*45;
        if(this.x > 600) {
            this.x = -10000;
        }
        this.checkCollisions();
    }

    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }

    checkCollisions() {
        if ((this.x-70 <= player.x && this.x+80 >= player.x) && this.y == player.y) {
            setTimeout(this.x = -10000, 100);
            score += this.points;
            // Add heart instead of points for heart item
            if (this.points == 0) {
                heartlog.pop();
            }
        }
    }
}

let blueGem = new SpecialItem(-500, 60, Math.random()*5, 'images/Gem Blue.png', 10);
let blueGem2 = new SpecialItem(-20000, 145, Math.random()*5, 'images/Gem Blue.png', 10);
let blueGem3 = new SpecialItem(-20000, 230, Math.random()*5, 'images/Gem Blue.png', 10);
let greenGem = new SpecialItem(-1200, 230, Math.random()*5, 'images/Gem Green.png', 20);
let greenGem2 = new SpecialItem(-20000, 145, Math.random()*5, 'images/Gem Green.png', 20);
let greenGem3 = new SpecialItem(-20000, 60, Math.random()*5, 'images/Gem Green.png', 20);
let orangeGem = new SpecialItem(-1800, 145, Math.random()*5, 'images/Gem Orange.png', 30);
let orangeGem2 = new SpecialItem(-20000, 60, Math.random()*5, 'images/Gem Orange.png', 30);
let orangeGem3 = new SpecialItem(-20000, 230, Math.random()*5, 'images/Gem Orange.png', 30);
let key = new SpecialItem(-3000, 145, Math.random()*5, 'images/Key.png', 100);
let key2 = new SpecialItem(-20000, 230, Math.random()*5, 'images/Key.png', 100);
let key3 = new SpecialItem(-20000, 60, Math.random()*5, 'images/Key.png', 100);
let star = new SpecialItem(-8000, 60, Math.random()*5, 'images/Star.png', 1000);
let star2 = new SpecialItem(-20000, 145, Math.random()*5, 'images/Star.png', 1000);
let star3 = new SpecialItem(-20000, 230, Math.random()*5, 'images/Star.png', 1000);
let heart = new SpecialItem(-8000, 230, Math.random()*5, 'images/Heart.png', 0);
let heart2 = new SpecialItem(-20000, 145, Math.random()*5, 'images/Heart.png', 0);
let heart3 = new SpecialItem(-20000, 60, Math.random()*5, 'images/Heart.png', 0);
let bonusItems = [blueGem, blueGem2, blueGem3, greenGem, greenGem2, greenGem3, orangeGem, orangeGem2, orangeGem3, key, key2, key3, star, star2, star3, heart, heart2, heart3];

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
