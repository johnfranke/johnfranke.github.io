var questions = [
    {
        questionTitle: "Commonly used data types DO NOT include:",
        choice1: "strings",
        choice2: "booleans",
        choice3: "alerts",
        choice4: "numbers",
        correct: "C"
    },
    {
        questionTitle: "The condition in an if / else statement is enclosed within ____.",
        choice1: "quotes",
        choice2: "curly brackets",
        choice3: "parentheses",
        choice4: "square brackets",
        correct: "C"
    },
    {
        questionTitle: "Arrays in Javascript can be used to store ____.",
        choice1: "number and strings",
        choice2: "other arrays",
        choice3: "booleans",
        choice4: "all of the above",
        correct: "D"
    },
    {
        questionTitle: "String values must be enclosed within ____ when being assigned to variables.",
        choice1: "commas",
        choice2: "curly brackets",
        choice3: "quotes",
        choice4: "parenthese",
        correct: "C"
    },
    {
        questionTitle: "A very useful tool in development and debugging for printing content to the debugger",
        choice1: "JavaScript",
        choice2: "terminal/bash",
        choice3: "for loops",
        choice4: "console.log",
        correct: "D"
    }
]


var start = document.querySelector("#start");
var sec = 75;
var quiz = document.querySelector("#quiz");
var thetime = document.querySelector("#thetime");
var viewHighscores = document.querySelector("#viewhighscores")
var questionTitle = document.querySelector("#title");
var choice1 = document.querySelector("#A");
var choice2 = document.querySelector("#B");
var choice3 = document.querySelector("#C");
var choice4 = document.querySelector("#D");
var correctIncorrect = document.querySelector("#rightorwrong");
var addInitials = document.querySelector("#addinitials");
var highScores = document.querySelector('#highscores');
var clearHighscores = document.querySelector('#clearhighscores-button');
var goBack = document.querySelector('#goback-button');
var topRow = document.querySelector('#toprow');
var highScoreList = document.querySelector('#highscoreslist');

var lastQuestionIndex = questions.length - 1;
var currentQuestionIndex = 0;
const questionTime = 15;
var count = 75;
var score = 0;
var TIMER;


function showQuestion() {
    var currentQ = questions[currentQuestionIndex];
    title.innerHTML = "<h4>" + currentQ.questionTitle + "</h4>";
    choice1.innerHTML = currentQ.choice1;
    choice2.innerHTML = currentQ.choice2;
    choice3.innerHTML = currentQ.choice3;
    choice4.innerHTML = currentQ.choice4;
    console.log(score);
}

function myTimer() {
    document.getElementById('timer').innerHTML = sec;
    sec--;
    if (sec == -1) {
        clearInterval(time);
        showScore();
    }
}

start.addEventListener("click", startQuiz);

function startQuiz() {
    start.style.display = "none";
    myTimer()
    time = setInterval(myTimer, 1000);
    showQuestion();
    quiz.style.display = "block";

}

function checkAnswer(answer){
    if( answer === questions[currentQuestionIndex].correct){

        score += 5;
        correctAnswer();
    }else{

        sec -= 15;
         wrongAnswer();
    }
    count = 0;
    if(currentQuestionIndex < lastQuestionIndex){
        currentQuestionIndex++;
        showQuestion();
    }else{

        clearInterval(time);
        showScore();
    }
}


function showScore(){
    quiz.style.display = "none";
    start.style.display = "none";
    topRow.style.display = "none";
    scoreContainer.style.display = "block";
    document.getElementById('finalscore').innerHTML = score;
}


function correctAnswer() {
    var removeAfter = 0;
        $('#rightorwrong').append("<p>" + 'Right!' + "</p>");
        removeAfter += 600;
        (function (removeAfter) {
            setTimeout(function () {
                $("#rightorwrong").children().last().remove();
            }, removeAfter);
        })(removeAfter);
    }


function wrongAnswer() {
    var removeAfter = 0;
        $('#rightorwrong').append("<p>" + 'Wrong!' + "</p>");
        removeAfter += 600;
        (function (removeAfter) {
            setTimeout(function () {
                $("#rightorwrong").children().last().remove();
            }, removeAfter);
        })(removeAfter);
    }

    addInitials.addEventListener("click", function(event) {
        event.preventDefault();
      
        var initials = document.querySelector("#initials").value;
        
        if (initials === "") {
          alert("Initials cannot be blank");

        } else {

          localStorage.setItem("initials", initials);
          localStorage.setItem("score", score);
          showHighscores();
        }
        console.log(initials);
        console.log(score);

      });

      function showHighscores() {
        quiz.style.display = "none";
        scoreContainer.style.display = "none";
        thetime.style.display = "none";
        viewHighscores.style.display = "none";
        start.style.display = "none";
        topRow.style.display = "none";
        highScores.style.display = "block";
        
        var initials = localStorage.getItem("initials");
        var score = localStorage.getItem("score");

        console.log(initials);
        console.log(score);

        if (initials === null) {
            console.log('nothing here');
            $('#highscoreslist').append(" No Highscores Yet! ");
          } else {
               $('#highscoreslist').append("<p>", initials + " ............... Score: ", + score, "</p>");

          }
      }

      clearHighscores.addEventListener("click", function(event) {
        localStorage.clear();
        document.getElementById("highscoreslist").innerHTML = "";

      });

      goBack.addEventListener("click", function(event) {
        event.preventDefault();
        showQuestion()
      
     
      });

      viewHighscores.addEventListener("click", function(event) {
            showHighscores()
                 
     
      });