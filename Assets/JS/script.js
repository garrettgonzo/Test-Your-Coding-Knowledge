const quizContainer = document.querySelector(".quiz-container");
const questionDisplay = document.querySelector(".question");
const answerList = document.querySelector(".answerList");
const score = document.querySelector(".quiz-score");
const initials = document.querySelector(".initials");
const input = document.querySelector(".input");
const highscore = document.querySelector(".highscore");
const submit = document.querySelector(".submit");
const startButton = document.querySelector(".startButton")


const quizQuestions = [
    {
        questionText: "What element is a container for all the head elements, and may include meta information, the document title, scripts and styles?",
        answerMakers: ["<title></title>", "<head></head>", "<body></body>", "<br></br>"],
        answer: "<head></head>"
    },
    {
        questionText: "Which of the below CSS properties is used to change the background color of CSS ?",
        answerMakers: [
            "bg color",
            "color-background",
            "background-color",
            "color"
        ],
        answer: "background-color"
    },
    {
        questionText: "How can a datatype be declared to be a constant type?",
        answerMakers: ["const", "var", "let", "constant"],
        answer: "let"
    },
    {
        questionText: "When an operators value is NULL, the typeof returned by the unary operator is",
        answerMakers: ["Boolean", "Undefined", "Object", "Integer"],
        answer: "Object"
    },
    {
        questionText: "Which of the following attributes is used to add link to any element?",
        answerMakers: ["link", "ref", "href", "newref"],
        answer: "href"
    },
];

let currentQuestion = 0;
let currentScore = 0;

console.log(startButton);


function myFunction() {
    quizQuestionCreator(quizQuestions[0]);
    var count = 100;
    var interval = setInterval(function () {
        document.getElementById('demo').innerHTML = "Timer: " + count;
        count--;
        if (count === 0) {
            clearInterval(interval);
            document.getElementById('demo').innerHTML = 'Done';
            alert("You ran out of time!");
        }
    }, 1000);
}

// function getVal() {
//     const val = document.querySelector('.input').value;
//     console.log(val);
// }


// console.log(input.value);


function handleSubmit() {
    const userInitials = input.value;
    console.log(userInitials);
    var highscoreObject = {
        initials: userInitials,
        score: currentScore
    }

    var pastHighscores = JSON.parse(localStorage.getItem("highScores")) || []
    pastHighscores.push(highscoreObject)
    localStorage.setItem("highScores", JSON.stringify(pastHighscores))
    pastHighscores.pull(highscoreObject)
    localStorage.setItem("highScores", JSON.stringify(pastHighscores))
}

const quizQuestionCreator = quizQuestion => {
    createQuestionText(quizQuestion.questionText);
    createAnswerButtons(quizQuestion.answerMakers);
};

const createQuizScore = () => {
    questionDisplay.style.display = "none";
    answerList.style.display = "none";
    score.style.display = "block";
    score.textContent =
        "Your score was " + currentScore + " out of " + quizQuestions.length;
    // initials.textContent =
    //     "Enter your initials"
    initials.style.display = "block"

};
console.log(score.textContent);

const createQuestionText = questionText => {
    questionDisplay.textContent = "" + questionText;
};

const createAnswerButtons = answerMakers => {
    answerList.innerHTML = "";

    answerMakers.map(answerOption => {
        const answerItemDiv = document.createElement("div");
        answerItemDiv.className = "answer-item";

        const answerButton = document.createElement("button");
        answerButton.textContent = answerOption;

        handleAnswerButtonClick();

        answerButton.addEventListener("click", () => {
            const question = quizQuestions[currentQuestion];
            if (question.answer === answerButton.textContent) {
                currentScore += 1;
            }

            currentQuestion += 1;

            if (quizQuestions[currentQuestion]) {
                quizQuestionCreator(quizQuestions[currentQuestion]);
            } else {
                createQuizScore();
            }
        });

        answerItemDiv.appendChild(answerButton);

        answerList.appendChild(answerItemDiv);
    });
};

const handleAnswerButtonClick = answerButton => { };


startButton.addEventListener("click", myFunction);
submit.addEventListener("click", handleSubmit);
