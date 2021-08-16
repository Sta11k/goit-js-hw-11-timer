// https://it-blog.ru/js/kak-sozdat-tajmer-obratnogo-otchyota-na-chistom-javascript/#4 
class CountdownTimer {
  constructor( selector,targetDate) {
    this.dayRef = document.querySelector("span[data-value='days']");
    this.hourRef = document.querySelector("span[data-value='hours']");
    this.minRef = document.querySelector("span[data-value='mins']");
    this.secRef = document.querySelector("span[data-value='secs']");
    //  this.dateStart = null;
    //  selector: '#timer-1',
    this.targetDate = new Date('Jul 17, 2022').getTime();
    this.timerId = null;
    this.action = this.action.bind(this);
    this.start = this.start.bind(this);
    // this.stop = this.stop.bind(this);
     this.dateStart = Date.now();
;
  }

  action() {
   
    // this.dateStart = Date.now();
    
  
    const time = this.targetDate - this.dateStart;
    console.log(this.dateStart);
    console.log(this.targetDate );
   console.log(time);
    if (time >= 0) {
      const days = Math.floor(time / (1000 * 60 * 60 * 24));
      console.log(days);
      const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      console.log(hours);
      const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
      console.log(mins);
      const secs = Math.floor((time % (1000 * 60)) / 1000);
      console.log(secs);


    this.dayRef.textContent = days < 10 ? `0${days}` : days;
    this.hourRef.textContent = hours < 10 ? `0${hours}` : hours;
    this.minRef.textContent = mins < 10 ? `0${mins}`: mins;
    this.secRef.textContent = secs < 10 ? `0${secs}` : secs;
    } else {
      // clearInterval(this.timerId);
      console.log("Finito");
    }

  

   
    //  console.log(this.secRef.textContent);
   }
   start() {

     this.timerId = setInterval(this.action, 1000);
      console.log(this.dateStart);
    //  setInterval(this.action, 1000);
    // return this.dateStart = Date.now();

      
  }

  
}
 const timerOf = new CountdownTimer(
   {
   selector: '#timer-1',
   targetDate: new Date('Jul 17, 2019'),
    
});
        //  timerOf.action();

        // timerOf.start();


// stopwatch

// class Stopwatch {
//   constructor() {
//     this.timerId = null;
//     this.dateStart = null;
//     this.startBtn = document.querySelector("#start");
//     this.stopBtn = document.querySelector("#stop");
//     this.sec = document.querySelector(".seconds");
//     this.min = document.querySelector(".minutes");
//     this.hours = document.querySelector('.hours')

//     this.action = this.action.bind(this);
//     this.start = this.start.bind(this);
//     this.stop = this.stop.bind(this);
//   }

//   action() {
//     const delta = Date.now() - this.dateStart;
//     //   console.log(delta);
//     const sec = Math.floor((delta / 1000) % 60);
//     const minutes = Math.floor((delta / 1000 / 60) % 60);
//     const hours = Math.floor((delta / 1000 / 60 / 60) % 24);

//     this.sec.textContent = sec < 10 ? `0${sec}` : sec;
//     this.min.textContent = minutes < 10 ? `0${minutes}`: minutes;
//     this.hours.textContent = hours < 10 ? `0${hours}` : hours
//   }

//   start() {
//     this.timerId = setInterval(this.action, 500);
//     this.dateStart = Date.now();
//   }

//   stop() {
//     clearInterval(this.timerId);
//   }

//   init() {
//     this.startBtn.addEventListener("click", this.start);
//     this.stopBtn.addEventListener("click", this.stop);
//   }
// }

// const watch = new Stopwatch();
// watch.init();