

let i = 0;
let txt = "                          I'm Mahmoud             I'm front-end developer (React).";
let speed = 200; 
function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typing").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
    
  }
}
typeWriter();

function getTime(){
  let days = ["Saturday","Sunday","Monday","Tuseday","Wendsday","Thrusday","Friday"]
  let date = new Date();
  let day = date.getDay();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let theday
  for(let i =0;i<days.length;i++){
    theday = days[day+1]
    if(days.length > 7){
      theday = days[day[0]]
    }
  }
  if(hours >12){
    hours = hours -12;
  }
  if(hours < 10){
    hours = "0" + hours
  }
  if(seconds < 10){
    seconds = "0" + seconds
  }
  if(minutes < 10){
    minutes ="0" + minutes
  }
  document.getElementById('time').innerHTML = theday;
  document.getElementById('hours').innerHTML = hours;
  document.getElementById('minutes').innerHTML = minutes;
  document.getElementById('seconds').innerHTML = seconds;
 

}
setInterval(getTime,1000)
