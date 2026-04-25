'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

document.addEventListener('click', (e) => {
  // координати кліку (viewport)
  const clickX = e.clientX;
  const clickY = e.clientY;

  // розміри павука
  const spiderRect = spider.getBoundingClientRect();
  const spiderWidth = spiderRect.width;
  const spiderHeight = spiderRect.height;

  // межі стіни (теж viewport!)
  const wallRect = wall.getBoundingClientRect();
  const wallLeft = wallRect.left;
  const wallTop = wallRect.top;
  const wallRight = wallRect.right;
  const wallBottom = wallRect.bottom;

  // центр павука під курсор
  let newLeft = clickX - spiderWidth / 2;
  let newTop = clickY - spiderHeight / 2;

  // обмеження по X
  if (newLeft < wallLeft) {
    newLeft = wallLeft;
  }

  if (newLeft + spiderWidth > wallRight) {
    newLeft = wallRight - spiderWidth;
  }

  // обмеження по Y
  if (newTop < wallTop) {
    newTop = wallTop;
  }

  if (newTop + spiderHeight > wallBottom) {
    newTop = wallBottom - spiderHeight;
  }

  // ❗ переводимо з viewport у координати всередині wall
  const finalLeft = newLeft - wallLeft;
  const finalTop = newTop - wallTop;

  spider.style.left = `${finalLeft}px`;
  spider.style.top = `${finalTop}px`;
});
