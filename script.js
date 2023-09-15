
// variables for all the questions and answers 
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
      'Whats another name for halloween?',
    choices: ['all hallows eve', 'scary day', 'the day of darkness', 'candy night'],
    answer: 'all hallows eve',
  },
  {
    title:
      'Which horror franchise has the most sequels?',
    choices: ['Childs Play', 'Halloween', 'Friday the 13th', 'Nightmare On Elm Street'],
    answer: 'Halloween',
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

var initialsBox = document.querySelector('#score-submit-box');


var highScoresBox = document.querySelector('.high-score-box');


highScoresBox.style.display = 'none';

initialsBox.style.display = 'none';


// function to display questions


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
  initialsBox.style.display = 'none'
  highScoresBox.style.display = 'block'
  displayScores() 
};


function displayScores() {

  var highScoresArr = JSON.parse(localStorage.getItem('highScores')) || [];
  highScoresArr.sort(function(a,b) {

    return b.score - a.score
  })
for (i=0; i < highScoresArr.length; i++) {
var liEl = document.createElement('li')
liEl.textContent = highScoresArr[i].initials + ' - ' + highScoresArr[i].score
document.querySelector('.high-score-results').append(liEl)
}
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
initialsBox.style.display = 'block'
};









startBtn.addEventListener('click', startQuiz);