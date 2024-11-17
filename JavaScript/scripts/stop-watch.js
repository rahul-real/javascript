let seconds = 0;
let minutes = 0;
let intervalId;
const startElement = document.querySelector('.js-start-btn');
startElement.addEventListener('click', () => {
    //isStop = true;
    console.log(seconds);
    intervalId = setInterval(()=>{
      seconds++;
      if(seconds === 60){
        minutes++;
        seconds = 0;
      }
      console.log(seconds);
      document.querySelector('.display-time')
      .innerHTML = `${minutes}:${seconds}`;      
    }, 1000);


  });
document.querySelector('.js-stop-btn')
  .addEventListener('click', () => {
    clearInterval(intervalId);
    document.querySelector('.display-time')
      .innerHTML = `${minutes}:${seconds}`;      
  });

document.querySelector('.js-reset-btn')
  .addEventListener('click', () => {
    seconds = 0;
    minutes = 0;
    document.querySelector('.display-time')
      .innerHTML = `${minutes}:${seconds}`;      
});