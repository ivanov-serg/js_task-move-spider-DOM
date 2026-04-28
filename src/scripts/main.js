'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

document.addEventListener('click', (e) => {
  const wallRect = wall.getBoundingClientRect();

  // координати кліку відносно СТІНИ
  const clickX = e.clientX - wallRect.left;
  const clickY = e.clientY - wallRect.top;

  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;

  let newLeft = clickX - spiderWidth / 2;
  let newTop = clickY - spiderHeight / 2;

  const maxX = wall.clientWidth - spiderWidth;
  const maxY = wall.clientHeight - spiderHeight;

  if (newLeft < 0) {
    newLeft = 0;
  }

  if (newTop < 0) {
    newTop = 0;
  }

  if (newLeft > maxX) {
    newLeft = maxX;
  }

  if (newTop > maxY) {
    newTop = maxY;
  }

  spider.style.left = `${newLeft}px`;
  spider.style.top = `${newTop}px`;
});
