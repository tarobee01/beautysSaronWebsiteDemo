'use strict'

{
  const button = document.querySelector('.header-button');
  const overlay = document.querySelector('.overlay');
  button.addEventListener('click', () => {
    button.classList.toggle('trans');
    overlay.classList.toggle('show');
  });

}