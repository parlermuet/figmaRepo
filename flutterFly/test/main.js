



console.log('ToDo List menu : ');
console.log('1. Add Task');
console.log('2. View Tasks');
console.log('3. Remove Tasks');

let mytasks=[];

let choice = prompt('Enter your choice');

switch(choice){

    case 1:
        addTask();
        break;
    case 2:
        viewTask();
        break;
}


function addTask(){
    let taskName=prompt("Enter the task ");
    mytasks.push(taskName);
    
}

function viewTask(){
    for(let i=0;i<mytasks.length;i++){
        console.log(mytasks[i]);
    }
}