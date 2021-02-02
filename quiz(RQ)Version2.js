// Quiz mcq updated version, here I used closure for score calculation and updation.
function Question(question, answer, correctAnswer) {
  this.question = question;
  this.answer = answer;
  this.correct = correctAnswer;
}

Question.prototype.displayQuestion = function () {
  console.log(this.question);

  for (let i = 0; i <= this.answer.length - 1; i++) {
    console.log(i + ": " + this.answer[i]);
  }
};
// Using closure for score and updating score
function score() {
  let yourScore = 0;
  return function (isCorrect) {
    if (isCorrect) {
      yourScore++;
    }
    return yourScore;
  };
}

let checkScore = score(); // calling score and storing inner closure fn to checkscore

Question.prototype.checkAnswer = function (userAns, scoreFromcheckScore) {
  let returnedScore;
  if (userAns === this.correct) {
    console.log("Correct Answer");
    returnedScore = scoreFromcheckScore(true);
    console.log(returnedScore);
  } else if (userAns !== this.correct && userAns == userAns) {
    console.log("Incorrect Answer");
    returnedScore = scoreFromcheckScore(false);
    console.log(returnedScore);
  } else if (userAns !== userAns) {
    alert("Please choose from given options.");
    returnedScore = scoreFromcheckScore(false);
    console.log(returnedScore);
  }
};

let question1 = new Question(
  "Who is the prime minister of India in 2021?",
  ["Modi ji", "Sodi ji"],
  0
);
let question2 = new Question(
  "Who is the supreme commander of Indian armed defence forces?",
  ["Defence Minister", "President", "General of that force"],
  1
);
let question3 = new Question(
  "Indian Army day is celebrated on which date?",
  ["15 August", "16 August", "15 January", "26 January"],
  2
);
let question4 = new Question(
  "Who is the cheif justice of India in 2021?",
  ["Sharad Arvind Bobde", "Ranjan Gogoi"],
  0
);
let que = [question1, question2, question3, question4];

let userAns;
function nextQues() {
  let randomQue = Math.floor(Math.random() * que.length);
  que[randomQue].displayQuestion();
  userAns = prompt("write your answer");
  if (userAns !== "exit") {
    que[randomQue].checkAnswer(parseInt(userAns), checkScore);
    nextQues();
  }
}
nextQues();
