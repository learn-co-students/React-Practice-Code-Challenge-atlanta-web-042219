import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
import WalletForm from './WalletForm'

const totalSushi = 100
const pageLimit = 4

const lastPage = Math.ceil(totalSushi/pageLimit)
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
			page: this.state.page+1 > lastPage ? 1 : this.state.page+1,
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

	addFunds = (dosh) => this.setState({ wallet: this.state.wallet + parseInt(dosh, 10) })

  render() {
    return (
      <div className="app">
        <SushiContainer fetchSushi={this.fetchSushi} eatSushi={this.eatSushi} sushis={this.state.sushis} eaten={this.state.eaten} />
        <WalletForm wallet={this.state.wallet} addFunds={this.addFunds} />
        <Table eaten={this.state.eaten} />
      </div>
    );
  }
}

export default App;