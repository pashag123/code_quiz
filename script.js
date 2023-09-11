var questions = [
  {
    title: 'Commonly used data types DO NOT include:',
    choices: ['strings', 'booleans', 'alerts', 'numbers'],
    answer: 'alerts',
  },
  {
    title: 'The condition in an if / else statement is enclosed within ____.',
    choices: ['quotes', 'curly brackets', 'parentheses', 'square brackets'],
    answer: 'parentheses',
  },
  {
    title: 'Arrays in JavaScript can be used to store ____.',
    choices: [
      'numbers and strings',
      'other arrays',
      'booleans',
      'all of the above',
    ],
    answer: 'all of the above',
  },
  {
    title:
      'String values must be enclosed within ____ when being assigned to variables.',
    choices: ['commas', 'curly brackets', 'quotes', 'parentheses'],
    answer: 'quotes',
  },
  {
    title:
      'A very useful tool used during development and debugging for printing content to the debugger is:',
    choices: ['JavaScript', 'terminal / bash', 'for loops', 'console.log'],
    answer: 'console.log',
  },
];

var score = 0;
var timerEl = document.querySelector('.timer');
var timeLeft = 60;
var questionNumber = 0;
var startBtn = document.querySelector('.startbtn');
var questionText = document.querySelector('.questiontxt');
var answerChoices = document.querySelector('.answers');
var answerResults = document.querySelector('.Results');
var correctAnswerDisplay = 'Right!!'
var wrongAnswerDisplay = 'Wrong!!'
var initialsInputBox = document.createElement('input');
var initialSubmitBtn = document.createElement('input');





function getQuestions() {
  var getQuestion = questions[questionNumber];
  questionText.textContent = getQuestion.title;
  answerChoices.textContent = '';
var answerList = document.createElement('ul');



}


function startQuiz() {
  startBtn.computedStyleMap.display = 'none';
  getQuestions();

}

startBtn.addEventListener('click', startQuiz);