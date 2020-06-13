import React, { useState, useEffect } from 'react';
import './App.css';
import TaskList  from './components/TasksList';
import taskAPI from './services/tasks'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from "./components/Login"
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
      <Router>
        <Switch>
          <Route path="/tasks">
            <TaskList 
            
              addTask={addTask}
              tasks={taskList}
            />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
