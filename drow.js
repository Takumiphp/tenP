let cnv;
function setup() {
  cnv = createCanvas(600, 450);
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
    cnv = createCanvas(600, 450);
    cnv.parent("canvas-container");
    cnv.background(200);
  }
  