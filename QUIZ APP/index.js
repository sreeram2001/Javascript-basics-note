//this questions array contains all the questions and its answers
const questions = [
    {
        question : "Which is the Capital of India ? ",
        answers : [
            { content : "Mumbai", result: 0 },
            { content : "Delhi", result: 1 },
            { content : "Kolkata", result: 0 },
            { content : "Chennai", result: 0 }
        ]
    },
    {
        question : "Which is the Capital of America? ",
        answers : [
            { content : "California", result: 0 },
            { content : "Washington DC", result: 1 },
            { content : "NewYork", result: 0 },
            { content : "San Diego", result: 0 }
        ]
    },
    {
        question : "Which is the Capital of Kerala? ",
        answers : [
            { content : "Pallakkad", result: 0 },
            { content : "Trivandrum", result: 1 },
            { content : "Kochi", result: 0 },
            { content : "Thrissur", result: 0 }
        ]
    },
    {
        question : "Which is the Capital of Maharastra? ",
        answers : [
            { content : "Pune", result: 0 },
            { content : "Mumbai", result: 1 },
            { content : "Shirdi", result: 0 },
            { content : "Bandra", result: 0 }
        ]
    },
]

//global variables
const nextbutton = document.getElementById("nxt-btn");
const questiontext = document.getElementById("question");
const answeroptions = document.getElementById("answer-options");

let questionIndex = 0;
let totalScore = 0;

function Start()
{
    questionIndex = 0;
    totalScore = 0;
    nextbutton.innerHTML = "Next";
    displayQuestion();
}

function displayQuestion()
{
    resetContent();

    let currQuestion = questions[questionIndex];
    let currQuestionNo = questionIndex + 1;
    //fill the question in h2 tag
    questiontext.innerHTML = currQuestionNo + ". " + currQuestion.question;

    //now fill the answers
    currQuestion.answers.forEach(answer=>
        {
            const button = document.createElement("button");
            button.innerHTML = answer.content;
            button.classList.add("btn");
            answeroptions.appendChild(button);
            //we assign each button the value of correct or wrong result set in each answers abovein questions array
            if(answer.result)
            {
                button.dataset.result = answer.result;
            }
            button.addEventListener("click",selectAnswer)
        })

    
}

//function to reset the previous instance of questions
function resetContent()
{
    nextbutton.style.display = "none";
    //we remove all the answers options button of previous question here
    while(answeroptions.lastChild)
    {
        answeroptions.removeChild(answeroptions.lastChild);
    }
}

function selectAnswer(e)
{
    const currentBtn  = e.target;
    if(currentBtn.dataset.result == 1)
    {
        currentBtn.classList.add("correct");
        totalScore++;
    }
    else
    {
        currentBtn.classList.add("incorrect")
    }

    //now time to disable the buttons once one answer option is select
    //we consider as answersoptions as Array here to iterate thru each options easily
    Array.from(answeroptions.children).forEach(button => 
        {
            if(button.dataset.result == 1)
            {
                button.classList.add("correct");
            }

            button.disabled = true;
        })

        nextbutton.style.display = "block";
}

//functionality when Next button is clicked
nextbutton.addEventListener("click", () =>
{
    if(questionIndex < questions.length)
    {
        useNextButton();
    }
    else{
        Start();
    }
})

function useNextButton()
{   
    questionIndex++;
    if(questionIndex < questions.length)
    {
        displayQuestion();
    }
    else
    {   
        //when last question is finished
        displayScore();
    }
}

function displayScore()
{
    resetContent();
    questiontext.innerHTML = `Your Score is ${totalScore} out of ${questions.length}`
    nextbutton.style.display = "block";
    nextbutton.innerHTML = "Start Again"
}

Start();


