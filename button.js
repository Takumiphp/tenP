let selectBox;

function buttonClick() {
    let width = document.getElementById('Square_width');
    let height = document.getElementById('Square_height');

    if(selectBox.value ==="Triangle"){
        removeCanvas();
        const triangle = [
            {x: document.getElementById('Triangle1_x').value*100+canvasWidth_half, y: document.getElementById('Triangle1_y').value*-100+canvasHeight_half},
            {x: document.getElementById('Triangle2_x').value*100+canvasWidth_half, y: document.getElementById('Triangle2_y').value*-100+canvasHeight_half},
            {x: document.getElementById('Triangle3_x').value*100+canvasWidth_half, y: document.getElementById('Triangle3_y').value*-100+canvasHeight_half}
        ];
        fill('lightblue');
        stroke('black');
        strokeWeight(2);
        beginShape();
        for (let i = 0; i < triangle.length; i++) {
            vertex(triangle[i].x, triangle[i].y);
        }
        endShape(CLOSE);
        pointAndColor();
    } else if(selectBox.value ==="Square"){
        removeCanvas();
        // 始点のx座標、始点のy座標、横幅、縦幅
        rect(100, 100, width.value*50, height.value*50);
    } else if(selectBox.value ==="Circle"){

    }
}
// 点を打つ
function pointAndColor(){
    strokeWeight(10);
    let p1 = createVector(document.getElementById('Triangle1_x').value*100+canvasWidth_half, document.getElementById('Triangle1_y').value*-100+canvasHeight_half);
    let p2 = createVector(document.getElementById('Triangle2_x').value*100+canvasWidth_half, document.getElementById('Triangle2_y').value*-100+canvasHeight_half);
    let p3 = createVector(document.getElementById('Triangle3_x').value*100+canvasWidth_half, document.getElementById('Triangle3_y').value*-100+canvasHeight_half);
    stroke('red');
    point(p1);
    stroke('blue');
    point(p2);
    stroke('green');
    point(p3);
}

    document.addEventListener("DOMContentLoaded", function () {
        selectBox = document.querySelector("select[name='shapes']");
        var triangleDiv = document.getElementById("Triangle");
        var squareDiv = document.getElementById("Square");
        var circleDiv = document.getElementById("Circle");

        // 初期状態で非表示にする
        triangleDiv.style.display = "none";
        squareDiv.style.display = "none";
        circleDiv.style.display = "none";

        // セレクトボックスの変更イベントを監視
        selectBox.addEventListener("change", function () {
            if (selectBox.value === "Triangle") {
                triangleDiv.style.display = "block";
            } else {
                triangleDiv.style.display = "none";
            }
            if (selectBox.value === "Square") {
                squareDiv.style.display = "block";
            } else {
                squareDiv.style.display = "none";
            }
            if (selectBox.value === "Circle") {
                circleDiv.style.display = "block";
            } else {
                circleDiv.style.display = "none";
            }
        });
    });

// 1cm = 50

