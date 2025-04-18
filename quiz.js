
// git add . git commit - m"message of what is updated"
document.addEventListener("DOMContentLoaded", () => {
    const quizData = [
        {
            question: "What should you do if you receive an email from an unknown sender asking for personal information?",
            options: [
                "Ignore it",
                "Reply with your information",
                "Click on the link to check",
                "Report it as spam",
            ],
            correct: 0, // Index of the correct answer
        },

        {
            question: "What is a computer virus?",
            options: [
                "A type of hardware",
                "A security update",
                "A malicious software program",
                "An email provider",
            ],
            correct: 2,
        
        }
        {
            question: "",
            options:[

            ],
        }
    ];

    let currentQuestion = 0;

    const quizContainer = document.querySelector("#quiz-question");
    const questionTitle = quizContainer.querySelector("h1");
    const questionText = quizContainer.querySelector("p");
    const optionButtons = Array.from(quizContainer.querySelectorAll("button"));

    // Load the question
    function loadQuestion(index) {
        const questionData = quizData[index];

        questionTitle.textContent = `Question #${index + 1}`;
        questionText.textContent = questionData.question;

        optionButtons.forEach((button, idx) => {
            if (questionData.options[idx]) {
                button.style.display = "inline-block";
                button.textContent = questionData.options[idx];
                button.onclick = () => saveAnswer(idx);
                button.disabled = false;
            } 
            else {
                button.style.display = "none"; // Hide unused buttons
            }
            
        });
    }

    // Save the user's answer
    function saveAnswer(selectedOption) {
        const isCorrect = selectedOption === quizData[currentQuestion].correct;
        console.log(`Answer: ${quizData[currentQuestion].options[selectedOption]} - ${isCorrect ? "Correct" : "Incorrect"}`);
        saveToLocalStorage(currentQuestion, selectedOption);

        currentQuestion++;
        if (currentQuestion < quizData.length) {
            loadQuestion(currentQuestion);
        } else {
            displayResults();
        }

    }

    // Save answers to localStorage
    function saveToLocalStorage(questionIndex, selectedOption) {
        const answers = JSON.parse(localStorage.getItem("quizAnswers")) || {};
        answers[questionIndex] = selectedOption;
        localStorage.setItem("quizAnswers", JSON.stringify(answers));
    }

    // Display results
    function displayResults(answerIndex) {
        quizContainer.innerHTML = `<h1>Quiz Completed</h1><p>Check the console for your answers.</p>`;
        
        const savedAns = JSON.parse(localStorage.getItem("quizAnswers"));
        let resultsHTML = ' ';
        let score = 0;

        quizData.forEach((question, index) => {
            const userAnswer = savedAns[index];
            const isCorrect = userAnswer === question.correct;

            resultsHTML += `<p>Question #${index + 1}: ${question.question}</p>`;

            resultsHTML += `<p>Status: ${isCorrect ? "Correct" : "Incorrect"}</p><br/>`;

            if (isCorrect) {
                score++;
            }
        });

        resultsHTML += '<h2>Your score: ${score} out of $quizData.length}<h2>';
    }

    loadQuestion(currentQuestion);
});
