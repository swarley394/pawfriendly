const quizData = [
    {
        question: "What size dog would you like?",
        a: "Small",
        b: "Medium",
        c: "Large",
    },
    {
        question: "What length of coat/fur do you prefer?",
        a: "Short",
        b: "Medium",
        c: "Large",
    },
    {
        question: "How much shedding would you prefer?",
        a: "Low",
        b: "Medium",
        c: "High",
    },
    {
        question: "What dog exercise level works with your lifestyle?",
        a: "One hour per day",
        b: "More than one hour",
        c: "None",
    },
    {
        question: "How big is your home?",
        a: "Large house",
        b: "Small house",
        c: "Appartment",
    },
    {
        question: "What best describes your outdoor area?",
        a: "Small",
        b: "Large",
        c: "No space",
    },
    {
        question: "How often are you willing to groom the dog?",
        a: "More than once a week",
        b: "Once a week",
        c: "Everyday",
    },
    {
        question: "How much barking can you tolerate",
        a: "Not at all",
        b: "Not much",
        c: "Fine with barking",
    }
];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0

loadQuiz()
function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
}   

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}

let first=0
let second=0
let third=0

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer=='a')
    {
            first++
    }
    if(answer=='b')
    {
            second++
    }
    if(answer=='c')
    {
            third++
    }

let preference=[]
if(a>b && a>c)
{
    preference=['Golden Retriever', 'Labrodor']
}
if(b>a && b>c)
{
    preference=['Husky', 'Pomerian']
}
if(c>b && c>a)
{
    preference=['Shitzu', 'Labrodor']
}

    if(answer) {
       currentQuiz++
       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>Thank You for taking the quiz</h2>
           <h2> The dog breed recommendations for you are a Golden Retriever, Beagle, Poodle, Bullgod </h2>
           <button onclick="registeration.html">Reload</button>    `
       }  
    }
})

