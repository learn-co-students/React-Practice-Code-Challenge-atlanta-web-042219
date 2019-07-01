import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const pageLimit = 4
const API = `http://localhost:3000/sushis?_limit=${pageLimit}&_page=`


class App extends Component {

  constructor(){
    super();
    this.state = {
      sushis: [],
      wallet: 100,
      eaten: [],
      page: 1
    }
  }

  fetchSushi = (e) => {
    fetch(API+this.state.page)
    .then(res => res.json())
    .then(sushi => this.setState({
      sushis: sushi,
      page: this.state.page + 1
    }))
  }

    componentDidMount(){
      this.fetchSushi()
    }

    eatSushi = (sushi) => {
      console.log(sushi)
      if(sushi.price <= this.state.wallet)
        this.setState({
          wallet: this.state.wallet - sushi.price,
          eaten: [...this.state.eaten, sushi.id]
        })
      else
        alert("Not enough money.")
    }

  render() {
    return (
      <div className="app">
        <SushiContainer fetchSushi={this.fetchSushi} sushis={this.state.sushis} eatSushi={this.eatSushi} eaten={this.state.eaten}/>
        <Table wallet={this.state.wallet} eaten={this.state.eaten}/>
      </div>
    );
  }
}

export default App;