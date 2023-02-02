const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

let load = 0;

// runs blurring every 30ms
let int = setInterval(blurring, 30);

function blurring(){
  load++

  if (load > 99){
    clearInterval(int);
  }
  console.log(load);

  loadText.innerText = `${load}%`;
  loadText.style.opacity = scale(load, 0, 100, 1, 0);
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

// take a range of numbers and maps it to another range of numbers
const scale  = (number, inMin, inMax, outMin, outMax) => {
  return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}