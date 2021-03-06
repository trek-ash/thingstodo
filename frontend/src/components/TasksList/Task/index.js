import React from 'react';
import "../tasks.css"
import {FaRegCircle, FaRegCheckCircle} from "react-icons/all"
const Task = (props) => {
    const toggleTaskStatus = ()=>{
        props.updateStatus(props.task, !props.task.done)
    }
    return(
        <div className={props.task.done?"task done-task":"task"}>

            <div className="task-status">
                {props.task.done?
                    <FaRegCheckCircle 
                        className="status-icon green"
                        onClick={toggleTaskStatus}
                    />:

                    <FaRegCircle 
                        className="status-icon"
                        onClick={toggleTaskStatus}
                    />
                }
            </div>
            
            <div className="task-title" >
                {props.task.title}
                 
            <div className="float-right category-icon" style={{background: props.color}}>

            </div>
            </div> 
        </div>
    )
}

export default Task;