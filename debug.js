const rl = require("raylib");
const g = require("./geometry");
const draw = function (enemeis, circles, score) {
  makeScore(enemeis, circles, score);
};

const makeScore = function (enemeis, circles, score) {
  if (g.checkColosions(enemeis, circles)) {
    score += 1;
  }
};

module.exports = {
  draw,
};
