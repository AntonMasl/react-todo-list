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
        if (this.state.value === '') {
            alert('Вы ничего не ввели')
            return
        }
        this.props.addItem(this.state.value)
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
                    placeholder="Введите дело"
                    onChange={this.valueChange}
                />
                <button
                    className="form__btn"
                >
                    Добавить
                        </button>
            </form>
        )
    }
}

export default Form;