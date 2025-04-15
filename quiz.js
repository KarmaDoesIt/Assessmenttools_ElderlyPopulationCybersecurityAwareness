let language = 'en'; // Default language

const content = {
    en: {
        question: "What should you do if you receive an email from an unknown sender asking for personal information?",
        options: [
            { answer: "Ignore it", isCorrect: false },
            { answer: "Reply with your information", isCorrect: false },
            { answer: "Click on the link to check", isCorrect: false },
            { answer: "Report it as spam", isCorrect: true }
        ],
        correctAnswer: "Report it as spam",
        feedback: "Phishing emails can look like legitimate messages, but they are designed to steal your personal information. Always report suspicious emails."
    },
    es: {
        question: "¿Qué debes hacer si recibes un correo electrónico de un remitente desconocido pidiendo información personal?",
        options: [
            { answer: "Ignorarlo", isCorrect: false },
            { answer: "Responder con tu información", isCorrect: false },
            { answer: "Hacer clic en el enlace para comprobarlo", isCorrect: false },
            { answer: "Reportarlo como spam", isCorrect: true }
        ],
        correctAnswer: "Reportarlo como spam",
        feedback: "Los correos electrónicos de phishing pueden parecer mensajes legítimos, pero están diseñados para robar tu información personal. Siempre reporta los correos sospechosos."
    }
};

document.addEventListener('DOMContentLoaded', function() {
    const quizContainer = document.getElementById('quiz-container');

    function displayQuestion() {
        const questionData = content[language]; // Get content based on selected language

        const questionElement = document.createElement('div');
        questionElement.innerHTML = `
            <h2>${questionData.question}</h2>
            <div class="options">
                ${questionData.options.map(option => `
                    <button class="option-button">${option.answer}</button>
                `).join('')}
            </div>
            <div id="feedback" class="feedback"></div>
        `;
        quizContainer.appendChild(questionElement);

        // Add event listeners to buttons
        const buttons = document.querySelectorAll('.option-button');
        buttons.forEach((button, index) => {
            button.addEventListener('click', function() {
                const feedback = document.getElementById('feedback');
                const isCorrect = questionData.options[index].isCorrect;
                if (isCorrect) {
                    feedback.textContent = `Correct! ${questionData.feedback}`;
                    feedback.classList.add('correct');
                    feedback.classList.remove('incorrect');
                    // After a short delay, continue reading the article.
                    setTimeout(() => {
                        questionElement.style.display = 'none'; // Hide the question
                        alert('Proceeding with the article...');
                    }, 2000);
                } else {
                    feedback.textContent = `Incorrect. The correct answer is: "${questionData.correctAnswer}". ${questionData.feedback}`;
                    feedback.classList.add('incorrect');
                    feedback.classList.remove('correct');
                }
            });
        });
    }

    displayQuestion();
});

// Language switcher function
function changeLanguage(lang) {
    language = lang; // Set selected language
    location.reload(); // Reload the page to apply changes
}

