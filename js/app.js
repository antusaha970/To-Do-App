// Input and add functionality
const inputBtn = document.getElementById("inputBtn");
let cnt = 1;
inputBtn.addEventListener('click', function () {
    if (cnt == 1) {
        alert("Your Task added \nTo remove Task: Tap on the task you want to remove");
        cnt++;
    }
    if (document.getElementById("taskInput").value == "") {
        alert("Please enter your task");
    }
    else {
        const taskInput = document.getElementById("taskInput").value;
        const li = document.createElement("li");
        li.innerText = taskInput;
        const ulForAdd = document.getElementById("ulForAdd");
        ulForAdd.appendChild(li);
        // alert(taskInput);
        document.getElementById("taskInput").value = "";
    }
})

// Remove task
let deletedTask;
document.getElementById("ulForAdd").addEventListener('click', function (event) {
    deletedTask = event.target.innerText;
    event.target.parentNode.removeChild(event.target);
})

