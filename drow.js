let cnv;
const canvasHeight = 600;
const canvasWidth = 600;
const canvasHeight_half = canvasHeight / 2;
const canvasWidth_half = canvasWidth / 2;
function setup() {
  cnv = createCanvas(canvasHeight, canvasWidth);
  cnv.parent("canvas-container");
  cnv.background(200);
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
    cnv.background(200);
  }
  