// 1. Get references to the HTML elements
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// --- Event Listeners ---
// Add task on button click
addTaskBtn.addEventListener('click', addTask);

// Add task on Enter key press in the input field
taskInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTask();
    }
});

// --- Functions ---

function addTask() {
    const taskText = taskInput.value.trim(); // Get and clean input text

    // Validate input: prevent adding empty tasks
    if (taskText === "") {
        alert("Please enter a task!");
        return; // Stop the function if input is empty
    }

    // Create the new list item (li) element
    const listItem = document.createElement('li');

    // Create a div to hold the checkbox and task text (for flexible styling)
    const taskContentDiv = document.createElement('div');
    taskContentDiv.classList.add('task-content');

    // Create the checkbox
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    // Assign a unique ID to the checkbox for accessibility and potential future use
    checkbox.id = `task-${Date.now()}`; 
    
    // Create a span element for the task text
    const taskTextSpan = document.createElement('span');
    taskTextSpan.classList.add('task-text');
    taskTextSpan.textContent = taskText; // Set the text content

    // Append checkbox and text span to the content div
    taskContentDiv.appendChild(checkbox);
    taskContentDiv.appendChild(taskTextSpan);

    // Create the delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-btn');
    deleteBtn.textContent = 'Delete';

    // Append the content div and delete button to the main list item
    listItem.appendChild(taskContentDiv);
    listItem.appendChild(deleteBtn);

    // --- Event Listeners for the newly created task item ---

    // Toggle 'completed' class on the whole list item when checkbox is changed
    checkbox.addEventListener('change', function() {
        // 'this' refers to the checkbox here
        listItem.classList.toggle('completed', this.checked); 
    });

    // Delete the task when its delete button is clicked
    deleteBtn.addEventListener('click', function() {
        taskList.removeChild(listItem); // Remove the parent listItem
    });

    // Append the new task (listItem) to the main task list (ul)
    taskList.appendChild(listItem);

    // Clear the input field after adding the task
    taskInput.value = '';
    taskInput.focus(); // Keep focus on the input for quick consecutive entries
}
