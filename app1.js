// Define UI Vars
const form = document.querySelector("#task-form");
const taskInput = document.querySelector("#task");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector("clear-tasks");
const filter = document.querySelector("#filter");
let listItems = [];

form.addEventListener('submit', addTask);


if (localStorage.getItem("listItemsLS")) {
  listItems = JSON.parse(localStorage.getItem("listItemsLS"));
}

var itemsEl = '';

// listItems.forEach(item => {
//   // itemsEl += '<li>'+item+'<a class="delete-item secondary-content"><i class="fa fa-close"></i></a></li>';
//   itemsEl += `<li class="collection-item">${item}<a href="#" class="delete-item secondary-content"><i class="fa fa-close"></i></a></li>`;

// });


taskList.innerHTML = itemsEl;

function addTask(e) {
  e.preventDefault();

  var inputValue = taskInput.value;

  if (inputValue === '') {
    alert("fill Value");
    return;
  }

  listItems.push(inputValue);
  localStorage.setItem("listItemsLS", JSON.stringify(listItems));

  // // create li element
  const li = document.createElement('li'); // <li></li>
  li.className = 'collection-item'; // <li class="collection-item"></li>
  const textNode = document.createTextNode(inputValue); // ....
  li.appendChild(textNode); // <li class="collection-item">...</li>

  const link = document.createElement("a");
  link.className = "delete-item secondary-content";
  link.innerHTML = '<i class="fa fa-close"></i>';

  li.appendChild(link);
  taskList.appendChild(li);
  taskInput.value = '';
};
console.log();
taskList.addEventListener('click', removeTask);

function removeTask(e) {
  if (e.target.parentElement.classList.contains("delete-item")) {
    if (confirm("Are you sure?")) {
      e.target.parentElement.parentElement.remove();
    }
  }
}