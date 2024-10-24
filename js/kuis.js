const quizData = [
    
    {
        question: "Apa hasil dari ∫ (3x^2 + 2x + 1) dx?",
        a: "x^3 + x^2 + x + C",
        b: "x^3 + x^2 + C",
        c: "x^3 + x^2 + x + 1 + C",
        d: "3x^3/3 + 2x^2/2 + x + C",
        correct: "a",
    },
    {
        question: "Apa solusi dari sistem persamaan 2x + 3y = 6 dan 4x + y = 5?",
        a: "(1, 1)",
        b: "(2, 0)",
        c: "(0, 2)",
        d: "(0, 1)",
        correct: "a",
    },
    {
        question: "Hitung limit berikut: lim (x → 0) (sin(x)/x)",
        a: "0",
        b: "1",
        c: "∞",
        d: "Tidak terdefinisi",
        correct: "b",
    },
    {
        question: "Apa turunan dari f(x) = 5x^4 - 3x^3 + 2x - 7?",
        a: "20x^3 - 9x^2 + 2",
        b: "15x^2 - 9x + 2",
        c: "20x^4 - 3x^2 + 2",
        d: "5x^3 - 3x^2 + 2",
        correct: "a",
    },
    {
        question: "Hitung integral tentu dari fungsi f(x) = 2𝑥 pada interval [1, 3].",
        a: "6",
        b: "8",
        c: "4",
        d: "10",
        correct: "b",
    },
    {
        question: "Apa hasil dari lim (x -> 0) (sin(x) / x)?",
        a: "0",
        b: "1",
        c: "∞",
        d: "Tidak ada limit",
        correct: "b",
    },
    {
        question: "Apa turunan dari f(x) = x^3?",
        a: "3x^2",
        b: "x^2",
        c: "x^3",
        d: "3x",
        correct: "a",
    },
    {
        question: "Integral dari f(x) = 2x dx adalah?",
        a: "x^2 + C",
        b: "x^2 + 2 + C",
        c: "2x + C",
        d: "x^2 + 1 + C",
        correct: "a",
    },
    {
        question: "Turunan dari f(x) = cos(x) adalah?",
        a: "-sin(x)",
        b: "sin(x)",
        c: "-cos(x)",
        d: "cos(x)",
        correct: "a",
    },
    {
        question: "Apa hasil dari lim (x -> ∞) (1/x)?",
        a: "0",
        b: "1",
        c: "∞",
        d: "Tidak ada limit",
        correct: "a",
    },
    {
        question: "Integral dari f(x) = 3x^2 dx adalah?",
        a: "x^3 + C",
        b: "x^2 + C",
        c: "3x^3 + C",
        d: "3x + C",
        correct: "a",
    },
    {
        question: "Apa turunan dari f(x) = e^x?",
        a: "e^x",
        b: "xe^x",
        c: "x^e",
        d: "e^x + C",
        correct: "a",
    },
    {
        question: "Limit dari lim (x -> 2) (x^2 - 4) / (x - 2) adalah?",
        a: "2",
        b: "4",
        c: "0",
        d: "Tidak ada limit",
        correct: "b",
    },
    {
        question: "Apa hasil dari integral ∫(5x^4) dx?",
        a: "x^5 + C",
        b: "x^4 + C",
        c: "5x^5 + C",
        d: "x^5 + 5 + C",
        correct: "c",
    },
    {
        question: "Turunan dari f(x) = ln(x) adalah?",
        a: "1/x",
        b: "ln(x)",
        c: "x",
        d: "e^x",
        correct: "a",
    },
];

function getRandomQuestions(numQuestions) {
    const shuffled = quizData.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, numQuestions);
}

const quizContainer = document.getElementById("quiz");
const submitButton = document.getElementById("submit");
const resultContainer = document.getElementById("result");

let currentQuiz = 0;
let score = 0;
let selectedQuestions = getRandomQuestions(5);

function loadQuiz() {
    const currentQuizData = quizData[currentQuiz];
    quizContainer.innerHTML = `
        <div class="question">${currentQuizData.question}</div>
        <label>
            <input type="radio" name="answer" value="a"> ${currentQuizData.a}
        </label><br>
        <label>
            <input type="radio" name="answer" value="b"> ${currentQuizData.b}
        </label><br>
        <label>
            <input type="radio" name="answer" value="c"> ${currentQuizData.c}
        </label><br>
        <label>
            <input type="radio" name="answer" value="d"> ${currentQuizData.d}
        </label><br>
    `;
}

function getSelected() {
    const answers = document.querySelectorAll('input[name="answer"]');
    for (const answer of answers) {
        if (answer.checked) {
            return answer.value;
        }
    }
    return undefined;
}

function submitQuiz() {
    const answer = getSelected();
    if (answer) {
        if (answer === selectedQuestions[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if (currentQuiz < selectedQuestions.length) {
            loadQuiz();
        } else {
            showResult();
        }
    } else {
        alert("Silakan pilih jawaban sebelum mengirim.");
    }
}

function showResult() {
    quizContainer.style.display = "none";
    resultContainer.innerHTML = `
        <p class="result">Anda mendapatkan ${score} dari 5 pertanyaan.<p> <br>
        <button id="restart">Coba Lagi</button>
    `;
    document.getElementById("restart").addEventListener("click", restartQuiz);
}

function restartQuiz() {
    currentQuiz = 0;
    score = 0;
    selectedQuestions = getRandomQuestions(5);
    resultContainer.innerHTML = '';
    quizContainer.style.display = "block";
    loadQuiz();
}

loadQuiz();
submitButton.addEventListener("click", submitQuiz);