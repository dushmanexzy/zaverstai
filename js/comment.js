let commentForm = document.querySelector('.comments__form');
let commentList = document.querySelector('.comments__list');
let inputs = commentForm.querySelectorAll('.comments-form__input');
let nameField = commentForm.querySelector('.input-name');

commentForm.onsubmit = function (evt) {
  evt.preventDefault();

  let newComment = document.createElement('li');
  let newInfoBlock = document.createElement('div');
  let newAvatar = document.createElement('img');
  let newName = document.createElement('span');
  let newText = document.createElement('p');
  
  newComment.classList.add('comment');
  newInfoBlock.classList.add('comment__author');
  newAvatar.classList.add('author__logo');
  newName.classList.add('comment-name');
  newText.classList.add('comment-text');
  
  newText.textContent = commentField.value;
  newName.textContent = nameField.value;
  
  commentField.value = '';

  // li
  commentList.append(newComment);
  // li > div + p
  newComment.append(newInfoBlock);
  newComment.append(newText);
  // div > img + span
  newInfoBlock.append(newAvatar);
  newInfoBlock.append(newName);
 
  
  for (let input of inputs)  {
    input.value = '';
  }
};
