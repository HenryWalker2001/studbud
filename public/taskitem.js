const form = document.getElementById("tasksection");
const button = document.querySelector("#tasksection > button");
const taskItems = document.getElementById("taskItems");
const newTaskInput = document.getElementById("newTaskInput");
const taskDueInput = document.getElementById("taskDueInput");
const dueTimeInput = document.getElementById("dueTimeInput");
const taskCompetionTimeInput = document.getElementById("taskCompetionTimeInput");
const taskPriorityInput = document.querySelector('#taskPriorityInput');
const completionStateInput = document.getElementById("completionStateInput");


button.addEventListener("click", function(event) {
  event.preventDefault(); 

  let description = newTaskInput.value;
  let day = taskDueInput.value;
  let time = dueTimeInput.value;
  let completion = taskCompetionTimeInput.value;
  let priority = taskPriorityInput.value;
  let completionState = completionStateInput.value;

  createTask(description, day, time, completion, priority, completionState);
  console.log(allTasks);
})


var allTasks = [];

function createTask(newTaskDescription, setupDate, taskDue, taskTime, taskImportance, currentState) {
  // use if statement to catch for empty values 
  // Data validation / checking 
  let newTask = {
    newTaskDescription,
    setupDate,
    taskDue,
    taskTime,
    taskImportance,
    currentState
  };

  // !! Attempting to filter out non-input user inputs into tasks 
  // const filtered = newTask.filter((el) => {
  //   return el !== "" && el !== "select one" && typeof el !== 'undefined';
  // });

  allTasks.push(newTask);
  presentTask(newTask);
}

function presentTask(newTask) {


  // !! testing values for the list selector priority option in JS !!
  // alert(taskPriorityInput.value);

  // alert(filtered)

  // let printList = [];
  // for (var i = 0; i < filtered.length; i++) {
  //   printlist.push(+ filtered[i] +"<br>");
  // }
  // alert(printList)

  // let part = document.createElement("li");
  // part.innerHTML = "<li>" + printList + "</li>";

  // let part = document.createElement("li");
  // part.innerHTML = "<li>" + newTask.newTaskDescription + "<br>" + newTask.setupDate + "<br>"  +
  // newTask.taskDue + "<br>" + newTask.taskTime + "<br>" +  newTask.taskImportance + "<br>" +
  // newTask.currentState + "</li>";

  let part = document.createElement("li");
  part.innerHTML = "<li>" + "TASK: " + newTask.newTaskDescription + "<br>" + "DUE DATE: " +
  newTask.setupDate + "<br>" + "DUE TIME: " + newTask.taskDue + "<br>" + "COMPLETION TIME: "+
  newTask.taskTime +"<em>min</em>"+ "<br>" + "PRIORITY: " + newTask.taskImportance + "<br>" +
  "CURRENT STATE: " + newTask.currentState + "</li>";

  taskItems.appendChild(part);

  let remove = document.createElement("button");
  let removeText = document.createTextNode("REMOVE");
  remove.appendChild(removeText);
  part.appendChild(remove);

  remove.addEventListener("click", function(event){
    part.remove();
  })

  
  form.reset();
}