const quizQuestions = [
    {
        questionText: "What element is a container for all the head elements, and may include meta information, the document title, scripts and styles?",
        answerOptions: ["<title></title>", "<head></head>", "<body></body>", "<br></br>"],
        answer: "<head></head>"
    },
    {
        questionText: "Which of the below CSS properties is used to change the background color of CSS ?",
        answerOptions: [
            "bg color",
            "color-background",
            "background-color",
            "color"
        ],
        answer: "background-color"
    },
    {
        questionText: "How can a datatype be declared to be a constant type?",
        answerOptions: ["const", "var", "let", "constant"],
        answer: "let"
    },
    {
        questionText: "When an operator’s value is NULL, the typeof returned by the unary operator is",
        answerOptions: ["Boolean", "Undefined", "Object", "Integer"],
        answer: "Object"
    },
    {
        questionText: "Which of the following attributes is used to add link to any element?",
        answerOptions: ["link", "ref", "href", "newref"],
        answer: "href"
    },
];

let currentQuestion = 0;
let currentScore = 0;

const startButton = document.querySelector(".startButton")
console.log(startButton);

startButton.addEventListener("click", myFunction);

function myFunction() {
    createQuizQuestion(quizQuestions[0]);
    var count = 100;
    var interval = setInterval(function () {
        document.getElementById('demo').innerHTML = "Timer:" + count;
        count--;
        if (count === 0) {
            clearInterval(interval);
            document.getElementById('demo').innerHTML = 'Done';
            alert("You're out of time!");
        }
    }, 1000);
}


const quizContainer = document.querySelector(".quiz-container");
const questionDisplay = document.querySelector(".question");
const answerList = document.querySelector(".answer-list");
const score = document.querySelector(".quiz-score");
const initials = document.querySelector(".initials");
const input = document.querySelector(".input");
console.log(input.value);

const createQuizQuestion = quizQuestion => {
    createQuestionText(quizQuestion.questionText);
    createAnswerButtons(quizQuestion.answerOptions);
};

const createQuizScore = () => {
    questionDisplay.style.display = "none";
    answerList.style.display = "none";
    score.style.display = "block";
    score.textContent =
        "You scored " + currentScore + " out of " + quizQuestions.length;
    initials.textContent =
        "Enter your initials"

};
console.log(score.textContent);

const createQuestionText = questionText => {
    questionDisplay.textContent = "Q)" + questionText;
};

const createAnswerButtons = answerOptions => {
    answerList.innerHTML = "";

    answerOptions.map(answerOption => {
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
                createQuizQuestion(quizQuestions[currentQuestion]);
            } else {
                createQuizScore();
            }
        });

        answerItemDiv.appendChild(answerButton);

        answerList.appendChild(answerItemDiv);
    });
};

const handleAnswerButtonClick = answerButton => { };



// (function () {
//     createQuizQuestion(quizQuestions[0]);
// })();