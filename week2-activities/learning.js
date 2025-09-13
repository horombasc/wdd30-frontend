const countdownElement = document.getElementById("countdown");
const startButton = document.getElementById("startButton");
let startingTime = 10;
startButton.addEventListener("click", function() {
    console.log("Countdown started");
});

startButton.addEventListener("click", function() {
    let timeLeft = startingTime;

    countdownElement.textContent = timeLeft;

    const countdownInterval = setInterval(function() {
        timeLeft--;
        countdownElement.textContent = timeLeft;
    }, 1000);

   setTimeout(function() {
    clearInterval(countdownInterval);
    countdownElement.textContent = "Time's up!";
}, startingTime * 1000);
});