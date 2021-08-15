// import colors from './colors.json';

const startBtn = document.querySelector('[data-action="start"]');
const stopBtn = document.querySelector('[data-action="stop"]');

startBtn.addEventListener('click', onStartBtnClick);
stopBtn.addEventListener('click', onStopBtnClick);

const startBtnIntervalId = setInterval(() => console.log('Приветик'), 1000);

function onStartBtnClick() {

}

function onStopBtnClick() {
    clearInterval(startBtnIntervalId);
};


const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};