import React, { Component } from 'react'
import './App.css'
import Form from './components/Form'
import Itunes from './components/Itunes'


class App extends Component {

  state = {
    name: "",
    url: ""
  }


  getItunes = async (e) => {
    e.preventDefault()
    const search = e.target.elements.search.value
    const api_call = await fetch(`https://itunes.apple.com/search?term=${search}&entity=podcast`)
    const data = await api_call.json()
    console.log(data)
    this.setState({
      name: data.results[0].artistName,
      url: data.results[0].feedUrl
    })
  }

  render() {
    return (
      <div>
        <Form getItunes={this.getItunes}/>
        <Itunes name={this.state.name} url={this.state.url} />
      </div>
    );
  }
}

export default App
