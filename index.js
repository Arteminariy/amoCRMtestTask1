const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

// Функция для форматирования времени в формате hh:mm:ss
const formatTime = (seconds) => {
	const hours = Math.floor(seconds / 3600);
	const minutes = Math.floor((seconds % 3600) / 60);
	const secondsLeft = seconds % 60;
	return `${hours.toString().padStart(2, '0')}:${minutes
		.toString()
		.padStart(2, '0')}:${secondsLeft.toString().padStart(2, '0')}`;
};

const createTimerAnimator = () => {
	let intervalId;
	return (seconds) => {
		if (intervalId) {
			clearInterval(intervalId);
		}
		timerEl.textContent = formatTime(seconds);
		intervalId = setInterval(() => {
			seconds--;
			timerEl.textContent = formatTime(seconds);
			if (seconds === 0) {
				clearInterval(intervalId);
				alert(`Время вышло!`);
			}
		}, 1000);
	};
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener(`input`, () => {
	inputEl.value = inputEl.value.replace(/\D/g, ``);
});

buttonEl.addEventListener(`click`, () => {
	const seconds = Number(inputEl.value);
	animateTimer(seconds);
	inputEl.value = ``;
});
