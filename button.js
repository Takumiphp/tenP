let selectBox;

function buttonClick() {
    let width = document.getElementById('Square_width');
    let height = document.getElementById('Square_height');

    if(selectBox.value ==="Triangle"){
        
    } else if(selectBox.value ==="Square"){
        removeCanvas();
        // 始点のx座標、始点のy座標、横幅、縦幅
        rect(100, 100, width.value*50, height.value*50);
    } else if(selectBox.value ==="Circle"){

    }
    
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

