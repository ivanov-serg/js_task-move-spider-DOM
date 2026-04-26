'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

document.addEventListener('click', (e) => {
  const wallRect = wall.getBoundingClientRect();

  // координати кліку ВІДНОСНО СТІНИ
  const clickX = e.clientX - wallRect.left;
  const clickY = e.clientY - wallRect.top;

  const spiderRect = spider.getBoundingClientRect();
  const spiderWidth = spiderRect.width;
  const spiderHeight = spiderRect.height;

  // центр павука під курсор
  let newLeft = clickX - spiderWidth / 2;
  let newTop = clickY - spiderHeight / 2;

  // обмеження (вже в координатах СТІНИ)
  if (newLeft < 0) {
    newLeft = 0;
  }

  if (newTop < 0) {
    newTop = 0;
  }

  if (newLeft + spiderWidth > wallRect.width) {
    newLeft = wallRect.width - spiderWidth;
  }

  if (newTop + spiderHeight > wallRect.height) {
    newTop = wallRect.height - spiderHeight;
  }

  spider.style.left = `${newLeft}px`;
  spider.style.top = `${newTop}px`;
});
