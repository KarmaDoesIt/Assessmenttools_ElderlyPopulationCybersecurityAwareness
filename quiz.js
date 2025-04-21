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
            correct: 0,
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
        // Optional: You can add more questions here
    ];

    let currentQuestion = 0;
    let score = 0;

    const quizContainer = document.querySelector("#quiz-question");
    const questionTitle = quizContainer.querySelector("h1");
    const questionText = quizContainer.querySelector("p");
    const optionButtons = Array.from(quizContainer.querySelectorAll("button"));

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
                button.classList.remove("correct", "incorrect");
            } else {
                button.style.display = "none";
            }
        });
    }

    function saveAnswer(selectedIdx) {
        const question = quizData[currentQuestion];
        const isCorrect = selectedIdx === question.correct;

        if (isCorrect) {
            score++;
            optionButtons[selectedIdx].classList.add("correct");
        } else {
            optionButtons[selectedIdx].classList.add("incorrect");
        }

        // Disable buttons after answer
        optionButtons.forEach(btn => btn.disabled = true);

        // Wait before next question
        setTimeout(() => {
            currentQuestion++;
            if(currentQuestion < quizData.length) {
                loadQuestion(currentQuestion);
            } else {
                showResults();
            }
        }, 1000);
    }

    function showResults() {
        quizContainer.innerHTML = `
            <h1>Quiz Complete!</h1>
            <p>Your Score: ${score} out of ${quizData.length}</p>
            <a href="quiz_en.html" class="button">Back to Quiz Start</a>
        `;
    }
    

    loadQuestion(currentQuestion);
});
