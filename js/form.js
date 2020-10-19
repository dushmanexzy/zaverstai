let commentField = document.querySelector('.js-message');
let submitButton = document.querySelector('.js-submit');

commentField.oninput = function () {
  if (commentField.value.length > 200 || commentField.value.length < 10) {
    commentField.classList.add('warning');
    submitButton.disabled = true;
  } else {
    commentField.classList.remove('warning');
    submitButton.disabled = false;
  } 
};
