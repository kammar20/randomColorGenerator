// variable
const currentColor = document.querySelector('.current-color');
const Button = document.querySelector('.btn');
const Current = document.querySelector('.current');
const body = document.body;

// function which return random color
function randomColorGemerator() {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  let randomColor = `rgb(${red},${green},${blue})`;

  return randomColor;
}

// event
Button.addEventListener('click', function () {
  let random = randomColorGemerator();
  body.style.backgroundColor = random;
  Current.textContent = random;
});
