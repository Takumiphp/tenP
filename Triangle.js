//=======================
//三角
//=======================
//入力された三角のIDを取得
window.TriangleMaking = {
    TriangleID: function() {        
        const triangle = [
            {x: document.getElementById('Triangle1_x').value*100/magnification+canvasWidth_half, y: document.getElementById('Triangle1_y').value*-100/magnification+canvasHeight_half},
            {x: document.getElementById('Triangle2_x').value*100/magnification+canvasWidth_half, y: document.getElementById('Triangle2_y').value*-100/magnification+canvasHeight_half},
            {x: document.getElementById('Triangle3_x').value*100/magnification+canvasWidth_half, y: document.getElementById('Triangle3_y').value*-100/magnification+canvasHeight_half}
        ];
        execution(triangle)
                
        //入力された値の箇所に点を作成
       strokeWeight(10);
        
       let p1 = createVector(
           Number(document.getElementById('Triangle1_x').value) * 100 / magnification + canvasWidth_half, 
           Number(document.getElementById('Triangle1_y').value) * -100 / magnification + canvasHeight_half
       );
       let p2 = createVector(
           Number(document.getElementById('Triangle2_x').value) * 100 / magnification + canvasWidth_half, 
           Number(document.getElementById('Triangle2_y').value) * -100 / magnification + canvasHeight_half
       );
       let p3 = createVector(
           Number(document.getElementById('Triangle3_x').value) * 100 / magnification + canvasWidth_half, 
           Number(document.getElementById('Triangle3_y').value) * -100 / magnification + canvasHeight_half
       );

       // colors 配列の安全チェック
       if (!window.colors || !Array.isArray(window.colors) || window.colors.length < 3) {
           console.error("Error: window.colors is not properly initialized.", window.colors);
           return;
       }

       // 各ポイントに異なる色を適用
       stroke(window.colors[0]);
       strokeWeight(10);
       point(p1.x, p1.y);

       stroke(window.colors[1]);
       strokeWeight(10);
       point(p2.x, p2.y);

       stroke(window.colors[2]);
       strokeWeight(10);
       point(p3.x, p3.y);
    }
};



