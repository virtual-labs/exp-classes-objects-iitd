
// Don't touch the below code

(function() {
  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        //answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");
  

// Don't touch the above code




// Write your MCQs here --- Start --- --------------------

  const myQuestions = [
    {
      question: "Q1. Which of these class is superclass of every class in Java?",
      answers: {
        a: " String class",
        b: "Object class",
        c: "Abstract class",
        d: "ArrayList class"
      },
      correctAnswer: "b"
    },

    {
      question: "Q2. Which of these method of Object class can clone an object?",
      answers: {
        a: " Objectcopy()",
        b: "copy()",
        c: "Object clone()",
        d: "clone()"

      },
      correctAnswer: "c"
    },

    {
      question: "Q3. Which of the following is an invalid declaration for the main method in java program?",
      answers: {
        a: "public static void main (String args[])",
        b: "public static strictfp void main (String args[])",
        c: "final static public void main (String args[])",
        d: "All are correct"
      },
      correctAnswer: "d"
    },
	
	{
      question: "Q4. In Java programming language, the code is placed inside ___.",
      answers: {
        a: "Classes, Interfaces",
        b: "Methods",
        c: " Blocks",
        d: "All the above"
      },
      correctAnswer: "d"
    },
	
	{
      question: "Q5. A Class in Java is like a ____.",
      answers: {
        a: " Prototype",
        b: "Instruction Sheet",
        c: " Blueprint",
        d: "All the above"
      },
      correctAnswer: "d"
    },
  ];




// ---------------------------- End -------------------------------








  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();
