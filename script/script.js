const buttonClicked = document.getElementById("btn");
const input = document.getElementById("input");
const container = document.getElementsByClassName("container");

buttonClicked.addEventListener("click", function () {
  const child = document.createElement("h3");
  if (input.value == "") {
    alert("Entrer une tache d'abord");
  } else {
    const content = document.createTextNode(input.value);
    child.appendChild(content);
    container[0].appendChild(child);
    input.value = "";
    var isDone = false;
    child.addEventListener("click", function () {
      if (isDone == true) {
        child.classList.remove("done");
        isDone = false;
      } else {
        child.classList.add("done");
        isDone = true;
      }
    });
    child.addEventListener("dblclick", function () {
      if (confirm("Voulez vous vraiment supprimer cette tâche ?")) {
        container[0].removeChild(child);
      }
    });
  }
});
