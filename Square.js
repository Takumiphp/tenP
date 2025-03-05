//=======================
//四角
//=======================

//入力された四角のIDを取得
window.SquareMaking = {
    SquareID: function() {        
        const triangle = [
            {x: document.getElementById('Square1_x').value*100+canvasWidth_half, y: document.getElementById('Square1_y').value*-100+canvasHeight_half},
            {x: document.getElementById('Square2_x').value*100+canvasWidth_half, y: document.getElementById('Square2_y').value*-100+canvasHeight_half},
            {x: document.getElementById('Square3_x').value*100+canvasWidth_half, y: document.getElementById('Square3_y').value*-100+canvasHeight_half},
            {x: document.getElementById('Square4_x').value*100+canvasWidth_half, y: document.getElementById('Square4_y').value*-100+canvasHeight_half}            
        ];
        execution(triangle)
        //入力された値の箇所に点を作成
       strokeWeight(10);
       let p1 = createVector(document.getElementById('Square1_x').value*100+canvasWidth_half, document.getElementById('Square1_y').value*-100+canvasHeight_half);
       let p2 = createVector(document.getElementById('Square2_x').value*100+canvasWidth_half, document.getElementById('Square2_y').value*-100+canvasHeight_half);
       let p3 = createVector(document.getElementById('Square3_x').value*100+canvasWidth_half, document.getElementById('Square3_y').value*-100+canvasHeight_half);
       let p4 = createVector(document.getElementById('Square4_x').value*100+canvasWidth_half, document.getElementById('Square4_y').value*-100+canvasHeight_half);
       stroke((window.colors[0]));
       point(p1);
       stroke((window.colors[1]));
       point(p2);
       stroke((window.colors[2]));
       point(p3);
       stroke((window.colors[3]));
       point(p4);
    }
};
