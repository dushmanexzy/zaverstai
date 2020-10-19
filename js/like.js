let likesNumber = document.querySelector('.js-like-counter');

likesNumber.onclick = function () {
  if (likesNumber.classList.contains('added')) {
    likesNumber.textContent--;
  } else {
    likesNumber.textContent++;
  }

  likesNumber.classList.toggle('added');
};
