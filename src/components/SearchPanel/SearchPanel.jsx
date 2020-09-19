import React, { Component } from 'react';

import './SearchPanel.css';

export default class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            valueSearch: ''
        }
        this.valueSearchChange = this.valueSearchChange.bind(this)
    }

    valueSearchChange(e){
        this.setState({
            valueSearch: e.target.value
        })
        this.props.valueSearchChange(e.target.value);
    }

    render() {
        return (
            <input
                type="text"
                placeholder="Поиск задачи..."
                className="search-panel"
                value={this.state.valueSearch} 
                onChange={this.valueSearchChange}/>
        )
    }

}