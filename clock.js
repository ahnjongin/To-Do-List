const clock = document.querySelector("h2#clock");
const dates=document.querySelector("h2#date");
function getClock(){
  const date= new Date();
  const hours = String(date.getHours()).padStart(2,"0");
  const minutes = String(date.getMinutes()).padStart(2,"0");
  const seconds = String(date.getSeconds()).padStart(2,"0");
  clock.innerText=`${hours}:${minutes}:${seconds}`;
}
function getDate(){
  const dated= new Date();
  const year= String(dated.getFullYear()).padStart(2,"0");
  const month= String(dated.getMonth()+1).padStart(2,"0");
  const day=String(dated.getDate()).padStart(2,"0");
  dates.innerText=`${year}.${month}.${day}`;
}

getDate()
getClock()
setInterval(getClock,1000);
