var Player = require('./Player.js');

class Player1 extends Player {
  constructor(x, y, width, height, color, dx, dy) {
    super(x, y, width, height, color);
    this.dx = dx;
    this.dy = dy;
  }

  checkPlayer1Collision(Player2) {
    let {width, height, trail} = this;
    let Player1Position = trail[0];

    for (var i = 0; i < Player2.trail.length; i++) {
      let Player2Trail = Player2.trail[i];

      if (Player1Position[2] < Player2Trail[0] ||
      Player1Position[0] > Player2Trail[2] ||
      Player1Position[3] < Player2Trail[1] ||
      Player1Position[1] > Player2Trail[3]) {
        this.move;
      } else {
        this.move = false;
        this.crash = true;
      }
    }

    for (var j = width + height; j < trail.length; j++) {
      let Player1Trail = trail[j];

      if (Player1Position[2] < Player1Trail[0] ||
      Player1Position[0] > Player1Trail[2] ||
      Player1Position[3] < Player1Trail[1] ||
      Player1Position[1] > Player1Trail[3]) {
        this.move;
      } else {
        this.move = false;
        this.crash = true;
      }
    }
  }
}

module.exports = Player1;
