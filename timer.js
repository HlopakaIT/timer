const counter = document.querySelector("#counter");


let intervalId;


const buttonStart = document.querySelector("#button-start");
buttonStart.addEventListener("click", startTimer);

function startTimer() {
    if(!intervalId) {
        intervalId = setInterval(() => {
            counter.innerHTML++
        }, 1000)
    }
}


const buttonStop = document.querySelector("#button-stop");
buttonStop.addEventListener("click", stopTimer);

function stopTimer() {
    if(intervalId) {
        clearInterval(intervalId)
    }
}


const buttonReset = document.querySelector("#button-reset");
buttonReset.addEventListener("click", resetTimer);

function resetTimer() {
    if(intervalId) {
        clearInterval(intervalId)
        counter.innerHTML = 0 
        intervalId = null
    }
}