class Task {
  constructor(name, date, id) {
    this.name = name;
    this.date = date;
    this.id = id;
  }
}

const container = document.getElementById("taskList");
let tasks = [];
let i = 0;

const addTaskBtn = document.getElementById("addTaskBtn");
addTaskBtn.addEventListener("click", function () {
  const taskName = document.getElementById("taskName").value;
  const taskDate = document.getElementById("taskDate").value;

  const task = new Task(taskName, taskDate, i);
  tasks.push(task);

  const taskDiv = document.createElement("div");
  const taskNameP = document.createElement("p");
  const taskDateP = document.createElement("p");
  const deleteBtn = document.createElement("button");

  taskNameP.textContent = task.name;
  taskDateP.textContent = task.date;
  deleteBtn.textContent = "Delete";

  deleteBtn.dataset.taskId = task.id;

  deleteBtn.addEventListener("click", (e) => {
    const idToDelete = Number(e.target.dataset.taskId);

    tasks = tasks.filter((t) => t.id !== idToDelete);
    taskDiv.remove();
  });

  taskDiv.appendChild(taskNameP);
  taskDiv.appendChild(taskDateP);
  taskDiv.appendChild(deleteBtn);
  container.appendChild(taskDiv);

  i++;
});
