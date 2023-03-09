<button id="start-btn">Start Quiz</button>

const startButton = document.getElementById("start-btn");

startButton.addEventListener("click", startQuiz);

function startQuiz() {
  // TODO: Add quiz logic here
}
let currentQuestionIndex = 0;

function startQuiz() {
  // Hide the start button
  startButton.classList.add("hide");

  // Display the first question
  showQuestion();
}

function showQuestion() {
  const questionContainer = document.getElementById("quiz-container");

  // Clear previous question and choices
  questionContainer.innerHTML = "";

  // Display the current question
  const question = document.createElement("h2");
  question.textContent = quizQuestions[currentQuestionIndex].question;
  questionContainer.appendChild(question);

  // Display the answer choices
  const choices = quizQuestions[currentQuestionIndex].choices;
  for (let i = 0; i < choices.length; i++) {
    const choice = document.createElement("button");
    choice.textContent = choices[i];
    choice.addEventListener("click", checkAnswer);
    questionContainer.appendChild(choice);
  }
}