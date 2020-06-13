import React, { useState, useEffect } from 'react';
import './App.css';
import TaskList  from './components/TasksList';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from "./components/Login"
function App() {
  return (
    <div className="App">
      <header className="App-header">
        Things To Do!
      </header>
      <Router>
        <Switch>
          <Route path="/tasks">
            <TaskList
            />
          </Route>
          <Route path="/">
            <Login
            />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
