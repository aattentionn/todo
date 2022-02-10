const list = {
    "create a new practice task": "In Progress",
    "make a bed": "Done",
    "write a post": "To Do",
    "have a walk": "To Do",
}

function changeStatus(task, status){
    list[task] = status;
}

function addTask(task) {
    list[task] = "To Do";
}

function deleteTask(task) {
    delete list[task];
}

function showList(){

    let toDo = "";
    let inProgress = "";
    let done = "";

    for (let key in list) {
        if ("To Do") {
            return toDo += key;
        } else if ("In Progress") {
            return inProgress += key;
        } else if ("Done") {
            return done += key;
        }
    }
    console.log(`"To Do: ", toDo, "In Progress: ", inProgress, "Done: ", done`);

}

changeStatus("have a walk", "Done");
addTask("take a photo");
deleteTask("make a bed");
showList();