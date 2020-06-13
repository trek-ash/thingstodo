import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import TaskList  from './TasksList';
import taskAPI from './services/tasks'
function App() {
  useEffect(()=>{
    taskAPI.getAllTasks()
    .then(task=>{
      console.log(task)
      updateTaskList(task.data)
    })
  },[])
  
  const [taskList, updateTaskList] = useState([])

  return (
    <div className="App">
      <header className="App-header">
        Things To Do!
      </header>
      <TaskList 
          
          tasks={taskList}
        />
    </div>
  );
}

export default App;
