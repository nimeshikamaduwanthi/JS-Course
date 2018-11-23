// set local storage item
// localStorage.setItem('name', 'john');
// localStorage.setItem('age', '20');

// set session storage item
//sessionStorage.setItem('name', 'nim');

//remove from from storage
//localStorage.removeItem('name');

// get from storage
// const name = localStorage.getItem('name');
// const age = localStorage.getItem('age');

// //clear local storage
// localStorage.clear();
// console.log(name, age);

document.querySelector('from').addEventListener('submit',
function(e){
  const task = document.getElementById('task').value;

  let tasks;

  if(localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
    
  }
tasks.push(tasks);


  localStorage.setItem('task',JSON.stringify(task));

  alert('task saved');

  e.preventDefault();
});

const tasks = JSON.parse(localStorage.getItem('tasks'));

tasks.foreach(function(task){
console.log(task);
});