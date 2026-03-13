const input = document.getElementById('todo-input');
    const addBtn = document.getElementById('add-btn');
    const todoList = document.getElementById('todo-list');

    // Add todo function
    function addTodo() {
        const taskText = input.value.trim();
        if(taskText === '') return;

        const li = document.createElement('li');
        li.textContent = taskText;

        // Complete task on click
        li.addEventListener('click', () => {
            li.classList.toggle('completed');
        });

        
        const deleteBtn = document.createElement('button');
        deleteBtn.innerHTML = '✕';
        deleteBtn.addEventListener('click', (e) => {
            e.stopPropagation(); // prevent toggling completed
            li.remove();
        });
        li.appendChild(deleteBtn);

        todoList.appendChild(li);
        input.value = '';
    }

    addBtn.addEventListener('click', addTodo);
    input.addEventListener('keydown', (e) => {
        if(e.key === 'Enter') addTodo();
    });