 //localStorage.setItem('name','Guru');
// sessionStorage.setItem('name', 'Raj')



//remove local storage items

//localStorage.removeItem('name')


// get items local storage
//const get = localStorage.getItem('name')

//localStorage.clear('name');
//console.log(get);

document.querySelector('form').addEventListener('submit', function(e) {

  const taskVal = document.getElementById("task").value;
 
 //console.log(typeof taskVal)
  let tasks;
 if(localStorage.getItem('value') === null){
  tasks = [];
  console.log(typeof tasks);
 }else{
  tasks = JSON.parse(localStorage.getItem('value'));
 }

tasks.push(taskVal);

  localStorage.setItem('value',JSON.stringify(tasks));

  alert("Value Storage");

   console.log(tasks);


  e.preventDefault();
})

