/* **************************
2. Quiz App
- questions from obj
- select answer
- at the end show score
************************** */

var score, activeQuestion, answeringQuestions;

/* make question data */

// make question class
class Question {
  constructor(question, options, answer) {
    this.question = question;
    this.options = options;
    this.answer = answer;
  }
}

// make the questions
const question_1 = new Question("What r u gonna learn after JS?", ['React','Node', 'php', 'python'], 0);
const question_2 = new Question("What do u do when not coding", ['go to movies',' go to parties', 'go to concerts', 'work out'], 3);
const question_3 = new Question("What's ur favorite programming language", [ 'php',  'python',  'Java',  'Javascript'], 3)

// store them in an array
const questions = [question_1, question_2, question_3];

/* DOM elements */

elements = {
  question:document.querySelector(".question"),
  options:document.querySelector(".options"),
  form:document.querySelector(".question_form"),
}

/* functions */

const displayQuestion = (num) => {
  elements.question.textContent = questions[num].question;
}

const displayOptions = (options) => {
  let markup_sum = '';
  for (let i = 0 ; i < options.length; i++) {
    const markup = `
    <div class="option">
      <input type="radio" name="answer" id="option_${i}" value="answer_${i}" ${i===0 ? "checked": ""}/>
      <label for="option_${i}">${options[i]}</label>
    </div>
    `;
    markup_sum = markup_sum + markup;
  }
  elements.options.insertAdjacentHTML("beforeend", markup_sum);
}

const compareAnswerAndUpdateScore = (questionAnswer, userAnswer) => {
  if (questionAnswer === userAnswer) {
    score++;
    console.log(score)
  }
}

const nextQuestion = () => {
  activeQuestion += 1;  
  displayQuestion(activeQuestion);
  displayOptions(questions[activeQuestion].options);
}

const init = () => {
  activeQuestion = 0;
  answeringQuestions = true;
  displayQuestion(0);
  displayOptions(questions[0].options);
}

/* button click */

elements.form.addEventListener("submit", e => {
  if (answeringQuestions) {
    e.preventDefault();
    var data = new FormData(elements.form);
    const myChoice = Number(data.getAll('answer')[0].slice(-1))
    console.log(myChoice)
    if (myChoice) {
      compareAnswerAndUpdateScore(questions[activeQuestion].answer, myChoice);
      nextQuestion();
    }
  }
}
)

init();

// TODO: clear question function