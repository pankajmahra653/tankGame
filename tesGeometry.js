const rl = require("raylib");
const g = require("./geometry");

const getRandomValue = function (min, max) {
  return min + Math.random() * (max - min);
};

const updateCirclesY = function (bullets, circles) {
  for (const circle of circles) {
    circle.y += circle.velocityY;
  }
  addCircles(circles);
  removeCircles(circles);
  if (g.checkColosions(bullets, circles)) {
  }
};
const drawCircles = function (circles) {
  for (const { x, y, size, color } of circles) {
    rl.DrawCircle(x, y, size, color);
  }
};

const removeCircles = function (circles) {
  for (const circle of circles) {
    if (circle.y > 1200) {
      circles.shift();
      console.log(circles);
    }
  }
};

const addCircles = function (circles) {
  for (const circle of circles) {
    if (circles.length < 6) {
      circles.push(getCircle());
    }
    if (circle.y === 600) {
      circles.push(getCircle());
    }
  }
};

const getCircle = function () {
  return {
    x: getRandomValue(80, 900),
    y: -50,
    size: 25,
    velocityY: 2,
    color: rl.RED,
  };
};
module.exports = {
  updateCirclesY,
  getRandomValue,
  drawCircles,
  getCircle,
};

// const CheckCollide = function (circles, bullets) {
//   if (g.checkColosions(circles, bullets)) {
//     console.log(true);
//   }
// };
