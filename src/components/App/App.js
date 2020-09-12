import React, { Component } from 'react';
import './App.css';
import Form from '../Form/Form';
import List from '../List/List';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
    this.deleteTask = this.deleteTask.bind(this)
    this.addTask = this.addTask.bind(this)
    this.maxId = this.state.data.length
  }

  deleteTask(id, deleted) {
    if (deleted) {
      return
    }
    this.setState(state => {
      const index = state.data.findIndex((elem) => elem.id === id)
      const newArr = [...state.data]
      newArr[index].deleted = true
      return {
        data: newArr
      }

    })
    setTimeout(() => this.setState(state => {
      const index = state.data.findIndex((elem) => elem.id === id)
      const newArr = [...state.data.slice(0, index), ...state.data.slice(index + 1)]
      return {
        data: newArr
      }
    }), 700)
  }

  addTask(content) {
    const newTask = {
      id: ++this.maxId,
      text: content,
      deleted: false
    }
    this.setState(state => {
      const newArr = [...state.data, newTask]
      return {
        data: newArr
      }
    })

  }

  render() {
    return (
      <div className="todo" >
        <div className="todo__inner">
          <h1 className="todo__title">Список дел</h1>
          <Form addTask={this.addTask} />
          <List state={this.state} deleteTask={this.deleteTask} />
        </div>
      </div>

    )

  }

}

export default App;
