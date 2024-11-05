const counter = document.querySelector("#counter");


let intervalId;


const buttonStart = document.getElementById("button-start");
buttonStart.addEventListener("click", startTimer);

function startTimer() {
    if(!intervalId) {
        intervalId = setInterval(() => {
            counter.innerHTML++
        }, 1000)
    }
}


const buttonStop = document.getElementById("button-stop");
buttonStop.addEventListener("click", stopTimer);

function stopTimer() {
    if(intervalId) {
        clearInterval(intervalId)
    }
}


const buttonReset = document.getElementById("button-reset");
buttonReset.addEventListener("click", resetTimer);

function resetTimer() {
    if(intervalId) {
        clearInterval(intervalId)
        counter.innerHTML = 0 
        intervalId = null
    }
}