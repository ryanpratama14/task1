const inputEl = document.querySelector("input");
const buttonEl = document.querySelector("button");
const timerEl = document.querySelector("span");

const createTimerAnimator = () => {
  let intervalId;

  return (seconds) => {
    clearInterval(intervalId);
    let remainingSeconds = seconds;
    const updateTimer = () => {
      const hours = Math.floor(remainingSeconds / 3600)
        .toString()
        .padStart(2, "0");
      const minutes = Math.floor((remainingSeconds % 3600) / 60)
        .toString()
        .padStart(2, "0");
      const seconds = (remainingSeconds % 60).toString().padStart(2, "0");
      timerEl.textContent = `${hours}:${minutes}:${seconds}`;
      remainingSeconds -= 1;
      if (remainingSeconds < 0) {
        clearInterval(intervalId);
      }
    };

    updateTimer();
    intervalId = setInterval(updateTimer, 1000);
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener("input", () => {
  inputEl.value = inputEl.value.replace(/[^0-9]/g, "");
});

buttonEl.addEventListener("click", () => {
  const seconds = Number(inputEl.value);

  animateTimer(seconds);

  inputEl.value = "";
});
