document.addEventListener("DOMContentLoaded", function() {
    const addButton = document.getElementById("add-btn");  // кнопка добавления задачи
    const inputField = document.getElementById("todo-input");  // поле ввода
    const todoList = document.getElementById("todo-list");  // список задач
  
    // Функция для добавления новой задачи
    function addTodo() {
      const taskText = inputField.value.trim();  // получаем текст задачи
  
      if (taskText !== "") {
        // Создаем новый элемент списка (li)
        const newTask = document.createElement("li");
  
        // Добавляем текст задачи в li
        newTask.textContent = taskText;
  
        // Добавляем кнопку для удаления задачи
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Удалить";
        deleteButton.classList.add("delete-btn");
        deleteButton.addEventListener("click", () => {
          todoList.removeChild(newTask);  // удаляем задачу
        });
  
        // Добавляем кнопку в задачу
        newTask.appendChild(deleteButton);
  
        // Добавляем обработчик для отметки задачи как выполненной
        newTask.addEventListener("click", () => {
          newTask.classList.toggle("completed");
        });
  
        // Добавляем новую задачу в список
        todoList.appendChild(newTask);
  
        // Очищаем поле ввода после добавления
        inputField.value = "";
      }
    }
  
    // Слушаем нажатие кнопки "Добавить"
    addButton.addEventListener("click", addTodo);
  
    // Также добавляем возможность добавления задачи по нажатию клавиши Enter
    inputField.addEventListener("keypress", function(event) {
      if (event.key === "Enter") {
        addTodo();
      }
    });
  });