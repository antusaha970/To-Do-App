// Input and add functionality
const inputBtn = document.getElementById("inputBtn");
let cnt = 1;
inputBtn.addEventListener('click', function () {
    if (document.getElementById("taskInput").value == "") {
        alert("Please enter your task");
    }
    else {
        if (cnt == 1) {
            alert("Your Task added \nTo remove Task: Tap on the task on the queued list which you want to remove");
            cnt++;
        }
        const taskInput = document.getElementById("taskInput").value;
        const li = document.createElement("li");
        li.innerText = taskInput;
        const ulForAdd = document.getElementById("ulForAdd");
        ulForAdd.appendChild(li);
        // alert(taskInput);
        document.getElementById("taskInput").value = "";
        if (cnt++ == 5) {
            alert("Tap on any queued task if you want to remove it from the list\nOr else carry on");
        }

    }
})

// Remove task
let deletedTask;
document.getElementById("ulForAdd").addEventListener('click', function (event) {
    deletedTask = event.target.innerText;
    event.target.parentNode.removeChild(event.target);
    const ulForDeletedTasks = document.getElementById("ulForDeletedTasks");
    const li = document.createElement("li");
    li.innerText = deletedTask;
    ulForDeletedTasks.appendChild(li);
})

