// display.js

const userName = "Spiderman";
const greetingMessage = `Welcome back, ${userName}!`;

// Function to display the greeting message
const displayGreeting = () => {
    const greetingElement = document.getElementById('greeting-message');
    greetingElement ? greetingElement.textContent = greetingMessage : console.error("Element with id 'greeting-message' not found");
};


// Function to display task and control button state
const displayTask = () => {
    const taskMessageElement = document.getElementById('task-message');
    const startButton = document.getElementById('start-task-button');
    const currentTask = getTask(); //should get current task for username

    taskMessageElement.textContent = `Your next task: ${currentTask}`;

    if (currentTask === 'No task found for this superhero') {
        taskMessageElement.classList.add('no-task');
        taskMessageElement.classList.remove('task-found');
        startButton.classList.add('disabled');
        startButton.disabled = true;
    } else {
        taskMessageElement.classList.add('task-found');
        taskMessageElement.classList.remove('no-task');
        startButton.classList.remove('disabled');
        startButton.disabled = false;
        startButton.onclick = () => {
            window.location.href = "3_congrats.html";
        };
    }
};

// Initialize display on page load
document.addEventListener('DOMContentLoaded', () => {
    displayGreeting();
    generateTaskTable();
    setTimeout(displayTask, greetingMessage.length * 100);
});
