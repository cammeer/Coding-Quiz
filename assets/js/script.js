var questions = [{
        title: "What is 2 + 2?",
        choices: ["3", "5", "4", "22"],
        answer: "4"
    },
    {
        title: "Where am I?",
        choices: ["Earth", "home", "idk", "All of the above"],
        answer: "All of the above"
    },
]

//variables for  functions.. scores and timers..
var score = 0;
var currentQuestion = -1;
var timeLeft = 0;
var timer;

//starts the countdown timer once user clicks the 'start' button
function start() {

    timeLeft = 75;
    document.getElementById("timeLeft").innerHTML = timeLeft;


    timer = setInterval(function() {
        timeLeft--;
        document.getElementById("timeLeft").innerHTML = timeLeft;
        //proceed to end the game function when timer is below 0 at any time
        if (timeLeft <= 0) {
            clearInterval(timer);
            endGame();
        }
    }, 1000);

    next();
};


//stop the timer to end the game
function endGame() {
    clearInterval(timer);


    var quizContent = `
        <h2>Game over!</h2>
        <h3>You got a ` + score + ` /100!</h3>
        <h3>That means you got ` + score / 20 + ` questions correct!</h3>
        <input type="text" id="name" placeholder="First name">
        <button onclick="setScore()">Set score!</button>`;

    document.getElementById("quizBody").innerHTML = quizContent;
}

//store the scores on local storage
function setScore() {
    localStorage.setItem("highscore", score);
    localStorage.setItem("highscoreName", document.getElementById('name').value);
    getScore();
}

function getScore() {
    var quizContent = `
<h2>` + localStorage.getItem("highscoreName") + `'s highscore is:</h2>
<h1>` + localStorage.getItem("highscore") + `</h1><br>

<button onclick="clearScore()">Clear score!</button><button onclick="resetGame()">Play Again!</button>

`;

    document.getElementById("quizBody").innerHTML = quizContent;
}

//clears score name and value in local storage if the user selects 'clear score'
function clearScore() {
    localStorage.setItem("highscore", "");
    localStorage.setItem("highscoreName", "");

    resetGame();
}

//reset the game
function resetGame() {
    clearInterval(timer);
    score = 0;
    currentQuestion = -1;
    timeLeft = 0;
    timer = null;

    document.getElementById("timeLeft").innerHTML = timeLeft;

    var quizContent =
        `<h1>JavaScript Quiz!</h1>
        <h3>Click to play!</h3>
        <button onclick="start()">Start!</button>`;

    document.getElementById("quizBody").innerHTML = quizContent;
}

//deduct 10 seconds from timer if incorrect
function incorrect() {
    timeLeft -= 10;
    next();
}

//loops through  questions
function next() {
    currentQuestion++;

    if (currentQuestion > questions.length - 1) {
        endGame();
        return;
    }

    var quizContent = "<h2>" + questions[currentQuestion].title + "</h2>"

    for (var buttonLoop = 0; buttonLoop < questions[currentQuestion].choices.length; buttonLoop++) {
        var buttonCode = "<button onclick=\"[ANS]\">[CHOICE]</button>";
        buttonCode = buttonCode.replace("[CHOICE]", questions[currentQuestion].choices[buttonLoop]);
        if (questions[currentQuestion].choices[buttonLoop] == questions[currentQuestion].answer) {
            buttonCode = buttonCode.replace("[ANS]", "correct()");
        } else {
            buttonCode = buttonCode.replace("[ANS]", "incorrect()");
        }
        quizContent += buttonCode
    }

    document.getElementById("quizBody").innerHTML = quizContent;
}