//selecting the three classes we want to use
const hourElement = document.querySelector(".hour");
const minuteElement = document.querySelector(".minute");
const secondElement = document.querySelector(".second");

//will update the clock with the correct time
function updateClock(){
  const currentTime = new Date();
  //will call the function every second
  // setTimeout(updateClock, 1000); can also be done using this
  const hour = currentTime.getHours();
  const minute = currentTime.getMinutes();
  const second = currentTime.getSeconds();
  console.log(hour,minute,second);
  //this variable tells us how much the hour hand should move every hour
  const hourDeg = (hour/12) * 360;
  //next we need to select the hour element and change its style
  hourElement.style.transform = `rotate(${hourDeg}deg)`;
  //repeat for the minute hand
  const minDeg = (minute/60)*360;
  minuteElement.style.transform = `rotate(${minDeg}deg)`;
  //repeat for the second hand
  const secDeg = (second/60)*360;
  secondElement.style.transform = `rotate(${secDeg}deg)`;
}

// updateClock(); we no longer need this line since we are using the setInterval method

setInterval(updateClock, 1000);
