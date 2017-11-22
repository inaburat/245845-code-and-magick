'use strict';

window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);

  ctx.fillStyle = 'rgba(256, 256, 256, 1.0)';
  ctx.strokeRect(100, 10, 420, 270);
  ctx.fillRect(100, 10, 420, 270);

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';

  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);

  var max = -1;

  for (var i = 0; i < times.length; i++) {
    var time = times[i];
    if (time > max) {
      max = time;
    }
  }

  var histogramHeight = 150;
  var step = histogramHeight / max;
  var barWidth = 40;
  var indent = 50 + barWidth;
  var initialX = 155;
  var initialY = 250;
  var lineHeight = 15;
  var randomOpacity = function () {
    var rnd = Math.random();
    var color = 'rgba(0, 0, 255,' + rnd + ')';
    return color;
  };

  for (i = 0; i < times.length; i++) {
    ctx.fillStyle = '#000';
    ctx.fillText(parseInt(times[i], 10), initialX + indent * i, initialY - times[i] * step - lineHeight);

    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = randomOpacity();
    }
    ctx.fillRect(initialX + indent * i, initialY - times[i] * step, barWidth, times[i] * step);

    ctx.fillStyle = '#000';
    ctx.fillText(names[i], initialX + indent * i, initialY + lineHeight);
  }
};
