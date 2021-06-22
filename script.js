const showDate = new Date("Dec 17, 2021 19:00:00");
const dateDiv = document.getElementById('show-date')
dateDiv.textContent = showDate.toDateString();

const dayDisplay = document.getElementById('days')
const hoursDisplay = document.getElementById('hours')
const minutesDisplay = document.getElementById('minutes')
const secondsDisplay = document.getElementById('seconds')

function displayTime(){
    const rightNow = new Date();
    const days = Math.floor((showDate.getTime() - rightNow.getTime())/(1000 * 60 * 60 * 24 ))
    const hours = Math.floor((showDate.getTime() - rightNow.getTime())/(1000 * 60 * 60))
    const minutes = Math.floor((showDate.getTime() - rightNow.getTime())/(1000 * 60))
    const seconds = Math.floor((showDate.getTime() - rightNow.getTime())/(1000))

    dayDisplay.textContent = `${days} days`
    hoursDisplay.textContent = `${hours - (days * 24)} hours`
    minutesDisplay.textContent = `${minutes - (hours * 60)} minutes`
    secondsDisplay.textContent = `${seconds - (minutes * 60)} seconds until show`
}

displayTime();
setInterval(displayTime, 1000)














