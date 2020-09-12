import React from 'react'

import './Task.css'

const Task = (props) => {
    let className = 'task'
    if (props.deleted) {
        className += ' deleted'
    }
    return (
        <li className={className} >
            <div className="task__text">{props.text}</div>
            <button
                className="task__del-btn"
                onClick={props.deleteTask}>
                X
            </button>
        </li>
    )
}

export default Task;