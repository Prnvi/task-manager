const fs = require('fs');
const readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);

let totat_tasks = ["task1", "task2", "task3"]
const showtasks = () => {
    console.log('Welcome to your task manager, Press:')
    rl.question(
                `1. to see all your tasks, 
                2. to add a task 
                3. to delete a task
                4. to mark a task as done
                5. to Exit the task manager`, (taskNo) =>{
                    
            switch (taskNo){
                // console.log(typeof(taskNo))
                case '1': 
                    console.log(totat_tasks);
                        break;
                case '2': 

                        rl.question('give name to add a task name',(addTask) =>{
                        // console.log(addTask+"enter task")
                        totat_tasks.push(addTask);
                        console.log("added an element in the array",totat_tasks);
                    }
                    )

                        break;
                case '3': 
                    console.log(totat_tasks);
                    rl.question('give taskname to delete a task',(deletTask) =>{
                        totat_tasks = totat_tasks.filter(a=> a !==  deletTask )
                        console.log(totat_tasks);

                    }
                    )
                        break;
                case '4': 
                    console.log(totat_tasks);
                    

                    rl.question("to mark task as done name the task",(taskDone) =>
                        {
                            const tasksMap = new Map();
                            var task1, task2, task3;
                            tasksMap.set(taskDone,'Task completed');
                            for (const [key, value] of tasksMap) {
                                console.log(`${key} = ${value}`);
                            }
                        }
                    )
                    
                        break;
                case 5:
                        break;
                default: console.log('listed item is not selected')
            }
        
        rl.close();
    })
   
}

showtasks()

