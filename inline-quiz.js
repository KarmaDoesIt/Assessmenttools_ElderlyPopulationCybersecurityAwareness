document.addEventListener('DOMContentLoaded', () => {
    const quizBlocks = document.querySelectorAll('.inline-quiz');

    quizBlocks.forEach(quiz =>{
        const correctAnswer = quiz.dataset.answer?.toLowerCase();
        const buttons = quiz.querySelectorAll('button');
        const feedback = quiz.querySelector('.feedback');

        buttons.forEach(button => {
            button.addEventListener('click', () => {
                // Disable all buttons after selection
                buttons.forEach(btn => btn.disabled = true);

                const selected = button.textContent.trim().charAt(0).toLowerCase();

                if (selected === correctAnswer) {
                    feedback.textContent = 'Correct!';
                    feedback.classList.add('correct');
                    feedback.classList.remove('incorrect');
                } else {
                    feedback.textContent = `Incorrect. The correct answer was "${correctAnswer.toUpperCase()}".`;
                    feedback.classList.add('incorrect');
                    feedback.classList.remove('correct');
                }
            });
        });
    });
});