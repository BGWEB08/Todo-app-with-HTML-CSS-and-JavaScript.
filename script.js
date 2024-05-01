const inputBox = document.getElementById("input-box");
const todoList = document.getElementById("todo-list");


todoList.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
});

function saveData() {
    if (typeof(Storage) !== "undefined") {
        localStorage.setItem("data", todoList.innerHTML);
    }
}

function showData() {
    if (typeof(Storage) !== "undefined") {
        todoList.innerHTML = localStorage.getItem("data");
    } 
}

function addTask() {
    if (inputBox.value === "") {
        alert("Please type something to do!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        todoList.appendChild(li);
        let deleteButton = document.createElement("span");
        deleteButton.innerHTML = "\u00d7";
        li.appendChild(deleteButton);
        saveData();
    }
    inputBox.value = "";
}

showData();
