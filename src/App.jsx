import { useState } from "react";
import TaskInput from "./components/TaskInput";
import { TaskItem } from "./components/TaskItem";

function App() {
  const [toDoList, setToDoList] = useState([]);

  const addTask = (taskName) => {
    const newTask = {taskName, checked: false};
    setToDoList([...toDoList, newTask])
  }

  function deletTask(deletTaskName){
    setToDoList(toDoList.filter(task=> task.
      taskName !== deletTaskName))
  }

  function toggleCheck(taskName){
    setToDoList((prevToDoList) =>
    prevToDoList.map((task) =>
    task.taskName === taskName ? { ...task,
    checked: !task.checked } : task,
    ),
  );
  }

  console.log(toDoList);
  return(
 <>
    <div className="container">
      <h1>Keysi <br></br>To Do List</h1>

      <TaskInput addTask ={addTask}/>

      <div className="toDoList">
        <span>TO DO</span>
        <ul className="list-items">
          {toDoList.map((task, key) =>(
            <TaskItem task={task} key={key} 
            deletTask = {deletTask}
            toggleCheck = {toggleCheck} />
          ))}
        </ul>

        {toDoList.length ===0? <
          p className="notify"> You are done!</p> 
          : null}
      </div>
    </div>
  </>
  );
}

export default App;
