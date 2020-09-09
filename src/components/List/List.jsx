import React from 'react';

import './List.css'
import Item from './Item/Item'

const List = (props) => {
    let dataItems = props.state.data.map(item => <Item key={item.id} text={item.text} deleted={item.deleted} deleteItem={() => props.deleteItem(item.id)} />)
    return (
        <ul className="list">
            {dataItems}
        </ul>
    )
}

export default List;