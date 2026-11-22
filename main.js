const r = require("raylib");
const g = require("./geometry");
const e = require("./enemey");
const d = require("./debug");
const tank = require("./tank");
const t = require("./tesGeometry");
const setup = function () {
  const w = {
    isGameOver: false,
    total: { score: 0 },
    screen: {
      width: 1000,
      height: 1000,
      FPS: 50,
      TITLE: "todopng",
    },
    tank: {
      x: 400,
      y: 500,
      width: 100,
      height: 150,
      color: r.WHITE,
      radius: 30,
      velocity: 6,
      cannon: {
        width: 20,
        height: 100,
        angle: 0,
        bullets: [],
      },
    },
    circles: [t.getCircle(), t.getCircle(), t.getCircle(), t.getCircle()],
  };
  r.InitWindow(w.screen.width, w.screen.height, w.screen.TITLE);
  r.SetTargetFPS(w.screen.FPS);
  return w;
};

const update = function (w) {
  if (g.isEnemyInside(w.circles, w.tank.y)) {
    w.isGameOver = true;
  }
  if (w.isGameOver) {
    return;
  }

  tank.update(w.screen, w.tank);
  t.updateCirclesY(w.tank.cannon.bullets, w.circles);
  // e.update(w.enemy);
};
console.log(g);

const draw = function (w) {
  r.BeginDrawing();
  r.ClearBackground(r.BROWN);

  if (w.isGameOver) {
    r.DrawText("GameOver", 0, 400, 200, r.PINK);
  }
  d.draw(w.tank.cannon.bullets, w.circles, w.total.score);
  tank.draw(w.tank);
  // //e.draw(w.enemy);
  t.drawCircles(w.circles);
  r.EndDrawing();
};

const loop = function (w) {
  while (!r.WindowShouldClose()) {
    draw(w);
    update(w);
  }
};

const main = function () {
  const w = setup();
  loop(w);
};

main();
