const rl = require("raylib");
const b = require("./bullet");
const g = require("./geometry");

function draw(tank) {
  g.drawTank(tank);
  rl.DrawCircle(100, 100, 20, rl.RED);
}

const update = function (screen, tank) {
  if (g.shouldMoveLeft(tank)) {
    tank.x -= tank.velocity;
  }

  if (g.shouldMoveRight(screen, tank)) {
    tank.x += tank.velocity;
  }

  if (g.shouldMoveUp(tank)) {
    tank.y -= tank.velocity;
  }

  if (g.shouldMoveDown(screen, tank)) {
    tank.y += tank.velocity;
  }

  if (rl.IsKeyDown(rl.KEY_Q)) {
    tank.cannon.angle += 2;
  }
  if (rl.IsKeyDown(rl.KEY_E)) {
    tank.cannon.angle -= 2;
  }

  b.moveBullet(tank.cannon.bullets);
  console.log(tank.cannon.bullets);

  if (rl.IsKeyPressed(rl.KEY_SPACE)) {
    b.createBullet(tank);
  }

  b.removeBullet(tank.cannon.bullets, screen);
};
module.exports = {
  draw,
  update,
};

// g.checkColosions(tank.cannon.bullets, {
//   x: 100,
//   y: 100,
//   size: 20,
//   color: rl.RED,
// });
