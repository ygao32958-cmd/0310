function setup() {
  createCanvas(windowWidth, windowHeight);
  // 為了清晰起見，明確設定 HSB 的範圍 (色相, 飽和度, 亮度)
  colorMode(HSB, 360, 100, 100);
}

function draw() {
  // 設定一個柔和的粉色背景
  background(340, 15, 95);

  // 減少間距以產生更多圓
  let step = 40;

  // 根據 mouseX 決定顏色變化的速度
  let speed = map(mouseX, 0, width, 0.2, 2);

  // 使用巢狀迴圈來遍歷整個畫布的網格
  for (let j = step / 2; j < height; j += step) {
    for (let i = step / 2; i < width; i += step) {
      // 顏色會根據位置和時間產生變化
      // 色相會隨著 x 位置和時間變化，產生流動的彩虹效果
      let hue = (map(i, 0, width, 0, 360) + frameCount * speed) % 360;
      // 飽和度會根據 y 位置變化
      let saturation = map(j, 0, height, 50, 100);

      // 根據 mouseY 決定圓的大小，讓它們可以重疊
      let diameter = map(mouseY, 0, height, step * 0.5, step * 2);

      fill(hue, saturation, 90); // 使用計算出的 HSB 顏色
      noStroke(); // 移除圓圈的邊框
      ellipse(i, j, diameter, diameter); // 使用根據滑鼠位置計算出的直徑繪製圓形
    }
  }
}
