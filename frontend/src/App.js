import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import TaskList  from './TasksList';
import taskAPI from './services/tasks'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  useEffect(()=>{
    taskAPI.getAllTasks()
    .then(task=>{
      console.log(task)
      updateTaskList(task.data)
    })
  },[])

  const [taskList, updateTaskList] = useState([])
  const addTask = (title, description, category)=>{
    taskAPI.addTask({title, description, category})
    .then(res=>{      
      updateTaskList([res.data, ...taskList])
    })
    .catch(err=>{
      console.log(err)
    })
  }
  return (
    <div className="App">
      <header className="App-header">
        Things To Do!
      </header>
      <TaskList 
          addTask={addTask}
          tasks={taskList}
        />
    </div>
  );
}

export default App;
