import React, { Fragment, useState, useEffect } from 'react';
import './tasks.css'
import Task from "./Task"
import {MdAddCircle} from "react-icons/all";
import AddTask from './AddTask';
import taskAPI from '../../services/tasks'
import {FiLogOut} from "react-icons/all"
import {useHistory} from "react-router-dom"
import Category from "./Category"
const TaskList = () => {
    const history= useHistory()
    const username = sessionStorage.getItem("uid")
    const [taskList, updateTaskList] = useState([])
    const [categories, updateCategories] = useState([])
    const [filterCategory, updateFilterCategory] = useState([])
    const [showAddTask, updateShowAddTask] = useState(false)
    const [filteredTask, updateFilteredTask] = useState([])
    useEffect(()=>{
        if(!username)
            history.push("/")
        else
            taskAPI.getAllTasks(username)
            .then(task=>{
                updateTaskList(task.data)
                updateFilteredTask(task.data)
            })
    },[])

    useEffect(()=>{
        let categories = taskList.map(task=>task.category)
        updateCategories(categories)

    }, [taskList])

    useEffect(()=>{
        console.log(filterCategory)
        if(filterCategory.length==0)
            updateFilteredTask(taskList)
        else    {
            let filteredTask = taskList.filter(task=>filterCategory.indexOf(task.category)!=-1)
            updateFilteredTask(filteredTask)
        }
    }, [filterCategory])
    const addTask = (title, description, category)=>{
        taskAPI.addTask({title, description, category, username})
        .then(res=>{      
            updateTaskList([res.data, ...taskList])
        })
        .catch(err=>{
        console.log(err)
        })
    }
    const logout = () => {
        sessionStorage.removeItem("uid")
        history.push("/")
    }
    const stringToColour = (str) => {
        var hash = 0;
        for (var i = 0; i < str.length; i++) {
          hash = str.charCodeAt(i) + ((hash << 5) - hash);
        }
        var colour = '#';
        for (var i = 0; i < 3; i++) {
          var value = (hash >> (i * 8)) & 0xFF;
          colour += ('00' + value.toString(16)).substr(-2);
        }
        return colour;
      }
    const updateTaskStatus = (task, new_status) => {
        taskAPI.updateTaskStatus({...task, done: new_status})
        .then(res=>{
            const updatedTaskList = taskList.map(task=>{
                if(task.id==res.data.task.id)
                    return res.data.task
                return task
            })
            const updatedFilteredTask = filteredTask.map(task=>{
                if(task.id==res.data.task.id)
                    return res.data.task
                return task
            })
            updateTaskList(updatedTaskList)
            updateFilteredTask(updatedFilteredTask)
        })
        .catch(err=>{
            console.log(err)
        })
    }
    const toggleShowAddTask = () => {
        updateShowAddTask(!showAddTask)
    }
    const saveTaskValues = (title, description, category) =>  {
        addTask(title, description, category)
        updateShowAddTask(false)
    }
    const filterCurrentCategory = (category)=>{
        let updatedFilterCategory = [...filterCategory]
        const index = filterCategory.indexOf(category)
        
        if(index==-1)
            updateFilterCategory([...filterCategory, category])
        else {
            updatedFilterCategory.splice(index, 1)
            updateFilterCategory(updatedFilterCategory)
        }
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
                <span className="username-span">{sessionStorage.getItem("uid")}</span>
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
                    <Category getColor={stringToColour} categories={categories} filterCategory={filterCategory} filter={filterCurrentCategory}/>
                    <div className="tasks-list">
                    {
                        filteredTask.map(task=>{
                            return (
                                <Task 
                                    key={task.id}
                                    task={task}
                                    color={stringToColour(task.category)}
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