document.addEventListener('DOMContentLoaded', () => {
    const quizBlocks = document.querySelectorAll('.inline-quiz');
    const pageLang = document.documentElement.lang || 'en'; // Detects lang

    quizBlocks.forEach(quiz => {
        const correctAnswer = quiz.dataset.answer?.toLowerCase();
        const buttons = quiz.querySelectorAll('button');
        const feedback = quiz.querySelector('.feedback');

        buttons.forEach(button => {
            button.addEventListener('click', () => {
                // Disable all buttons after selection
                buttons.forEach(btn => btn.disabled = true);

                const selected = button.textContent.trim().charAt(0).toLowerCase();
                const isCorrect = selected == correctAnswer;

                const messages = {
                    en: {
                        correct: 'Correct!',
                        incorrect: `Incorrect. The correct answer was "${correctAnswer?.toUpperCase()}".`
                    },
                    es: {
                        correct: '¡Correcto!',
                        incorrect: `Incorrecto. La respuesta correcta era "${correctAnswer?.toUpperCase()}".`
                    }
                };

                // Choose feedback lang, fallsback to eng
                const langFeedback = messages[pageLang] || messages.en;

                if (isCorrect) {
                    feedback.textContent = langFeedback.correct;
                    feedback.classList.add('correct');
                    feedback.classList.remove('incorrect');
                } else {
                    feedback.textContent = langFeedback.incorrect;
                    feedback.classList.add('incorrect');
                    feedback.classList.remove('correct');
                }
            });
        });
    });
});
