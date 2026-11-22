const rl = require("raylib");
const b = require("./bullet");

const checkColision = function (circle1, circle2) {
  const { x: x1, y: y1, size: size1 } = circle1;
  const { x: x2, y: y2, size: size2 } = circle2;
  const r_total = size1 + size2;
  const d = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

  return r_total >= d;
};

const checkColosions = function (bullets, circles) {
  for (let i = bullets.length - 1; i >= 0; i--) {
    for (let j = circles.length - 1; j >= 0; j--) {
      if (checkColision(bullets[i], circles[j])) {
        // bullets.splice(i, 1);
        circles.splice(j, 1);
      }
    }
  }
};

const toRadian = function (degree) {
  return degree * (Math.PI / 180);
};

const shouldMoveLeft = function (rect) {
  const { x, width } = rect;
  return rl.IsKeyDown(rl.KEY_LEFT) && x > width / 2;
};

const shouldMoveRight = function (screen, rect) {
  const { x, width } = rect;
  const { width: screenWidth } = screen;
  return rl.IsKeyDown(rl.KEY_RIGHT) && x < screenWidth - width / 2;
};

const shouldMoveUp = function (rect) {
  const { y, height } = rect;
  return rl.IsKeyDown(rl.KEY_UP) && y > height / 2;
};

const shouldMoveDown = function (screen, rect) {
  const { y, height } = rect;
  return rl.IsKeyDown(rl.KEY_DOWN) && y < screen.height - height / 2;
};

const createCannon = function (x, y, width, height) {
  return {
    x,
    y,
    width,
    height,
  };
};

const drawTank = function (tank) {
  const { x: tankX, y: tankY, height, width, cannon, color, radius } = tank;
  const { width: cannWidth, height: cannHeight, bullets, angle } = cannon;

  const x = tankX - width / 2;
  const y = tankY - height / 2;
  const rect = createCannon(tankX, tankY, cannWidth, cannHeight);

  const origin = { x: cannWidth / 2, y: cannHeight };

  rl.DrawRectangle(x, y, width, height, color);
  rl.DrawCircle(tankX, tankY, radius, rl.GREEN);
  rl.DrawRectanglePro(rect, origin, angle, rl.PINK);
  b.drawBullet(bullets);
};

const isEnemyInside = function (enemies, line) {
  for (const enemy of enemies) {
    if (enemy.y + enemy.size > line) {
      return true;
    }
  }
};

module.exports = {
  drawTank,
  toRadian,
  shouldMoveDown,
  shouldMoveLeft,
  shouldMoveUp,
  shouldMoveRight,
  checkColosions,
  isEnemyInside,
};
