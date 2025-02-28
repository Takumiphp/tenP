let cnv;
const canvasHeight = 600;
const canvasWidth = 600;
const canvasHeight_half = canvasHeight / 2;
const canvasWidth_half = canvasWidth / 2;
function setup() {
  cnv = createCanvas(canvasHeight, canvasWidth);
  cnv.parent("canvas-container");
  drawGrid();
  }
  
  function draw() {
  }
  
  function keyPressed() {
    if (key === 'd') {
      removeCanvas();
    }
  }

  function removeCanvas(){
    cnv.remove();
    cnv = createCanvas(canvasHeight, canvasWidth);
    cnv.parent("canvas-container");
    drawGrid();
  }

  function drawGrid() {
    cnv.background(255); // 背景を白に
    stroke(200); // グリッド線の色（薄いグレー）
    strokeWeight(1);
    
    let step = 100; // 1メモリの幅
    
    // 縦のグリッド線
    for (let x = 0; x <= width; x += step) {
        line(x, 0, x, height);
    }
    
    // 横のグリッド線
    for (let y = 0; y <= height; y += step) {
        line(0, y, width, y);
    }
    
    // X軸とY軸
    stroke(0); // 軸の色（黒）
    strokeWeight(2);
    line(0, height / 2, width, height / 2); // X軸
    line(width / 2, 0, width / 2, height); // Y軸

    // 座標ラベル
    fill(0);
    textSize(14);
    textAlign(CENTER, CENTER);
    
    for (let x = 0; x <= width; x += step) {
      if(x / 100 - width / 200 != 0){
        text(x / 100 - width / 200, x, height / 2 + 20);
      }
  }

  for (let y = 0; y <= height; y += step) {
    if((height / 2 - y) / 100 != 0){
      text((height / 2 - y) / 100, width / 2 - 20, y);
    }
  }
}
  