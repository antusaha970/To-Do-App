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
        setInLocalStorage(taskInput, taskInput);
        const li = document.createElement("li");
        li.innerText = taskInput;
        li.setAttribute("id", taskInput);
        const ulForAdd = document.getElementById("ulForAdd");
        ulForAdd.appendChild(li);

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
    deleteFromLocal(deletedTask);
    const ulForDeletedTasks = document.getElementById("ulForDeletedTasks");
    const li = document.createElement("li");
    li.innerText = deletedTask;
    ulForDeletedTasks.appendChild(li);
})

const setInLocalStorage = (task, id) => {
    let taskArr = [];
    const newTask = { task, id };
    if (localStorage.getItem('taskArr')) {
        taskArr = JSON.parse(localStorage.getItem('taskArr'));
    }
    taskArr.push(newTask);
    localStorage.setItem('taskArr', JSON.stringify(taskArr));
}

const fetchPendingTasks = () => {
    const pendingTasks = JSON.parse(localStorage.getItem('taskArr'));
    for (let i = 0; i < pendingTasks.length; i++) {
        const { task } = pendingTasks[i];
        const li = document.createElement("li");
        li.innerText = task;
        const ulForAdd = document.getElementById("ulForAdd");
        ulForAdd.appendChild(li);
    }
}

const deleteFromLocal = (itemId) => {
    const taskArr = JSON.parse(localStorage.getItem('taskArr'));
    for (let i = 0; i < taskArr.length; i++) {
        const { id } = taskArr[i];
        if (id == itemId) {
            taskArr.splice(i, 1);
        }
    }
    localStorage.setItem('taskArr', JSON.stringify(taskArr));
}

fetchPendingTasks();