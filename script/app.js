let addTaskInput = document.getElementById("add__task__input");
let addNewTaskIcone = document.getElementById("add__new__task__icone");
let ToDoListContent = document.querySelector(".to__do__list__content");
let MessageErrorDiv = document.getElementById("message__error__div");

let taskUl = document.getElementById("task");
let taskLi;
let iconeCheck;
let iconeDelete;
let taskUserP;

// Ajouter une tache
const addTask = () => {
  taskLi = document.createElement("li");
  iconeCheck = document.createElement("i");
  iconeCheck.classList.add("fa-solid", "fa-check");
  iconeDelete = document.createElement("i");
  iconeDelete.classList.add("fa-solid", "fa-trash");
  taskUserP = document.createElement("p");
  if (addTaskInput.value !== "") {
    taskUl.appendChild(taskLi);
    taskLi.appendChild(iconeCheck);
    taskUserP.innerHTML = addTaskInput.value;
    taskLi.appendChild(taskUserP);
    taskLi.appendChild(iconeDelete);
  }
};
// Afficher un message d'erreur
let messageErrorP = document.createElement("p");
const addMessageError = () => {
  if (addTaskInput.value === "") {
    messageErrorP.innerText = "field must be filled out";
    MessageErrorDiv.appendChild(messageErrorP);
  } else {
    MessageErrorDiv.appendChild(messageErrorP);
    MessageErrorDiv.removeChild(messageErrorP);
    addTaskInput.value = "";
  }
};
// Tache complétée
const taskComplete = () => {
  iconeCheck.addEventListener("click", function () {
    let complete = this.nextSibling;
    complete.classList.toggle("active");
  });
};
// Supprimer une tache
const deleteTask = () => {
  iconeDelete.addEventListener("click", function () {
    let deleteTaskLi = this.parentElement;
    deleteTaskLi.remove();
  });
};
 
const rooter = () => {
  addTask();
  addMessageError();
  deleteTask();
  taskComplete();
};
addNewTaskIcone.addEventListener("click", rooter);
