document.addEventListener('DOMContentLoaded', () => {
    const addTaskButton = document.getElementById('add-task-button');
    const taskInput = document.getElementById('new-task');
    const taskList = document.getElementById('task-list');

    addTaskButton.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            addTask(taskText);
            taskInput.value = '';
        }
    });

    taskList.addEventListener('click', (event) => {
        if (event.target.classList.contains('delete-button')) {
            deleteTask(event.target.parentElement);
        } else if (event.target.classList.contains('task-checkbox')) {
            toggleTaskCompletion(event.target.parentElement);
        }
    });

    function addTask(taskText) {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${taskText}</span>
            <input type="checkbox" class="task-checkbox">
            <button class="delete-button">Delete</button>
        `;
        taskList.appendChild(li);
    }

    function deleteTask(taskItem) {
        taskList.removeChild(taskItem);
    }

    function toggleTaskCompletion(taskItem) {
        taskItem.classList.toggle('completed');
    }
});
