import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import TaskList  from './TasksList';

function App() {
  const tasks = [{
    title: "Beta",
    category: "Dev",
    description: "This is first task",
    done: false
  }, {
    title: "Geta",
    category: "Dev",
    description: "This is first task",
    done: true
  }, {
    title: "Geta",
    category: "Dev",
    description: "This is first task",
    done: true
  }, {
    title: "Geta",
    category: "Dev",
    description: "This is first task",
    done: true
  }, {
    title: "Geta",
    category: "Dev",
    description: "This is first task",
    done: true
  }, {
    title: "Geta",
    category: "Dev",
    description: "This is first task",
    done: true
  }, {
    title: "Geta",
    category: "Dev",
    description: "This is first task",
    done: true
  }, {
    title: "Geta",
    category: "Dev",
    description: "This is first task",
    done: true
  }, {
    title: "Geta",
    category: "Dev",
    description: "This is first task",
    done: true
  }, {
    title: "Geta",
    category: "Dev",
    description: "This is first task",
    done: true
  }, {
    title: "Geta",
    category: "Dev",
    description: "This is first task",
    done: true
  }, {
    title: "Geta",
    category: "Dev",
    description: "This is first task",
    done: true
  }, {
    title: "Geta",
    category: "Dev",
    description: "This is first task",
    done: true
  }, {
    title: "Geta",
    category: "Dev",
    description: "This is first task",
    done: true
  }]
  const [taskList, updateTaskList] = useState(tasks)

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
