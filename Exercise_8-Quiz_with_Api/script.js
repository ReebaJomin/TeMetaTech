let currentQuestionIndex = 0;
let score = 0;
let timer;
let timeLeft = 15;
let selectedOptionIndex = -1;
let questions = [];

const API_URL = "https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple";

document.addEventListener('DOMContentLoaded', startQuiz);

function startQuiz() {
    score = 0;
    currentQuestionIndex = 0;
    selectedOptionIndex = -1;
    document.getElementById('score-container').style.display = 'none';
    document.getElementById('quiz-container').style.display = 'block';
    fetchQuestions();
}

function fetchQuestions() {
    fetch(API_URL)
        .then(response => response.json())
        .then(data => {
            questions = data.results.map((q) => ({
                question: q.question,
                options: [...q.incorrect_answers, q.correct_answer].sort(() => Math.random() - 0.5),
                answer: q.correct_answer
            }));
            if (questions.length > 0) {
                loadQuestion(questions[currentQuestionIndex]);
            } else {
                console.error("No questions found!");
            }
        })
        .catch(error => console.error('Error loading questions:', error));
}

function loadQuestion(question) {
    const questionContainer = document.getElementById('question');
    const optionsContainer = document.getElementById('options');
    const feedbackContainer = document.getElementById('feedback');

    if (!questionContainer || !optionsContainer) {
        console.error("Question or options container not found in the DOM");
        return;
    }

    questionContainer.innerText = `${currentQuestionIndex + 1}. ${decodeHTML(question.question)}`;
    optionsContainer.innerHTML = ''; 
    feedbackContainer.innerHTML = '';

    question.options.forEach(option => {
        const optionDiv = document.createElement('div');
        optionDiv.textContent = decodeHTML(option);
        optionDiv.classList.add('option');
        optionDiv.addEventListener('click', () => selectOption(optionDiv, question));
        optionsContainer.appendChild(optionDiv);
    });

    startTimer();
}

function selectOption(selectedOption, question) {
    const options = document.querySelectorAll('.option');

    if (document.querySelector('.option.selected')) {
        return;
    }

    selectedOption.classList.add('selected');
    options.forEach(option => option.classList.add('disabled'));

    if (selectedOption.textContent === question.answer) {
        selectedOption.classList.add('correct');
        selectedOption.innerHTML += ' ✓';
        score++;
    } else {
        selectedOption.classList.add('incorrect');
        selectedOption.innerHTML += ' ✕';


        options.forEach(option => {
            if (option.textContent === question.answer) {
                option.classList.add('correct');
                option.innerHTML += ' ✓';
            }
        });
    }

    clearInterval(timer);
    document.getElementById('next-button').style.display = 'block';
}

function decodeHTML(html) {
    const textArea = document.createElement('textarea');
    textArea.innerHTML = html;
    return textArea.value;
}

function startTimer() {
    timeLeft = 15; 
    document.getElementById('feedback').innerHTML = `Time remaining: ${timeLeft} seconds`;

    timer = setInterval(() => {
        timeLeft--;
        document.getElementById('feedback').innerHTML = `Time remaining: ${timeLeft} seconds`;

        if (timeLeft <= 0) {
            clearInterval(timer);
            handleTimeOut();
        }
    }, 1000);
}

function handleTimeOut() {
    const options = document.querySelectorAll('.option');
    options.forEach(option => option.classList.add('disabled'));
    document.getElementById('next-button').style.display = 'block';
    document.getElementById('feedback').textContent = 'Time\'s up!';
}

function loadNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        document.getElementById('next-button').style.display = 'none';
        loadQuestion(questions[currentQuestionIndex]);
    } else {
        showScore();
    }
}

function showScore() {
    document.getElementById('quiz-container').style.display = 'none';
    const scoreContainer = document.getElementById('score-container');
    const scoreMessage = document.getElementById('score-message');
    const scoreText = document.getElementById('score');

    scoreContainer.style.display = 'block';
    scoreMessage.textContent = score >= questions.length / 2 ? "Congratulations!" : "Better luck next time!";
    scoreText.textContent = `Your score is ${score} out of ${questions.length}`;
}
