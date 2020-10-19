let commentForm = document.querySelector('.js-form');
let commentList = document.querySelector('.comments ul');
let inputs = commentForm.querySelectorAll('.js-input');
let nameField = commentForm.querySelector('.js-name');

commentForm.onsubmit = function (evt) {
  evt.preventDefault();

  let newComment = document.createElement('li');
  let newName = document.createElement('p');
  let newText = document.createElement('p');
  
  newComment.classList.add('comment');
  newName.classList.add('comment-name');
  newText.classList.add('comment-text');
  
  newText.textContent = commentField.value;
  newName.textContent = nameField.value;
  
  commentField.value = '';
  
  commentList.append(newComment);
  newComment.append(newName);
  newComment.append(newText);
  
  for (let input of inputs)  {
    input.value = '';
  }
};
