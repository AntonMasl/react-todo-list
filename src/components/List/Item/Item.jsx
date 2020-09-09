import React from 'react'

import './Item.css'

const Item = (props) => {
    let className = 'item'
    if (props.deleted) {
        className += ' deleted'
    }
    return (
        <li className={className} >
            <div className="item__text">{props.text}</div>
            <button
                className="item__del-btn"
                onClick={props.deleteItem}>
                X
            </button>
        </li>
    )
}

export default Item;