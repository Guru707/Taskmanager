// Define UI Vars
const form = document.querySelector("#task-form");
const taskInput = document.querySelector("#task");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector("clear-tasks");
const filter = document.querySelector("#filter");

loadEventlisterners();
function loadEventlisterners(){
form.addEventListener('submit', addTask);
taskList.addEventListener('click', removeTask);
}
// task add
function addTask(e) {
  e.preventDefault();
  if (taskInput.value === '') {
    alert("fill Value");
    return;
  }
 //let inputValue;
//inputValue.push(taskInput.value) ;
 
  let li = document.createElement('li');
  li.className = "collection-item";
  li.appendChild(document.createTextNode(taskInput.value));
  let a = document.createElement('a');
  a.setAttribute("href","javascript:void()");
  a.className = "delete-item secondary-content ";
  a.innerHTML = '<i class="fa fa-close "></i>';
  li.appendChild(a)
  taskList.appendChild(li);

  console.log(li);

  taskInput.value = '';

}
// task remove

function removeTask(e){
 
 if(e.target.parentElement.classList.contains('delete-item')){
   const todo = e.target.parentElement.parentElement;
   todo.classList.add('remove-animation');
   todo.addEventListener('transitionend', ()=>{
    todo.remove();

   })
  


 }

}
