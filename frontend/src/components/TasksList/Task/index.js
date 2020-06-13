import React from 'react';
import "../tasks.css"
import {FaRegCircle, FaRegCheckCircle} from "react-icons/all"
const Task = (props) => {
    const toggleTaskStatus = ()=>{
        // props.task.done
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
            </div>  
        </div>
    )
}

export default Task;