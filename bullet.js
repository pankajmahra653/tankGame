const rl = require("raylib");
const g = require("./geometry");

function toRadian(degree) {
  return degree * (Math.PI / 180);
}

const createBullet = function (tank) {
  const { cannon, x, y } = tank;
  console.log(y);

  const { height, angle, bullets } = cannon;
  const angleRad = toRadian(angle - 90);

  const cx = Math.floor(Math.cos(angleRad) * height);

  const cy = Math.floor(Math.sin(angleRad) * height);

  const currx = x + Math.cos(angleRad) * height;
  const curry = y + Math.floor(Math.sin(angleRad) * height);

  const bullet = {
    x: currx,
    y: curry,
    size: 10,
    color: rl.BLACK,
    velocityx: cx / 10,
    velocityy: cy / 10,
  };

  bullets.push(bullet);
};

const moveBullet = function (bullets) {
  for (let bullet of bullets) {
    const { velocityx, velocityy } = bullet;
    bullet.x += velocityx;
    bullet.y += velocityy;
    console.log(bullet);
  }
};

const drawBullet = function (bullets) {
  for (const { x, y, size, color } of bullets) {
    rl.DrawCircle(x, y, size, color);
  }
};

const removeBullet = function (bullets, screen) {
  const { height: screenHeight, width: screenWidth } = screen;
  for (let i = 0; i < bullets.length; i++) {
    const { x, y } = bullets[i];
    if (x > screenWidth || x < 0 || y < 0 || y > screenHeight) {
      bullets.splice(i, 1);
    }
  }
};

module.exports = {
  // update,
  drawBullet,
  moveBullet,
  createBullet,
  removeBullet,
};
