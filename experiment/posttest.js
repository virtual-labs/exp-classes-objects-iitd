
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
      question: "Q1. A Java class can contain___.",
      answers: {
        a: "Variables",
        b: "Methods, Constructors",
        c: " Inner Classes (A class inside another class)",
        d: " All the above"
      },
      correctAnswer: "d"
    },

    {
      question: "Q2. Attribute of an object can include information about_____.",

      answers: {
        a: "Method",
        b: "Behavior",
        c: "State",
        d: "Procedures"
      },
      correctAnswer: "c"
    },

    {
      question: "Q3. The keyword used to create a new object in Java is ___.",
      answers: {
        a: "class",
        b: "java",
        c: "new",
        d: "Create"
      },
      correctAnswer: "c"
    },
	
	{
      question: "Q4. An object is created at __ time in Java.",
      answers: {
        a: "Compile-time",
        b: "Run time",
        c: "Assembling time",
        d: "None of the above"         
      },
      correctAnswer: "b"
    },
	
	{
      question: "Q5. Visualizing program components as objects is characteristics of which of the following language types?",
      answers: {
        a: "Object-oriented programming language",
        b: "Machine language",
        c: "Command line operating system",
        d: "Procedural language"
	},
      correctAnswer: "a"
    },
  ];




// ---------------------------- End -------------------------------








  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();
