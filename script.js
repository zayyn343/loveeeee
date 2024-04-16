const flower = document.querySelector('.flower');
const moveLeft = document.querySelector('#move-left');
const moveRight = document.querySelector('#move-right');

let x = 0;

moveLeft.addEventListener('click', () => {
  x -= 50;
  flower.style.left = x + 'px';
});

moveRight.addEventListener('click', () => {
  x += 50;
  flower.style.left = x + 'px';
});