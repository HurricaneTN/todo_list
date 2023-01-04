const buttonClicked = document.getElementById("btn");
const clearClicked = document.getElementById("clr");
const input = document.getElementById("input");
const container = document.getElementsByClassName("container");
var isDone = false;

buttonClicked.addEventListener("click", addTask);
clearClicked.addEventListener("click", clearTasks);

function addTask() {
  if (input.value === "") {
    alert("Enter task before !! ");
  } else {
    const tasksSet = JSON.parse(localStorage.getItem("tasks"));
    if (tasksSet === null) {
      taskList = [];
    } else {
      taskList = tasksSet;
    }
    taskList.push(input.value);
    localStorage.setItem("tasks", JSON.stringify(taskList));
    input.value = "";

    loadTasks();
  }
}
function loadTasks() {
  let output = "";
  const tasksSet = JSON.parse(localStorage.getItem("tasks"));

  if (tasksSet === null) {
    taskList = [];
  } else {
    taskList = tasksSet;
  }

  taskList.forEach((data, index) => {
    output += `
      <div class="tasksList">
        <h3 onclick="taskDone(${index})" id="${index}">${data}</h3>
        <button onclick="removeTask(${index})">X</button>
      </div>
    `;
  });

  container[0].innerHTML = output;
}
function taskDone(index) {
  const toBeDone = document.getElementById(index);
  if (isDone == true) {
    toBeDone.classList.remove("done");
    isDone = false;
  } else {
    toBeDone.classList.add("done");
    isDone = true;
  }
}
function removeTask(index) {
  if (confirm("Are you sure to delete task ?")) {
    const tasksSet = JSON.parse(localStorage.getItem("tasks"));
    tasksSet.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(tasksSet));
    loadTasks();
  }
}
function clearTasks() {
  localStorage.clear();
  loadTasks();
}
loadTasks();
