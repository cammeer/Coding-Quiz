var questions = [{
        title: "Commonly used data types do not include",
        choices: ["strings", "booleans", "pumpkins", "numbers"],
        answer: "pumpkins"
    },
    {
        title: "The condition within an if/else statement is enclosed within___?",
        choices: ["a bone cage", "parentheses", "a magic cube", "the witch's hut"],
        answer: "parentheses"
    },
    {
        title: "Arrays in Javascript can be used to store___",
        choices: ["numbers and strings", "many different data types", "potions", "booleans"],
        answer: "many different data types"
    },
]

//variables for  functions.. scores and timers..
var score = 0;
var currentQuestion = -1;
var timeLeft = 0;
var timer;

//starts the countdown timer once user clicks the 'start' button
function start() {

    timeLeft = 60;
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
        <h2>You survived the very spooky javascript game.</h2>
        <h3>You got ` + score / 1 + ` questions correct!</h3>
        <input type="text" id="name" placeholder="First name">
        <button onclick="setScore()">Store high score</button>`;

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
        `<h1>Spooky Coding Quiz Challenge</h1>
        <h3>Answer the following spooky code-related questions within the time limit. Incorrect answers penalize your score/time by 10 seconds. Harsh! :|</h3>
        <button onclick="start()">Start!</button>`;

    document.getElementById("quizBody").innerHTML = quizContent;
}

//deduct 10 seconds from timer if incorrect
function incorrect() {
    timeLeft -= 10;
    next();
}

function correct() {
    next();
    score++
}

//loops through questions DEFINE CORRECT IN THIS FUNCTION!!
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