// Variables
var NewTaskForm = document.querySelector('.new-task-container form');
var tasksContainer = document.querySelector('.tasks-container ul');



// On DOM load
document.addEventListener('DOMContentLoaded', function(){
   submitNewEvents();
   showTasks(); 
});

