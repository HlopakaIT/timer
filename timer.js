const counter = document.querySelector("#counter");


let intervalId;


const buttonOne = document.querySelector("#button-1");
buttonOne.addEventListener("click", startTimer);

function startTimer() {
    if(!intervalId) {
        intervalId = setInterval(() => {
            counter.innerHTML++
        }, 1000)
    }

        
}


const buttonTwo = document.querySelector("#button-2");
buttonTwo.addEventListener("click", stopTimer);

function stopTimer() {
    if(intervalId) {
        clearInterval(intervalId)
    }
}


const buttonThree = document.querySelector("#button-3");
buttonThree.addEventListener("click", resetTimer);

function resetTimer() {
    if(intervalId) {
        clearInterval(intervalId)
        counter.innerHTML = 0 
        intervalId = null
    }
}