// Extracting html data from page using getElement
const form = document.getElementById("tasksection");
const button = document.querySelector("#tasksection > button");
const taskItems = document.getElementById("taskItems");
const newTaskInput = document.getElementById("newTaskInput");
const taskDueInput = document.getElementById("taskDueInput");
const referenceType = document.getElementById("referenceType");


// listening for button to 'add' new content
button.addEventListener("click", function(event) {
  event.preventDefault(); 


  let linkTitle = newTaskInput.value;
  let referenceLink = taskDueInput.value;
  let typeNew = referenceType.value;

//   Storing inputs and calling function to create a new 'taskbox'
  createTask(linkTitle, referenceLink, typeNew);
  console.log(allLinks);
})

var allLinks = [];

function createTask(titleReference, hyperLink, typeReference) {
    // paramaters of titleReference, hyperLink and typeReference used for function
  let newLink = {
    titleReference,
    hyperLink,
    typeReference
  };
  allLinks.push(newLink);
  presentTask(newLink);
}

function presentTask(newLink) {
  let part = document.createElement("li");
//   format of new reference item
  part.innerHTML = "<li>" + "TASK: " + newLink.titleReference + "<br>" + "DUE DATE: " +
  newLink.hyperLink + "<br>" + "TYPE: " + newLink.typeReference + "</li>";

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


// JS function used to create list of items that can be scrolled and edited
var selectorElements, part, partLength, secondLength, counter, counterTwo, docBox, docSomeBoxes, docAllBoxes;

// selecting html element in 'specialselector' custom JS to select options in a list
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
