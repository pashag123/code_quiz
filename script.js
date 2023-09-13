var questions = [
  {
    title: 'What is reviewed as the scariest movie ever made?:',
    choices: ['Halloween', 'The Exorcist', 'llamagedon', 'Friday the 13th'],
    answer: 'The Exorcist',
  },
  {
    title: 'Which one of Sephen Kings film adaptatons did he hate',
    choices: ['It', 'Pet Semetary', 'The Shining', 'Carrie'],
    answer: 'The Shining',
  },
  {
    title: 'What is Leatherfaces weapon of choice?',
    choices: [
      'machete',
      'chainsaw',
      'ice cream cone',
      'knife',
    ],
    answer: 'chainsaw',
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


var yourScore = 0;

var timerEl = document.querySelector('.timer');

var timeLeft = 60;

var questionNumber = 0;

var startBtn = document.querySelector('.startbtn');

var questionText = document.querySelector('.questiontxt');

var answerChoices = document.querySelector('.answers');

var answerResults = document.querySelector('.answerrslt');

var correctAnswerDisplay = 'Right!!';

var wrongAnswerDisplay = 'Wrong!!';

var initialsInputBox = document.createElement('input');

var initialSubmitBtn = document.createElement('input');

var timer = null; 



function getQuestions() {
  if (questionNumber >= questions.length) {
    quizEnd();
    clearInterval(timer);
    return
  }
  var getQuestion = questions[questionNumber];

  questionText.textContent = getQuestion.title;

  answerChoices.textContent = '';

  var answerList = document.createElement('ul');


  getQuestion.choices.forEach(function (choice) {
    
var listItem = document.createElement('button');

listItem.setAttribute('class', 'mca')
listItem.textContent = choice;


listItem.addEventListener('click', function () {
checkAnswer(choice, getQuestion.answer);
})

answerList.append(listItem);

  })
  answerChoices.appendChild(answerList);
};



function checkAnswer(choice, correctAnswer) {
if (choice === correctAnswer) {
  console.log('correct')
} else  {
  timeLeft -= 10
console.log('wrong')
}

questionNumber++;
getQuestions() 
}

function handleTimer() {
  timerEl.textContent = timeLeft
 timer = setInterval(function() {
  timerEl.textContent = timeLeft
  if (timeLeft <= 0) {
    clearInterval(timer);
    quizEnd();
  }
  timeLeft--
}, 1000)
}




function saveScore() {
  var highScores = JSON.parse(localStorage.getItem('highScores')) || [];
  var initials = document.querySelector('#initials').value;
  var score = timeLeft;
  var newEntry = {
    initials,
    score,

  }
  highScores.push(newEntry);
  localStorage.setItem('highScores', JSON.stringify(highScores) )
}




document.querySelector('#score-submit').addEventListener('click', saveScore);






function startQuiz() {
  startBtn.style.display = 'none';
  getQuestions();
  handleTimer();

};

function quizEnd() {
questionText.style.display = 'none'
answerChoices.style.display = 'none'
}









startBtn.addEventListener('click', startQuiz);