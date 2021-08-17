const refs = {
 
    timerDay:  document.querySelector("span[data-value='days']"),
    timerHour: document.querySelector("span[data-value='hours']"),
    timerMin:  document.querySelector("span[data-value='mins']"),
    timerSec: document.querySelector("span[data-value='secs']"),
    timerNumber: document.getElementById("timer-1"),
  };
  class CountdownTimer {
    constructor({ selector, targetDate }) {
        this.selector = selector;
        this.targetDate = targetDate;
      
      }
    
    setIntAction = setInterval(() => {
      const nowDate = Date.now();
        const time = this.targetDate - nowDate;
        // console.log(time);
      this.action(time);
      this.timeFinish(time);
    }, 1000);
      
    action(time) {
      const timerDay = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
      const timerHour = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      const timerMin = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
      const timerSec = this.pad(Math.floor((time % (1000 * 60)) / 1000));
      refs.timerDay.textContent = `${timerDay}`;
      refs.timerHour.textContent = `${timerHour}`;
      refs.timerMin.textContent = `${timerMin}`;
      refs.timerSec.textContent = `${timerSec}`;
    }
    pad(value) {
      return String(value).padStart(2, "0");
    }
    timeFinish(time) {
      if (time <= 0) {
        clearInterval(this.setIntAction);
        refs. timerNumber.textContent = "Finished";
      }
    }
  };
  new CountdownTimer({
    selector: "#timer-1",
    targetDate: new Date("September 06, 2021"),
  });   