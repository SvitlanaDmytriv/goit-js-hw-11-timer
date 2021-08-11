

const refs = {
    timerIndicator: document.querySelector('#timer-1'),
    days: document.querySelector('span[data-value="days"]'),
    hours: document.querySelector('span[data-value="hours"]'),
    mins: document.querySelector('span[data-value="mins"]'),
    secs: document.querySelector('span[data-value="secs"]'),
};


class CountdownTimer{

    constructor({ targetDate, updateInterface}) {
        this.targetDate = targetDate,
        this.updateInterface = updateInterface
        
    }

    startCountdownTimer() {
      setInterval(
            () => {
             const currentTime = Date.now()
             const deltaTime = this.targetDate - currentTime
             if (deltaTime < 0) {
                 this.updateInterface(0,0,0,0)
                 return
                 }
             const time = this.getTimeComponents(deltaTime)
             const { days, hours, mins,secs } = time 
             this.updateInterface(days, hours,mins,secs)
            }
            ,1000
        )
    }
    
    
    getTimeComponents(time) {
        const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)))
        const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)))
        const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)))
        const secs = pad(Math.floor((time % (1000 * 60)) / 1000))
    return {days, hours, mins, secs}
    }

}


function updateTimer( days, hours, mins, secs) {
        refs.days.textContent = `${days}`;
        refs.hours.textContent = `${hours}`;
        refs.mins.textContent = `${mins}`;
        refs.secs.textContent = `${secs}`;;
}

function pad(value) {
    return String(value).padStart(2, '0');
}

const timer = new CountdownTimer({
  targetDate: new Date('Aug 30, 2021'),
  updateInterface:updateTimer,
})

timer.startCountdownTimer()
 



