'use strict'

let timer, interval;
let remainingTime = 0;
let isPaused = false;

function startCountdown() {
  const hours = parseInt(document.getElementById('hours').value) || 0;
  const minutes = parseInt(document.getElementById('minutes').value) || 0;
  const seconds = parseInt(document.getElementById('seconds').value) || 0;
  remainingTime = (hours * 3600) + (minutes * 60) + seconds;
  updateTimerDisplay(remainingTime);
  clearInterval(interval);
  interval = setInterval(countdown, 1000);
}

function countdown() {
  if (remainingTime <= 0) {
    clearInterval(interval);
    document.getElementById('timer').textContent = "Time's up!";
    document.body.style.backgroundColor = "orange";
    return;
  }
  remainingTime--;
  updateTimerDisplay(remainingTime);
}

function stopCountdown() {
  if (isPaused) {
    interval = setInterval(countdown, 1000);
    isPaused = false;
  } else {
    clearInterval(interval);
    isPaused = true;
  }
}

function resetCountdown() {
  clearInterval(interval);
  remainingTime = 0;
  document.getElementById('timer').textContent = "00:00:00";
  document.body.style.backgroundColor = "black";
  isPaused = false;
}

function updateTimerDisplay(time) {
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = time % 60;
  document.getElementById('timer').textContent =
    ("0" + hours).slice(-2) + ":" +
    ("0" + minutes).slice(-2) + ":" +
    ("0" + seconds).slice(-2);
}

function countdown() {
  if (remainingTime <= 0) {
    clearInterval(interval);
    document.getElementById('timer').textContent = "Time's up!";
    document.getElementById('timer').style.color = "red";
    if (document.getElementById('alarmToggle').checked) {
      document.getElementById('alarmSound').play();
    }
    return;
  }
  remainingTime--;
  updateTimerDisplay(remainingTime);
}
