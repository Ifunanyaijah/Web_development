const questions = [
 {
  question: "Why are people idiots?",
  answer: [
    { text: "Bitch complex", correct: false},
 { text: "pick me girl mentality", correct :true},
{ text: "Assholist culture", correct: false},
{ text: "Society", correct: false}
 ]
 }, 
 {
question: "Why do i hate everybody?",
  answer: [
    { text: "people are shit", correct: false},
 { text: "bullying", correct :true},
{ text: "Assholist culture", correct: false},
{ text: "Society", correct: false}
 ]
 },
 {
question: "Why am i anxious?",
  answer: [
    { text: "expectations", correct: false},
 { text: "lies", correct :true},
{ text: "habit", correct: false},
{ text: "intrusive thoughts", correct: false}
 ]
 },
 {
question: "What do i hope for?",
  answer: [
    { text: "Success", correct: false},
 { text: "lots of money", correct :true},
{ text: "Acceptance", correct: false},
{ text: "peace", correct: false}
 ]
 }
  ];
  
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-button");
const nextButton = document.getElementById("next-btn");
let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "next";
  showQuestion();
}
function showQuestion(){
    resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.
  question;
  
  currentQuestion.answer.forEach(answer => {
const button = document.createElement("button");
button.innerHTML = answer.text;
button.classList.add("btn");
answerButtons.appendChild(button);
if(answer.correct){
  button.dataset.correct = answer.correct;
}
button.addEventListener("click", selectAnswer);
  });
}



function resetState(){
  nextButton.style.display = "none";
  while(answerButtons.firstChild){
answerButtons.removeChild(answerButtons.firstChild);
  }
  
}
function selectAnswer(e){
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if(isCorrect){
  selectedBtn.classList.add("correct");
  score++;
  }else{
  selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButtons.children).forEach(button => {
    if(button.dataset.correct === "true"){
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

function showScore(){
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}
function handleNextButton(){
  currentQuestionIndex++;
  if(currentQuestionIndex < questions.length){
  showQuestion();
  }else{
    showScore();
  }
}

nextButton.addEventListener("click", ()=>{
  if(currentQuestionIndex < questions.length){
    handleNextButton();
  }else{
    startQuiz();
  }


});

startQuiz();

  
  