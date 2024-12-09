let questions = [
    {
        "question": "What is the capital of France?",
        "options": ["Berlin", "Madrid", "Paris", "Rome"],
        "answer": 2
    },
    {
        "question": "Which language is used for web development?",
        "options": ["Python", "JavaScript", "C++", "Java"],
        "answer": 1
    },
    {
        "question": "What is the largest planet in our solar system?",
        "options": ["Earth", "Mars", "Jupiter", "Saturn"],
        "answer": 2
    },
    {
        "question": "Who wrote 'To Kill a Mockingbird'?",
        "options": ["Harper Lee", "Jane Austen", "J.K. Rowling", "Mark Twain"],
        "answer": 0
    },
    {
        "question": "What is the speed of light?",
        "options": ["300,000 km/s", "150,000 km/s", "200,000 km/s", "250,000 km/s"],
        "answer": 0
    }
];

let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 15;
let timer;

document.addEventListener('DOMContentLoaded', showQuestion);

function showQuestion() {
    if (questions.length === 0) return;

    const questionContainer = document.getElementById('question');
    const optionsContainer = document.getElementById('options-container');
    const feedback = document.getElementById('feedback');
    const nextButton = document.getElementById('next-button');

    questionContainer.textContent = questions[currentQuestionIndex].question;
    optionsContainer.innerHTML = '';

    questions[currentQuestionIndex].options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'option';
        button.textContent = option;
        button.onclick = () => selectAnswer(index);
        optionsContainer.appendChild(button);
    });

    feedback.textContent = '';
    nextButton.style.display = 'none';
    timeLeft = 15;
    document.getElementById('time').textContent = timeLeft;
    timer = setInterval(updateTimer, 1000);
}

function selectAnswer(selectedIndex) {
    clearInterval(timer);

    const question = questions[currentQuestionIndex];
    const feedback = document.getElementById('feedback');
    const nextButton = document.getElementById('next-button');

    if (selectedIndex === question.answer) {
        feedback.textContent = 'Correct!';
        feedback.style.color = 'green';
        score++;
    } else {
        feedback.textContent = 'Incorrect!';
        feedback.style.color = 'red';
    }

    nextButton.style.display = 'block';
}

function nextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

function updateTimer() {
    timeLeft--;
    document.getElementById('time').textContent = timeLeft;

    if (timeLeft === 0) {
        clearInterval(timer);
        selectAnswer(-1); // Move to the next question if time runs out
    }
}

function showScore() {
    console.log('showScore called'); 
    const quizContainer = document.getElementById('quiz-container');
    const scoreContainer = document.getElementById('score-container');

    quizContainer.innerHTML = '';
    scoreContainer.style.display = 'block';

    const message = score >= questions.length / 2 ? "Congratulations!" : "Better luck next time!";
    scoreContainer.innerHTML = `<p>${message}</p><p>Your score: ${score} out of ${questions.length}</p>`;
}
