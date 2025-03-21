//=======================
//実行
//=======================

//図形作成開始
window.buttonClick = function() {
    removeCanvas();    
    if(window.selectBox.value ==="Triangle"){//三角              
        //三角形の作成
        window.TriangleMaking.TriangleID();
        window.pushFunc("Triangle");
    } else if(selectBox.value ==="Square"){//四角
        //四角形の作成
        window.SquareMaking.SquareID();
        window.pushFunc("Square");
    } else if(selectBox.value ==="Circle"){//円※検討中。
        window.pushFunc("Circle");
    }
}