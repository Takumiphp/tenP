function setup() {
    createCanvas(400, 400); // 400x400のキャンバスを作成
    background(240); // 背景をグレーに設定
}

function draw() {
    fill(100, 200, 255); // 塗りつぶし色を水色に設定
    stroke(0); // 線の色を黒に設定
    strokeWeight(2); // 線の太さを設定
    ellipse(200, 200, 100, 100); // 円を描画

    fill(255, 100, 100);
    rect(150, 250, 100, 50); // 四角形を描画
}
