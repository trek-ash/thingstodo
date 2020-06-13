import React, { Fragment, useState, useEffect } from 'react';
import './tasks.css'
import Task from "./Task"
import {MdAddCircle} from "react-icons/all";
import AddTask from './AddTask';
const TaskList = (props) => {
    const [showAddTask, updateShowAddTask] = useState(false)
    const updateTaskStatus = () => {

    }
    const toggleShowAddTask = () => {
        updateShowAddTask(!showAddTask)
    }

    const saveTaskValues = (title, description, category) =>  {
        props.addTask(title, description, category)
        updateShowAddTask(false)
    }
    const renderModal = ()=>{
        return(<AddTask 
            show={showAddTask}
            handleClose={toggleShowAddTask}
            saveTask={saveTaskValues}
        />)
    }
    return(
        <Fragment>
            <div className="task-list-wrapper">
                <div>
                    {renderModal()}
                    <AddTask 
            show={showAddTask}
            handleClose={toggleShowAddTask}
            saveTask={saveTaskValues}
        />
                    <div className="header p-3">
                        
                        <div className="add-task-btn">
                            <MdAddCircle className="cursor-pointer" onClick={toggleShowAddTask}/>
                        </div>
                        <h2>All Tasks</h2>
                    </div>
                    <div className="tasks-list">
                    {
                        props.tasks.map(task=>{
                            return (
                                <Task 
                                    task={task}
                                    updateStatus={updateTaskStatus}
                                />
                            )
                        })
                    }
                    <div>

                    </div>
                </div>
                </div>
            </div>    
        </Fragment>
    )
}
export default TaskList