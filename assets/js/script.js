// var timerEl = document.querySelector("#countdown");
var countdownEl = document.getElementById('start-quiz');
var timerEl = document.getElementById('countdown');

function countdown() {
    var timeLeft = 100;

    var timeInterval = setInterval(function() {

        if (timeLeft > 1) {
            timerEl.textContent = timeLeft + ' seconds remaining';
            timeLeft--;
        } else if (timeLeft === 1) {
            timerEl.textContent = timeLeft + ' second remaining';
            timeLeft--;
        } else {
            timerEl.textContent = '';
            clearInterval(timeInterval);
        }
    }, 1000);
}

//timer starts with click on Start Quiz button
countdownEl.addEventListener("click", countdown);


var codeQuiz = [{
        ques: "What is the answer to question 1?",
        choices: ["flower", "tree", "herb", "chicken"],
        correctAnswer: "chicken"
    },
    {
        ques: "What is the answer to question 2?",
        choices: ["milk", "butter", "soymilk", "oatmilk"],
        correctAnswer: "butter"
    }
]; //end of object array




//NOTES FROM OFFICE HOURS


//question displays with 1 right answer button and 3 wrong answer buttons
//if right answer is chosen, move on to next question &
//display "correct" underneath question
//else, 10 seconds are subtracted from timer
//display "wrong" underneath question
//enter initals field and submit button
//go back button goes to quiz welcome and restarts timer
//clear high scores button

//NOTE: will need 4 event listeners for each button