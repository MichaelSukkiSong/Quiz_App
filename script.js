/* **************************
2. Quiz App
- questions from obj
- select answer
- at the end show score
************************** */

/* make data */

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

/* functions */

const displayQuestion = () => {
  document.querySelector(".question").textContent = questions[0].question;
}

const displayOptions = (options) => {
  let markup_sum = '';
  for (let i = 0 ; i < options.length; i++) {
    const markup = `
    <div class="option">
      <input type="radio" name="answer" id="option_${i+1}" ${i===0 ? "checked": ""}/>
      <label for="option_${i+1}">${options[i]}</label>
    </div>
    `;
    markup_sum = markup_sum + markup;
  }
  document.querySelector(".options").insertAdjacentHTML("beforeend", markup_sum);
}

const startaQuestion = () => {
  // display question and options
  displayQuestion();
  displayOptions(questions[1].options);
  // get user choice
  // compare user choice with answer and store score
}

startaQuestion();