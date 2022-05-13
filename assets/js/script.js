var mainEl = document.querySelector("#main");
var countdownEl = document.querySelector("#start-btn");
var timerEl = document.getElementById('countdown');
var welcomeEl = document.querySelector("#welcome");


var mainHeader = document.createElement("h2");
mainHeader.textContent = "Coding Quiz Challenge";
mainEl.appendChild(mainHeader);

var mainText = document.createElement("p");
mainText.textContent =
    "Answer the following code-related questions within the time limit. Incorrect answers will penalize your score/time by ten seconds! So harsh!";
mainEl.appendChild(mainText);

var startBtn = document.createElement("button");
startBtn.textContent = "Start Quiz";
startBtn.className = "start-btn";
mainEl.appendChild(startBtn);


//when the start button is clicked, 
//hide the content in the welcome div
//display question1 text
//diplay 4 buttons underneath (1 right answer button and 3 wrong answer buttons)

//add event listener for q1 (does this go inside/outside??)
//if correct do X
//else, do y
//if right answer is chosen
//optional: display "correct" underneath question
//else
//10 seconds are subtracted from timer
//optional:display "wrong" underneath question

//then move on to next question
//display question2 text
//diplay 4 buttons underneath (1 right answer button and 3 wrong answer buttons)

//if right answer is chosen
//display "correct" underneath question
//else
//10 seconds are subtracted from timer
//display "wrong" underneath question

//after loop through all questions
//timer value is stored as high score
//display ending "all done" text, score, enter initals form field, and submit button

//submit

//go back button goes to quiz welcome and restarts timer
//clear high scores button


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
startBtn.addEventListener("click", countdown);


// var questionArray = [{
//     question1: 'What is 2 + 2',
//     answers: [
//         { text: '4', correct: true } { text: '5', correct: false } { text: '6', correct: false },
//         { text: '22', correct: false },
//     ]
//     question2: 'What is 3 + 3',
//     answers: [
//         { text: '6', correct: true } { text: '5', correct: false } { text: '7', correct: false },
//         { text: '33', correct: false },
//     ]
// }]