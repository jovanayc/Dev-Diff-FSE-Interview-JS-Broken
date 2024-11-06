// Sample task data with hours to complete each task
const tasks = [
    { task: 'Save the city from giant turantulas', superhero: 'Spiderman', hours: 3 },
    { task: 'Rescue the hostages from the under ground train station', superhero: 'Captain America', hours: 5 },
    { task: 'Find and save the hiking crew stuck at the top of the Mount Everest', superhero: 'Wonder Woman', hours: 10 },
    { task: 'Defeat the Internet villian who is blocking wifi throughout the city', superhero: 'Iron Man', hours: 12 }
];

// Function to get the task associated with a given superhero
function getTask(superheroName) { // function takes in name to locate within obj
    const taskObj = tasks.find(task => task.superhero === superheroName);
    return taskObj ? taskObj.task : 'No task found for this superhero';
}

// Function to generate the task table
function generateTaskTable() {
    const container = document.getElementById('task-table-container');
    const table = document.createElement('table');
    table.setAttribute('border', '1'); // Optional, for CSS styling

    // Create table header
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    const taskHeader = document.createElement('th');
    taskHeader.textContent = 'All Tasks';
    const superheroHeader = document.createElement('th');
    superheroHeader.textContent = 'Superhero';
    const hoursHeader = document.createElement('th');
    hoursHeader.textContent = 'Hours to Complete';
    headerRow.appendChild(taskHeader);
    headerRow.appendChild(superheroHeader);
    headerRow.appendChild(hoursHeader);
    thead.appendChild(headerRow);
    table.appendChild(thead);

    // Create table body
    const tbody = document.createElement('tbody');
    tasks.forEach(taskObj => {
        const row = document.createElement('tr');
        const taskCell = document.createElement('td');
        taskCell.textContent = taskObj.task;
        const superheroCell = document.createElement('td');
        superheroCell.textContent = taskObj.superhero;
        const hoursCell = document.createElement('td');
        hoursCell.textContent = taskObj.hours;
        row.appendChild(taskCell);
        row.appendChild(superheroCell);
        row.appendChild(hoursCell);
        tbody.appendChild(row);
    });
    table.appendChild(tbody);

    // Append the table to the container
    container.appendChild(table);
}

