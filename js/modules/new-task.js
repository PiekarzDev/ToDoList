function addNewTask(title){
    var taskLi = document.createElement('li');
    
    taskLi.classList.add('single-task');
    taskLi.innerHTML = prepareTaskHTML(title);
    
    //Events toggle and delete
    
    var toggleCompleteBtn = taskLi.querySelector('.toggle-complete-btn');
    
    var deleteBtn = taskLi.querySelector('.delete-task-btn');
    
    toggleCompleteBtn.addEventListener('click', function(){
        toggleTaskDone(this);
    });
    
    deleteBtn.addEventListener('click', function(){
        deleteTask(this);
    });
    
    // Add task to DOM
    tasksContainer.appendChild(taskLi);  
}

function prepareTaskHTML(title) {
   return '<div class="input-group"> ' +
                        '<span class="input-group-btn">' +
                            '<button class="btn btn-default toggle-complete-btn" >' +                       '<i class="fa fa-check" aria-hidden="true"></i></button>' +
                      '</span>' +
                       '<input type="text" class="form-control" placeholder="Task Title" value="'+ title+'">'+
                        '<span class="input-group-btn">'+
                            '<button class="btn btn-danger delete-task-btn"><i class="fa fa-times" aria-hidden="true"></i></button> ' +
                      '</span>'+
                    '</div>'
}

// Add new task events
function submitNewEvents() {
    // On Submit
    NewTaskForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        var title = this.querySelector('input').value;
        
        if(title) {
            addNewTask(title);
        } 
        
    });
    
}











