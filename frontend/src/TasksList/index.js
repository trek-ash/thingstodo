import React, { Fragment } from 'react';
import './tasks.css'
import Task from "./Task"
import {MdAddCircle} from "react-icons/all";
const TaskList = (props) => {
    const updateTaskStatus = () => {

    }
    return(
        <Fragment>
            <div className="task-list-wrapper">
                <div>
                
                    <div className="header">
                        
                        <div className="add-task-btn">
                            <MdAddCircle className="cursor-pointer"/>
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