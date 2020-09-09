import React, { Component } from 'react';
import './App.css';
import Form from '../Form/Form';
import List from '../List/List';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [
        { id: 1, text: 'Купить хлеба' },
        { id: 2, text: 'фыв dfg sdfsdfgs hsdfpgsdfpgh fsdgu dpfgsdpf gspd sdfgsdfg dsf kgsfdgiudhf giodfug dfgosdfg fsdh gosdfu godsfgosdf hgdsfhgu dsfguhs fddsf gsdfgsdfgsdfg sdfg sdfg sdfgsdfggu dsfog udosfgsdf fgsdfg фывфыгщвфывфыв фыгшв рфывгшрзфЫВРФыврФЫВ Фыв ФЫВФВ ФЫВ ФЫВ ФВ ФЫВФЫВ' },
        { id: 3, text: 'Купить' }
      ],
    }
    this.deleteItem = this.deleteItem.bind(this)
    this.addItem = this.addItem.bind(this)

    this.maxId = this.state.data.length

  }

  deleteItem(id) {
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

  addItem(content) {
    const newItem = { id: ++this.maxId, text: content }
    this.setState(state => {
      const newArr = [...state.data, newItem]
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
          <Form addItem={this.addItem} />
          <List state={this.state} deleteItem={this.deleteItem} />
        </div>
      </div>

    )

  }

}

export default App;
