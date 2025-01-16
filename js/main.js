const timerDisplay = document.querySelector('.timer'),
	startButton = document.querySelector('.start'),
	stopButton = document.querySelector('.stop'),
	resetButton = document.querySelector('.reset');

let startTime = 0;
let elapsedTime = 0;
let timerInterval;

function updateTimerDisplay() {
	const time = elapsedTime + (Date.now() - startTime);
	const seconds = Math.floor((time / 1000) % 60);
	const minutes = Math.floor(time / (1000 * 60) % 60);
	const hours = Math.floor(time / (1000 * 60 * 60) % 24);
	const milliseconds = Math.floor((time % 1000) / 10);
	timerDisplay.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}.${String(milliseconds).padStart(2, '0')}`;
};

function startTimer() {
	startTime = Date.now();
	timerInterval = setInterval(updateTimerDisplay, 100);
	startButton.disabled = true;
	stopButton.disabled = false;
	resetButton.disabled = false;
};

function stopTimer() {
	elapsedTime += Date.now() - startTime;
	clearInterval(timerInterval);
	startButton.disabled = false;
	stopButton.disabled = true;
};

function resetTimer() {
	clearInterval(timerInterval);
	startTime = 0;
	elapsedTime = 0;
	startButton.disabled = false;
	stopButton.disabled = true;
	resetButton.disabled = true;
	timerDisplay.textContent = '00:00:00.00';
};

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);