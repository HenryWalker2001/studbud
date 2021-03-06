// creating const's for each different JS variable used in html
const form = document.getElementById("tasksection");
const button = document.querySelector("#tasksection > button");
const taskItems = document.getElementById("taskItems");
const newTaskInput = document.getElementById("newTaskInput");
const taskDueInput = document.getElementById("taskDueInput");
const dueTimeInput = document.getElementById("dueTimeInput");
const taskCompetionTimeInput = document.getElementById("taskCompetionTimeInput");
const taskPriorityInput = document.querySelector('#taskPriorityInput');
const completionStateInput = document.getElementById("completionStateInput");

// event listens for button being selected for new task
button.addEventListener("click", function(event) {
  event.preventDefault(); 

  // each task is assigned to local variable
  let description = newTaskInput.value;
  let day = taskDueInput.value;
  let time = dueTimeInput.value;
  let completion = taskCompetionTimeInput.value;
  let priority = taskPriorityInput.value;
  let completionState = completionStateInput.value;

  // calling createTask function with paramaters from entered html data in +Add Task area
  createTask(description, day, time, completion, priority, completionState);
  console.log(allTasks);
})

// array used to store each new task
var allTasks = [];

// function used to create new task 
function createTask(newTaskDescription, setupDate, taskDue, taskTime, taskImportance, currentState) {
  let newTask = {
    newTaskDescription,
    setupDate,
    taskDue,
    taskTime,
    taskImportance,
    currentState
  };
  // pushing new task into the array of all tasks
  allTasks.push(newTask);

  // calling presentTask function with the argument of a new task, formatting information
  presentTask(newTask);
}

function presentTask(newTask) {

  // information formatted depending on Item, in same order as created list
  let part = document.createElement("li");
  part.innerHTML = "<li>" + "TASK: " + newTask.newTaskDescription + "<br>" + "DUE DATE: " +
  newTask.setupDate + "<br>" + "DUE TIME: " + newTask.taskDue + "<br>" + "COMPLETION TIME: "+
  newTask.taskTime +"<em>min</em>"+ "<br>" + "PRIORITY: " + newTask.taskImportance + "<br>" +
  "CURRENT STATE: " + newTask.currentState + "</li>";

  taskItems.appendChild(part);

  // creating the remove button on each new task to delete unwanted/ completed tasks
  let remove = document.createElement("button");
  let removeText = document.createTextNode("REMOVE");
  remove.appendChild(removeText);
  part.appendChild(remove);

  remove.addEventListener("click", function(event){
    part.remove();
  })  
  form.reset();
}

// using the custom dropdown layound for list items 
var selectorElements, part, partLength, secondLength, counter, counterTwo, docBox, docSomeBoxes, docAllBoxes;

// finding input information in the 'specialSelector' class in html 
selectorElements = document.getElementsByClassName("specialSelector");
partLength = selectorElements.length;
for (counter = 0; counter < partLength; counter++) {
part = selectorElements[counter].getElementsByTagName("select")[0];
secondLength = part.length;
// boxes used for options and their content
docBox = document.createElement("DIV");
docBox.setAttribute("class", "currentOption");
docBox.innerHTML = part.options[part.selectedIndex].innerHTML;
selectorElements[counter].appendChild(docBox);
docAllBoxes = document.createElement("DIV");
docAllBoxes.setAttribute("class", "allCurrentOptions hidden");
for (counterTwo = 1; counterTwo < secondLength; counterTwo++) {
    // determining current box and content selected by user
  docSomeBoxes = document.createElement("DIV");
  docSomeBoxes.innerHTML = part.options[counterTwo].innerHTML;
  docSomeBoxes.addEventListener("click", function(partItem) {
      var matchingNode, counter, counterThree, currentNode, nodeSibling, currentNodeLength, matchingNodeLength;
      currentNode = this.parentNode.parentNode.getElementsByTagName("select")[0];
      currentNodeLength = currentNode.length;
      nodeSibling = this.parentNode.previousSibling;
      for (counter = 0; counter < currentNodeLength; counter++) {
        if (currentNode.options[counter].innerHTML == this.innerHTML) {
          currentNode.selectedIndex = counter;
          nodeSibling.innerHTML = this.innerHTML;
          matchingNode = this.parentNode.getElementsByClassName("matching");
          matchingNodeLength = matchingNode.length;
          for (counterThree = 0; counterThree < matchingNodeLength; counterThree++) {
            matchingNode[counterThree].removeAttribute("class");
          }
          //   linking selected option with the targeted value
          this.setAttribute("class", "matching");
          break;
        }
      }
      nodeSibling.click();
  });
  docAllBoxes.appendChild(docSomeBoxes);
}
selectorElements[counter].appendChild(docAllBoxes);
docBox.addEventListener("click", function(partItem) {
  partItem.stopPropagation();
  closeAllSelect(this);
  this.nextSibling.classList.toggle("hidden");
  this.classList.toggle("currentActive");
});
}

function closeAllSelect(part) {
// function to close the dropdown of options
var allDropdowns, dropdown, counter, allDropdownsLength, dropdownLength, arrayCounter = [];
dropdown = document.getElementsByClassName("currentOption");
allDropdowns = document.getElementsByClassName("allCurrentOptions");
dropdownLength = dropdown.length;
allDropdownsLength = allDropdowns.length;
for (counter = 0; counter < dropdownLength; counter++) {
  if (part == dropdown[counter]) {
    arrayCounter.push(counter)
  } else {
    dropdown[counter].classList.remove("currentActive");
  }
}
for (counter = 0; counter < allDropdownsLength; counter++) {
  if (arrayCounter.indexOf(counter)) {
    allDropdowns[counter].classList.add("hidden");
  }
}
}

document.addEventListener("click", closeAllSelect);
