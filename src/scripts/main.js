'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

document.addEventListener('click', (e) => {
  // координати кліку (з урахуванням прокрутки)
  const clickX = e.clientX + window.scrollX;
  const clickY = e.clientY + window.scrollY;

  // розміри павука
  const spiderRect = spider.getBoundingClientRect();
  const spiderWidth = spiderRect.width;
  const spiderHeight = spiderRect.height;

  // межі стіни
  const wallRect = wall.getBoundingClientRect();
  const wallLeft = wallRect.left + window.scrollX;
  const wallTop = wallRect.top + window.scrollY;
  const wallRight = wallLeft + wallRect.width;
  const wallBottom = wallTop + wallRect.height;

  // центр павука під курсор
  let newLeft = clickX - spiderWidth / 2;
  let newTop = clickY - spiderHeight / 2;

  // обмеження по горизонталі
  if (newLeft < wallLeft) {
    newLeft = wallLeft;
  }

  if (newLeft + spiderWidth > wallRight) {
    newLeft = wallRight - spiderWidth;
  }

  // обмеження по вертикалі
  if (newTop < wallTop) {
    newTop = wallTop;
  }

  if (newTop + spiderHeight > wallBottom) {
    newTop = wallBottom - spiderHeight;
  }

  // застосування позиції
  spider.style.left = `${newLeft}px`;
  spider.style.top = `${newTop}px`;
});
