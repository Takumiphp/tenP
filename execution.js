//=======================
//実行
//=======================

//図形作成開始
window.buttonClick = function() {
    let width = document.getElementById('Square_width');
    let height = document.getElementById('Square_height');
    removeCanvas();
    
    if(window.selectBox.value ==="Triangle"){//三角
        // const triangle = [
        //     {x: document.getElementById('Triangle1_x').value*100+canvasWidth_half, y: document.getElementById('Triangle1_y').value*-100+canvasHeight_half},
        //     {x: document.getElementById('Triangle2_x').value*100+canvasWidth_half, y: document.getElementById('Triangle2_y').value*-100+canvasHeight_half},
        //     {x: document.getElementById('Triangle3_x').value*100+canvasWidth_half, y: document.getElementById('Triangle3_y').value*-100+canvasHeight_half}
        // ];
        // execution(triangle)
        // window.Triangle.pointAndColor();
        // strokeWeight(10);
        // let p1 = createVector(document.getElementById('Triangle1_x').value*100+canvasWidth_half, document.getElementById('Triangle1_y').value*-100+canvasHeight_half);
        // let p2 = createVector(document.getElementById('Triangle2_x').value*100+canvasWidth_half, document.getElementById('Triangle2_y').value*-100+canvasHeight_half);
        // let p3 = createVector(document.getElementById('Triangle3_x').value*100+canvasWidth_half, document.getElementById('Triangle3_y').value*-100+canvasHeight_half);
        // stroke('red');
        // point(p1);
        // stroke('blue');
        // point(p2);
        // stroke('green');
        // point(p3);
        
        //三角形の作成
        window.TriangleMaking.TriangleID();
    } else if(selectBox.value ==="Square"){//四角
        window.SquareMaking.SquareID();
        // 始点のx座標、始点のy座標、横幅、縦幅
        rect(100, 100, width.value*50, height.value*50);
    } else if(selectBox.value ==="Circle"){//円※検討中。

    }
}