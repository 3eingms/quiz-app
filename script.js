const quizDB = [
    {
        question: "Q1: What is the full form of HTML?",
        a: "Hello To My Land",
        b: "Hey Text Markup language",
        c: "Heyper Text Markup language",
        d: "Hello Text Markup language",
        ans: "a3"
    },
    {
        question: "Q2: What is the full form of CSS?",
        a: "Cascading Style Sheets",
        b: "Cascading Style Sheep",
        c: "Cartoon Style Sheets",
        d: "Cascading Super Shhets",
        ans: "a1"
    },
    {
        question: "Q3: What is the full form of HTTP?",
        a: "Hyper Text Transfer Prodcut",
        b: "Hyper Test Protocal",
        c: " Hey Transfer Protocal",
        d: "Hyper Text Transfer Protocal",
        ans: "a4"
    }
]

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1')
const option2 = document.querySelector('#option2')
const option3 = document.querySelector('#option3')
const option4 = document.querySelector('#option4')
const submit = document.querySelector('#submit')
const answers = document.querySelectorAll('.ans')

const showScore = document.querySelector('#showScore')
let questionCount = 0;
let score = 0;
const loadQuestion = () => {
    question.innerHTML = quizDB[questionCount].question;
    option1.innerHTML = quizDB[questionCount].a;
    option2.innerHTML = quizDB[questionCount].b;
    option3.innerHTML = quizDB[questionCount].c;
    option4.innerHTML = quizDB[questionCount].d;
}


loadQuestion();

const getCheckAnswer = () => {
    let answer;

    answers.forEach((curAnsElem) => {
        if (curAnsElem.checked) {
            answer = curAnsElem.id;
        }
    })
    return answer
}

const deSelectAll = () => {
    answers.forEach((curAnsElem) => curAnsElem.checked = false);
}

submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

    if (checkedAnswer == quizDB[questionCount].ans) {
        score++;
    }
    questionCount++;
    deSelectAll()

    if (questionCount < quizDB.length) {
        loadQuestion()
    }
    else {
        showScore.innerHTML = `<h2>You scored ${score} / ${quizDB.length} </h2>
                                <button class = 'btn' onclick = "location.reload()">Play Again !</button>
        `;
        showScore.classList.remove('scoreArea')
    }
})
