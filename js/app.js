let score = 0;
let scorelog = document.querySelector('.scorenumber');
let heartStatus = document.querySelectorAll('.heart');
let heartlog = [];
let allIcons = document.querySelectorAll('.char');
let icon ='images/char-boy.png';
let collision = 0;
var box1=document.querySelector('#box1');
var box2=document.querySelector('#box2');
var box3=document.querySelector('#box3');
var box4=document.querySelector('#box4');
var box5=document.querySelector('#box5');

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

      player.choosePlayer();
      heartCheck();
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
        if (player.y > 0 && player.y < 315) {
          heartlog.push(1);
        }
        player.x = 200;
        player.y = 400;
      }, 50);
    }

    choosePlayer() {
      allIcons.forEach(function(selectedPlayer) {
        selectedPlayer.addEventListener('click', function(e) {
          player.icon=this.id;
          checkPlayer();

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
        if (this.points == 0) {
          heartlog.pop();
        }
      }

    }
}
var allEnemies = [enemy1, enemy2, enemy3, enemy4, enemy5, enemy6, enemy7, enemy8, enemy9, enemy10, enemy11, enemy12];
var player = new Player(200, 400, icon);

var blueGem = new SpecialItem(-500, 60, Math.random()*5, 'images/Gem Blue.png', 10);
var greenGem = new SpecialItem(-1200, 230, Math.random()*5, 'images/Gem Green.png', 20);
var orangeGem = new SpecialItem(-1800, 145, Math.random()*5, 'images/Gem Orange.png', 30);
var key = new SpecialItem(-3000, 145, Math.random()*5, 'images/Key.png', 100);
var star = new SpecialItem(-8000, 60, Math.random()*5, 'images/Star.png', 1000);
var heart = new SpecialItem(-100, 230, Math.random()*5, 'images/Heart.png', 0);

var bonusItems = [blueGem, greenGem, orangeGem, key, star, heart];
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
function checkPlayer(){
if(player.icon=="images/char-boy.png"){
  box1.classList.remove('show');
  box2.classList.add('show');
  box3.classList.add('show');
  box4.classList.add('show');
  box5.classList.add('show');
}
if(player.icon=="images/char-cat-girl.png"){
  box1.classList.add('show');
  box2.classList.remove('show');
  box3.classList.add('show');
  box4.classList.add('show');
  box5.classList.add('show');
}if(player.icon=='images/char-horn-girl.png'){
  box1.classList.add('show');
  box2.classList.add('show');
  box3.classList.remove('show');
  box4.classList.add('show');
  box5.classList.add('show');
}if(player.icon=='images/char-pink-girl.png'){
  box1.classList.add('show');
  box2.classList.add('show');
  box3.classList.add('show');
  box4.classList.remove('show');
  box5.classList.add('show');
}if(player.icon=='images/char-princess-girl.png'){
  box1.classList.add('show');
  box2.classList.add('show');
  box3.classList.add('show');
  box4.classList.add('show');
  box5.classList.remove('show');
}}

function heartCheck() {
  if (heartlog.length == 0) {
    heartStatus[3].classList.remove('show');
    heartStatus[2].classList.remove('show');
    heartStatus[1].classList.remove('show');
    heartStatus[0].classList.remove('show');
    // return heartlog;
  }
  if (heartlog.length == 1) {
    heartStatus[3].classList.add('show');
    heartStatus[2].classList.remove('show');
    heartStatus[1].classList.remove('show');
    heartStatus[0].classList.remove('show');
    // return heartlog;
  }
  if (heartlog.length == 2) {
    heartStatus[3].classList.add('show');
    heartStatus[2].classList.add('show');
    heartStatus[1].classList.remove('show');
    heartStatus[0].classList.remove('show');
    // return heartlog;
  }
  if (heartlog.length == 3) {
    heartStatus[3].classList.add('show');
    heartStatus[2].classList.add('show');
    heartStatus[1].classList.add('show');
    heartStatus[0].classList.remove('show');
    // return heartlog;
  }
  if (heartlog.length == 4) {
    heartStatus[3].classList.add('show');
    heartStatus[2].classList.add('show');
    heartStatus[1].classList.add('show');
    heartStatus[0].classList.add('show');
    setTimeout(alert(`Game Over!
 Score: ${score}

Play Again?`), 200);
    heartStatus[0].classList.remove('show');
    heartStatus[1].classList.remove('show');
    heartStatus[2].classList.remove('show');
    heartStatus[3].classList.remove('show');
    heartlog=[];
    score=0;
  }

}
