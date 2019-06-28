import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

const pageLimit = 4
const lastPage = Math.ceil(81/4)
const API = `http://localhost:3000/sushis?_limit=${pageLimit}&_page=`

class App extends Component {

	state = {
		wallet: 100,
		sushis: [],
		eaten: [],
		page: 1
	}

	fetchSushi = () => {
		fetch(API+this.state.page)
		.then(resp => resp.json())
		.then(resp => this.setState({
			page: this.state.page+1,
			sushis: resp
		}))
	}

	componentDidMount(){
		this.fetchSushi()
	}

	eatSushi = (sushi) => {
		if(sushi.price <= this.state.wallet)
			this.setState({
				wallet: this.state.wallet - sushi.price,
				eaten: [...this.state.eaten, sushi.id]
			})
		else
			alert("You don't have enough money for that!")
	}

	moreSushi = (e) => {
		if(this.state.page-1 < lastPage) {
			this.fetchSushi()
		}
		else
			alert("We're all out of sushi!")
	}

  render() {
    return (
      <div className="app">
        <SushiContainer moreSushi={this.moreSushi} eatSushi={this.eatSushi} sushis={this.state.sushis} eaten={this.state.eaten} />
        <Table wallet={this.state.wallet} eaten={this.state.eaten} />
      </div>
    );
  }
}

export default App;