/* **************************
2. Quiz App
- questions from obj
- select answer
- at the end show score
************************** */

class Question {
  constructor(question, option, answer) {
    this.question = question;
    this.option = option;
    this.answer = answer;
  }
}

const question_1 = new Question("What r u gonaa learn after JS?", [1. React, 2. Node, 3. php, 4. python], 1);
