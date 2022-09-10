const quizData = [
    {
        question: "Q1 How many stock exchanges do we have ?",
        a: "NSE (National stock exchange)",
        b: "BSE (Bombay stock exchange)",
        c: "both a and b",
        d: "NONE OF THE ABOVE",
        correct: "c",
    },
    {
        question: "Q2 If We deposit 1000rupees per month with average Rate of interest of 15 % then how much do we have after 5 years",
        a: "88,500",
        b: "90,000",
        c: "60,000",
        d: "70,000",
        correct: "a",
    },
    {
        question: "Q3 full form of SIP in mutual funds",
        a: "standing investment plans",
        b: "sit in place",
        c: "systematic investment plan",
        d: "system in places",
        correct: "c",
    },
    {
        question: "Q4 what is the minimum amount of money to start investing?",
        a: "1000",
        b: "100",
        c: "10,000",
        d: "10,00,000",
        correct: "b",
    },
    {
        question: "Q5 At what age can you start investing?",
        a: "18 years",
        b: "21 years",
        c: "25 years",
        d: "at any age",
        correct: "d",
    },


];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
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


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }

       currentQuiz++

       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>

           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})