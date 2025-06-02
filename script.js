// script.js
function generateQuestion() {
    const questionDisplay = document.getElementById('questionDisplay');
    if (questions && questions.length > 0) {
        const randomIndex = Math.floor(Math.random() * questions.length);
        questionDisplay.innerText = questions[randomIndex];
    } else {
        questionDisplay.innerText = "No questions loaded. Please check questions.js.";
    }
}

// Optional: Generate a question when the page loads
// window.onload = generateQuestion;
