
//define UI vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');


// load all event listeners
loadEventListeners();



// load all event listeners
 function loadEventListeners(){
   //dom load event 
   document.addEventListener('DOMcontentLoaded', getTasks);
   //add task event
   form.addEventListener('submit', addTask);
  //remove task event
  taskList.addEventListener('click', removeTask);
  //clear task event
  clearBtn.addEventListener('click', clearTasks);
  //filter tasks event
  filter.addEventListener('keyup', filterTasks);
 }

 //get tasks from ls
 function getTasks(){
  let tasks;
  if(localStorage.getItem('tasks') === null){
tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach(function(task){
//create li element
const li = document.createElement('li');
// add class
li.className = 'collection-item';
// create text node and append to li 
li.appendChild(document.createTextNode(task));

//create new link element
const link = document.createElement('a');
//add class
link.className = 'delete-item secondary-content';
//add icon html
link.innerHTML = '<i class="fa fa-remove"></i>';
//append the link to li
li.appendChild(link);

//append li to ul
taskList.appendChild(li);
  });
 }

 //add task
 function addTask(e){

  if(taskInput.value === ''){
    alert('add a task');
  }

  //create li element
  const li = document.createElement('li');
  // add class
  li.className = 'collection-item';
  // create text node and append to li 
  li.appendChild(document.createTextNode(taskInput.value));

  //create new link element
  const link = document.createElement('a');
  //add class
  link.className = 'delete-item secondary-content';
  //add icon html
  link.innerHTML = '<i class="fa fa-remove"></i>';
  //append the link to li
  li.appendChild(link);

  //append li to ul
taskList.appendChild(li);

//store in LS
storeTaskInLocalStorage(taskInput.value);

//re
//clear input
taskInput.value = '';


  e.preventDefault();
 }

 // store task
 function storeTaskInLocalStorage(task){
   let tasks;
   if(localStorage.getItem('task') === null){
tasks = [];
   } else {
     tasks = JSON.parse(localStorage.getItem('tasks'));
   }
  tasks.push(task);

  localStorage.setItem('tasks', JSON.stringify(tasks));

 }
 //remove task
 function removeTask(e){ 
   if(e.target.parentElement.classList.contains('delete-item')){
     if(confirm('are you sure?')) {
      e.target.parentElement.parentElement.remvoe();

//remove from ls 
 removeTaskFromLocalStorage(e.target.parentElement.parentElement);


     }
   }
   }
 

   //remove from ls
   function removeTaskFromLocalStorage(taskItem){
     let tasks;
     if(localStorage.getItem('tasks') === null){
       tasks = [];
     }
     else {
       tasks = JSON.parse(localStorage.getItem('tasks'));
     }
      tasks.forEach(function(task, index){
        if(taskItem.textContent === task){
          tasks.splice(index, 1);
        }
      });
      localStorage.setItem('tasks', JSON.stringify(tasks));

     }
   //clear tasks
   function clearTasks(){
     //taskList.innerHTML = '';

     //faster
     while(taskList.firstChild){
       taskList.removeChild(taskList.firstChild);
     }
      //clear from ls
      clearTasksFromLocalStorage();
   }

 // clear tasks from ls
 function clearTasksFromLocalStorage(){
    localStorage.clear();
 }


//filter tasks
function filterTasks(e){
const text = e.target.value.toLowercase();

document.querySelectorAll('.collection-item').forEach(function(task){
  const item = task.firstChild.textContent;
  if(item.toLowerCase().indexOf(text) != -1){
    task.style.display = 'none';
    } else{

    }
  }
);

}






 