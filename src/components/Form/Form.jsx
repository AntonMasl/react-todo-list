import React, { Component } from 'react';

import './Form.css'


class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: ''
        }
        this.valueChange = this.valueChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    valueChange(e) {
        this.setState({
            value: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault()
        if (+this.state.value.trim() === 0) {
            alert('Вы ничего не ввели')
            return
        }
        this.props.addTask(this.state.value)
        this.setState({
            value: ''
        })
    }

    render() {
        return (
            <form className="form" onSubmit={this.onSubmit}>
                <input
                    className="form__input"
                    type="text"
                    value={this.state.value}
                    placeholder="Введите задачу..."
                    onChange={this.valueChange}
                />
                <button className="form__btn">Добавить</button>
            </form>
        )
    }
}

export default Form;