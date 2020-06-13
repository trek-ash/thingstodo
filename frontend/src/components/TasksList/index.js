import React, { Fragment, useState, useEffect } from 'react';
import './tasks.css'
import Task from "./Task"
import {MdAddCircle} from "react-icons/all";
import AddTask from './AddTask';
import taskAPI from '../../services/tasks'
import {FiLogOut} from "react-icons/all"
import {useHistory} from "react-router-dom"
const TaskList = () => {
    const history= useHistory()
    const username = sessionStorage.getItem("uid")
    useEffect(()=>{
        if(!username)
            history.push("/")
        else
            taskAPI.getAllTasks(username)
            .then(task=>{
            console.log(task)
            updateTaskList(task.data)
            })
    },[])

    const [taskList, updateTaskList] = useState([])
    const addTask = (title, description, category)=>{
        taskAPI.addTask({title, description, category, username})
        .then(res=>{      
        updateTaskList([res.data, ...taskList])
        })
        .catch(err=>{
        console.log(err)
        })
  }
    const [showAddTask, updateShowAddTask] = useState(false)
    const logout = () => {
        sessionStorage.removeItem("uid")
        history.push("/")
    }
    const updateTaskStatus = () => {
        
    }
    const toggleShowAddTask = () => {
        updateShowAddTask(!showAddTask)
    }

    const saveTaskValues = (title, description, category) =>  {
        addTask(title, description, category)
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
            <div className="float-right ">
                <FiLogOut className="logout-btn" onClick={logout}/>
            </div>
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
                        taskList.map(task=>{
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