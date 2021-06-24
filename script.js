const showDate = new Date("Dec 17, 2021 19:00:00"); // creates end date
const dateDiv = document.getElementById('show-date')
dateDiv.textContent = showDate.toDateString();
const daysUntilDiv = document.getElementById('day-string')

let days;
let hours;
let minutes;
let seconds;

const msToSeconds = 1000;
const msToMin = 1000 * 60;
const msToHours = 1000 * 60 * 60;
const msToDays = 1000 * 60 * 60 * 24;


function pad(digit) {
    digit = digit + ''
    if (digit.length === 1) {
    return '0' + digit // adds zero in front of digit
    }
    return digit
}

function displayTime(a, n) {
    number = [
      [1, 1, 1, 0, 1, 1, 1], // 0
      [0, 0, 1, 0, 0, 1, 0], // 1
      [1, 0, 1, 1, 1, 0, 1], // 2
      [1, 0, 1, 1, 0, 1, 1], // 3
      [0, 1, 1, 1, 0, 1, 0], // 4
      [1, 1, 0, 1, 0, 1, 1], // 5
      [1, 1, 0, 1, 1, 1, 1], // 6
      [1, 0, 1, 0, 0, 1, 0], // 7
      [1, 1, 1, 1, 1, 1, 1], // 8
      [1, 1, 1, 1, 0, 1, 1]  // 9
    ]

    n = number[n]
    i = 0
    while (i < n.length) {
    crystal = document.getElementById(a + (i + 1))
    if (n[i] === 0) {
        crystal.style.opacity = '0.125'
    }
    else {
        crystal.style.opacity = '1'
    }
    i++
    }
}

function updateTime(){
    const rightNow = new Date(); // gets current time
    const timeUntilShow = showDate.getTime() - rightNow.getTime();
    
    days = Math.floor((timeUntilShow)/(msToDays))
    hours =   pad(Math.floor((timeUntilShow % msToDays) / msToHours));
    minutes = pad(Math.floor((timeUntilShow % msToHours) / msToMin));
    seconds = pad(Math.floor((timeUntilShow % msToMin) / msToSeconds));   
    
    displayTime('a', hours[0])
    displayTime('b', hours[1])
    displayTime('c', minutes[0])
    displayTime('d', minutes[1])
    displayTime('e', seconds[0])
    displayTime('f', seconds[1])
}

setInterval(updateTime, 1000)

function updateDays() {
    const today = new Date();
    const timeUntilShow = showDate.getTime() - today.getTime();
    days = Math.floor((timeUntilShow)/(msToDays))
    daysUntilDiv.textContent = `${days} days until the show!`
}

updateDays();












