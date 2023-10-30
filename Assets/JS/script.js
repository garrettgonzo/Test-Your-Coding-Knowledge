// define our data and state objects
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
        questionText: "How many days are in September",
        answerOptions: ["28", "29", "30", "31"],
        answer: "30"
    }
];

let currentQuestion = 0; //computers start counting from zero remember!
let currentScore = 0;

// get our elements from the dom
const startButton = document.querySelector(".startButton")
console.log(startButton);


startButton.addEventListener("click", myFunction);

function myFunction() {
    createQuizQuestion(quizQuestions[0]);
    var count = 100;
    var interval = setInterval(function () {
        document.getElementById('demo').innerHTML = count;
        count--;
        if (count === 0) {
            clearInterval(interval);
            document.getElementById('demo').innerHTML = 'Done';
            // or...
            alert("You're out of time!");
        }
    }, 1000);
}


const quizContainer = document.querySelector(".quiz-container");
const questionDisplay = document.querySelector(".question");
// console.log(quizContainer)
const answerList = document.querySelector(".answer-list");
const score = document.querySelector(".quiz-score");

// helper methods to create our elements
const createQuizQuestion = quizQuestion => {
    createQuestionText(quizQuestion.questionText);
    createAnswerButtons(quizQuestion.answerOptions);
};

const createQuizScore = () => {
    questionDisplay.style.display = "none";
    answerList.style.display = "none";
    // show the score
    score.style.display = "block";
    score.textContent =
        "You scored " + currentScore + " out of " + quizQuestions.length;
};

const createQuestionText = questionText => {
    // append our div to our answer list
    questionDisplay.textContent = "Q)" + questionText;
};

const createAnswerButtons = answerOptions => {
    //clear our answer list before creating new answer buttons
    answerList.innerHTML = "";

    // our answerOptions is an array, so we map over it to
    // create a list of answer buttons
    answerOptions.map(answerOption => {
        // create an answer item div and give it a class
        const answerItemDiv = document.createElement("div");
        answerItemDiv.className = "answer-item";

        //create a button
        const answerButton = document.createElement("button");
        answerButton.textContent = answerOption;

        // add an eventlistener to this button to check if answer is correct or not
        handleAnswerButtonClick();

        answerButton.addEventListener("click", () => {
            // get our currentQuestion
            const question = quizQuestions[currentQuestion];
            // compare the answer the user selected to the correct answer
            if (question.answer === answerButton.textContent) {
                currentScore += 1;
            }

            // move on to the next question
            currentQuestion += 1;

            // display questions if we still have them,
            // otherwise display the scores
            if (quizQuestions[currentQuestion]) {
                createQuizQuestion(quizQuestions[currentQuestion]);
            } else {
                createQuizScore();
            }
        });

        // append button to our div
        answerItemDiv.appendChild(answerButton);

        // append our div to our answer list
        answerList.appendChild(answerItemDiv);
    });
};

const handleAnswerButtonClick = answerButton => { };



// (function () {
//     createQuizQuestion(quizQuestions[0]);
// })();


{/* <p id="demo"></p> */ }

{/* <script>
// Set the date we're counting down to
    var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();

    // Update the count down every 1 second
    var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    document.getElementById("demo").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";

    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
</script> */}