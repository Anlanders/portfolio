let page = document.querySelector('.page');
let themeButton = document.querySelector('.theme-button');

themeButton.onclick = function() {
  page.classList.toggle('pro-light-theme');
  page.classList.toggle('pro-dark-theme');
};
pro