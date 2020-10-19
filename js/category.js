'use strict';

let articles = document.querySelectorAll('.articles__item');
let filter = document.querySelector('.articles__select');

filter.onchange = function () {
  for (let article of articles) {
    if (article.dataset.tag !== filter.value && filter.value !== 'all') {
      article.classList.add('hidden');
    } else {
      article.classList.remove('hidden');
    }
  }
};