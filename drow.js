let cnv;
const canvasHeight = 600;
const canvasWidth = 600;
const canvasHeight_half = 300;
const canvasWidth_half = 300;
let magnification = 1.0;
let step = 50; // グリッドの間隔は固定
let scaleFactor = 1; // 初期スケール（ラベルの倍率）
const lastFuc = [];

function setup() {
  cnv = createCanvas(canvasHeight, canvasWidth);
  cnv.parent("canvas-container");
  drawGrid();
}

function draw() {}

function mouseWheel(event) {
  // マウスホイールの方向で scaleFactor を増減
  if (event.delta < 0) {
    scaleFactor *= 2; // 数字を増やす
    magnification *= 2;
  } else {
    scaleFactor /= 2; // 数字を減らす
    magnification /= 2;
  }
  console.log(lastFuc);
  // 数値の範囲制限（最低 1、最大 100 まで）
  scaleFactor = constrain(scaleFactor, 1, 50);
  magnification = constrain(magnification, 1, 50);

  // 再描画
  removeCanvas();
  doFunc();
}

function keyPressed() {
  if (key === 'd') {
    removeCanvas();
  }
}

function removeCanvas() {
  cnv.remove();
  cnv = createCanvas(canvasHeight, canvasWidth);
  cnv.parent("canvas-container");
  drawGrid();
}

function drawGrid() {
  cnv.background(255);
  stroke(200);
  strokeWeight(1);

  // グリッド線（間隔は変えずに固定）
  for (let x = 0; x <= width; x += step) {
    line(x, 0, x, height);
  }
  for (let y = 0; y <= height; y += step) {
    line(0, y, width, y);
  }

  // X軸・Y軸
  stroke(0);
  strokeWeight(2);
  line(0, height / 2, width, height / 2);
  line(width / 2, 0, width / 2, height);

  // 座標ラベル
  fill(0);
  textSize(14);
  textAlign(CENTER, CENTER);

  // X軸のラベル（scaleFactor を掛ける）
  for (let x = 0; x <= width; x += step*2) {
    let label = ((x - width / 2) / 100) * scaleFactor;
    if (label !== 0) {
      text(label.toFixed(0), x, height / 2 + 20);
    } else {
      text(label.toFixed(0), x - 20, height / 2 + 20);
    }
  }

  // Y軸のラベル（scaleFactor を掛ける）
  for (let y = 0; y <= height; y += step*2) {
    let label = ((height / 2 - y) / 100) * scaleFactor;
    if (label !== 0) {
      text(label.toFixed(0), width / 2 - 20, y);
    }
  }
}
