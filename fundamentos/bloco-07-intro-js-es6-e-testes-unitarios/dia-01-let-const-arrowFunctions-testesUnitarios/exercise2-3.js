const button = document.getElementsByTagName('button')[0];
let clickCount = 0;

button.addEventListener('click', () => {
  const counter = document.getElementsByTagName('p')[0];

  clickCount += 1;

  counter.innerText = clickCount;
})