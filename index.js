let alarm = new Audio("alarm.mp3");
let timerStarted = false;

function startTimer() {
    if(!timerStarted) {
        let startTime = new Date().getTime();
        let fiveMinutes = 1000 * 60 * 5;
        let endTime = startTime + fiveMinutes;

        setInterval(function () {
            let timeLeft = endTime - new Date().getTime();

            if (timeLeft > 0) {
                let minutes = timeLeft / (1000 * 60);
                minutes = Math.floor(minutes);
                if (minutes < 10) {
                    minutes = "0" + minutes;
                }
                let seconds = (timeLeft / 1000) % 60;
                seconds = Math.round(seconds);
                if (seconds < 10) {
                    seconds = "0" + seconds;
                }
                timer.innerHTML = minutes.toString() + " : " + seconds.toString();
            } else {
                timer.innerHTML = "00 : 00";
                alarm.play();
            }
        }, 1000);
        timerStarted = true;
    }
}