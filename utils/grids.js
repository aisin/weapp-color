const cubeMap = [2, 3, 4, 5, 5, 6, 6, 7, 7, 7, 8, 8, 8, 8, 8, 8, 9];

// 接收 score
const grids = function (score) {
  let cube = cubeMap[score] || cubeMap[cubeMap.length - 1];
  let ratio = 15 * Math.max(9 - cube, 1); // 难度系数配比
  ratio = score > 20 ? 10 : ratio,
    ratio = score > 40 ? 8 : ratio,
    ratio = score > 50 ? 5 : ratio;

  let baseColor = getColor(255 - ratio);
  let oneColor = getLvColor(baseColor[0], ratio)[1];
  let mainColor = baseColor[1];

  return {
    cube,
    mainColor,
    oneColor
  }
};

function getColor(mrt) {
  var rgb = [Math.round(Math.random() * mrt), Math.round(Math.random() * mrt), Math.round(Math.random() * mrt)],
    rgbStyle = "rgb(" + rgb.join(",") + ")";
  return [rgb, rgbStyle];
}

function getLvColor(mrt, ratio) {
  var brt = ratio,
    rgb = mrt.map(function (item) {
      return item + brt;
    }),
    rgbStyle = "rgb(" + rgb.join(",") + ")";
  return [rgb, rgbStyle];
}

module.exports = {
  grids
};