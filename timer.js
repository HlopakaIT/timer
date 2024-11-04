const counter = document.querySelector("#counter") 


const buttonOne = document.querySelector("#button-1");
buttonOne.addEventListener("click", startTimer);



function startTimer() {

    setInterval(() => {
    counter.innerHTML++
    }, 1000)

}


// 









// const buttonTwo = document.querySelector("#button-2");
// buttonTwo.addEventListener("click", stopTimer);

// function stopTimer() {
//     clearInterval(test)
// }












// const buttonThree = document.querySelector("#button-3");
// buttonThree.addEventListener("click", resetTimer);

// function resetTimer() {}