const fs = require('fs');
const readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);

let tasks = ["task1", "task2", "task3"]
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
                    console.log(tasks);
                        break;
                case '2': 

                        rl.question('to add a task name, give name',(addTask) =>{
                        // console.log(addTask+"enter task")
                        tasks.push(addTask);
                        console.log("added an element in an array",tasks);
                    }
                    )

                        break;
                case '3': 
                    console.log(tasks);
                    rl.question('to delete a task, give the taskname',(deletTask) =>{
                        tasks = tasks.filter(a=> a !==  deletTask )
                        console.log(tasks);

                    }
                    )
                        break;
                case '4': 
                    console.log(tasks);
                    

                    rl.question("to mark task as done name the task",(taskDone) =>
                        {
                            const tasksMap = new Map();
                            var task1, task2, task3;
                            tasksMap.set(taskDone,'Done');
                            for (const [key, value] of tasksMap) {
                                console.log(`${key} = ${value}`);
                            }
                        }
                    )
                    
                        break;
                case 5:
                        break;
                default: console.log('listed item not selscted')
            }
        // console.log('you selected:' + taskNo);
        rl.close();
    })
    // console.log(tasks)
}

showtasks()

// EXEMPLE
// rl.question('What is your age? ', (age) => {
//     console.log('Your age is: ' + age);
//     rl.close();
// });