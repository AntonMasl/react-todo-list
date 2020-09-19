import React from 'react';

import './List.css'
import Task from './Task/Task';

const List = (props) => {
    let Tasks = props.tasks.map(item => <Task key={item.id}
        text={item.text}
        deleted={item.deleted}
        deleteTask={props.deleteTask.bind(this,item.id,item.deleted)} />)
        // () => props.deleteItem(item.id,item.deleted)
    return (
        <ul className="list">
            {Tasks}
        </ul>
    )
}

export default List;