import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

const API = "http://localhost:3000/sushis"

class App extends Component {
  constructor() {
    super()
    this.state = {
      page: 1,
      sushiList: [],
      wallet: 100,
      eaten: []
    }
  }

  fetchSushi = () => {
    return fetch(`${API}?_limit=4&_page=${this.state.page}`)
    .then(resp => resp.json())
    .then(json => {
      let sushiArray = json.map(sushi => {return {...sushi, ate: false}})
      this.setState(
        {sushiList: sushiArray, page: this.state.page + 1}
      )
    })
  }

  componentDidMount() {
    this.fetchSushi()
  }

  eatSushi = (sushi) => {
    sushi.ate = true
    
    if (!this.state.eaten.includes(sushi) && this.state.wallet - sushi.price > 0) {
      this.setState({
        eaten: [...this.state.eaten, sushi],
        wallet: this.state.wallet - sushi.price
      })
    }
    else alert("Sorry, you can't do that.")
  }

  render() {
    console.log('Eaten array:', this.state.eaten)

    return (
      <div className="app">
        <SushiContainer
          sushiList={this.state.sushiList}
          fetchSushi={this.fetchSushi}
          eatSushi={this.eatSushi}
          />

        <Table
          sushiList={this.state.sushiList}
          eaten={this.state.eaten}
          wallet={this.state.wallet}
        />
      </div>
    );
  }
}

export default App;