//=======================
//共通関数
//=======================

//図形の作成実行
    function execution(Target){
        fill('lightblue');
        stroke('black');
        strokeWeight(2);
    beginShape();
    for (let i = 0; i < Target.length; i++) {
        vertex(Target[i].x, Target[i].y);
    }
    endShape(CLOSE);
    
}

// 点の作成
function makePoint(){
	strokeWeight(10);
	let point1 = createVector(document.getElementById('Point1_x').value*100/magnification+canvasWidth_half, document.getElementById('Point1_y').value*-100/magnification+canvasHeight_half);
	let point2 = createVector(document.getElementById('Point2_x').value*100/magnification+canvasWidth_half, document.getElementById('Point2_y').value*-100/magnification+canvasHeight_half);
	stroke('black');
	point(point1);
	point(point2);
    window.pushFunc("Point");
}

// 線の作成
function makeLine(){
	strokeWeight(2);
	stroke('black');
	line(document.getElementById('Point1_x').value*100/magnification+canvasWidth_half, document.getElementById('Point1_y').value*-100/magnification+canvasHeight_half,document.getElementById('Point2_x').value*100/magnification+canvasWidth_half, document.getElementById('Point2_y').value*-100/magnification+canvasHeight_half);
    window.pushFunc("Line");
}

// 最後に押下したボタンを保存
window.pushFunc = function(func){
    console.log("ここまで");
    if(lastFuc.length === 0){
        lastFuc.push(func);
    } else {
        lastFuc.pop();
        lastFuc.push(func);
    }
}

window.doFunc = function(){
    if(lastFuc.length != 0){
        switch (lastFuc[0]) {
            case "Triangle":
                window.TriangleMaking.TriangleID();
                break;
            case "Square":
                window.TriangleMaking.SquareID();
                break;
            case "Point":
                makePoint();
                break;
            case "Line":
                makeLine();
                break;
        }
    }
}

// 図形の選択
    document.addEventListener("DOMContentLoaded", function () {
        window.selectBox = document.querySelector("select[name='shapes']");
        var triangleDiv = document.getElementById("Triangle");
        var squareDiv = document.getElementById("Square");
        var circleDiv = document.getElementById("Circle");

        // 初期状態で非表示にする
        triangleDiv.style.display = "none";
        squareDiv.style.display = "none";
        circleDiv.style.display = "none";

        // セレクトボックスの変更イベントを監視
        window.selectBox.addEventListener("change", function () {
            if (window.selectBox.value === "Triangle") {
                triangleDiv.style.display = "block";
            } else {
                triangleDiv.style.display = "none";
            }
            if (window.selectBox.value === "Square") {
                squareDiv.style.display = "block";
            } else {
                squareDiv.style.display = "none";
            }
            if (window.selectBox.value === "Circle") {
                circleDiv.style.display = "block";
            } else {
                circleDiv.style.display = "none";
            }
        });
    });

