// const rl = require("raylib");
// const b = require("./bullet");
// const g = require("./geometry");

// const create = function () {
//   return {
//     x: 100,
//     y: 100,
//     width: 50,
//     height: 75,
//     color: rl.YELLOW,
//     radius: 15,
//     velocity: 6,
//     cannon: {
//       width: 15,
//       height: 50,
//       angle: 0,
//       bullets: [],
//     },
//   };
// };

// function toRadian(degree) {
//   return degree * (Math.PI / 180);
// }

// function shouldCreateBullet() {
//   return rl.IsKeyPressed(rl.KEY_SPACE);
// }

// const draw = function (enemey) {
//   g.drawTank(enemey);
//   g.drawTank(enemey);
// };

// function update(enemy) {
//   if (rl.IsKeyDown(rl.KEY_T)) {
//     enemy.cannon.angle -= 2;
//   }
//   if (rl.IsKeyDown(rl.KEY_O)) {
//     enemy.cannon.angle += 2;
//   }
//   b.moveBullet(enemy.cannon.bullets);

//   if (shouldCreateBullet()) {
//     b.createBullet(enemy);
//   }

//   checkColosions(enemy.cannon.bullets, {
//     x: 100,
//     y: 100,
//     size: 20,
//     color: rl.RED,
//   });
// }

// module.exports = { update, draw };
