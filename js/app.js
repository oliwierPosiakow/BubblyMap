import {data} from "../data/data.js";

const container = document.getElementById('lines')
const bubbleData = data.data;
let rotate = 90
let animationCount = 100000

//function which provides random number to perform random animations

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

//creating DOM elements based on data provided from a file

for(let item of bubbleData) {
  const line = document.createElement('div');
  line.classList.add('line');
  line.style.width = `${getRandom(350, 390)}px`;
  line.style.transform = `rotate(${rotate * 45}deg)`;

  const span = document.createElement('span');
  span.classList.add('dot');

  const bubble = document.createElement('div');
  bubble.classList.add('bubble');
  bubble.style.backgroundColor = item?.color;

  const image = document.createElement('img');
  image.style.transform = `rotate(-${rotate * 45}deg)`;
  image.src = item?.path
  image.alt = item?.name + ' logo'

  bubble.appendChild(image);
  line.appendChild(span)
  line.appendChild(bubble);
  container.appendChild(line);
  rotate++;
}

//adding animation to floating dots
const dots = document.querySelectorAll('.dot')
for(let dot of dots) {
  dot.animate([
    {
      left: 0
    },
    {
      left: '100%'
    },
    {
      left: 0
    },
  ], {duration: getRandom(10,20) * 1000, iterations: 100000})
}

//adding animation to bubbles with logo
const bubbles = document.querySelectorAll('.bubble')
for(let bubble of bubbles) {
  bubble.animate([
    {
      transform: `translate(0%, 0%)`
    },
    {
      transform: `translate(-${getRandom(1,8)}%, ${getRandom(1,8)}%)`
    },
    {
      transform: `translate(-${getRandom(1,8)}%, ${getRandom(1,8)}%)`
    },
    {
      transform: `translate(-${getRandom(1,8)}%, ${getRandom(1,8)}%)`
    },
    {
      transform: `translate(-${getRandom(1,8)}%, ${getRandom(1,8)}%)`
    },
    {
      transform: `translate(-${getRandom(1,8)}%, ${getRandom(1,8)}%)`
    },
    {
      transform: `translate(0%, 0%)`
    },
  ], {duration: 8000, iterations: 100000})
}






