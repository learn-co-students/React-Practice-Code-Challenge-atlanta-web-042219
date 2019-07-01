import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
import WalletForm from './WalletForm'


class App extends Component {

	API_SUSHI = 'http://localhost:3000/sushis'
	showSushiLimit = 4
	sushis = []

	state = {
		wallet: 100,
		eaten: [],
		index: 0
	}

	componentDidMount(){
		fetch(this.API_SUSHI)
		.then(resp => resp.json())
		.then(resp => {
			this.sushis = resp
			this.forceUpdate()
		})
	}

	getSushis = function() {
		let showSushis = []

		for(let k=this.state.index; k < this.state.index + this.showSushiLimit; k++)
			if(this.sushis[k])
				showSushis.push(this.sushis[k])

		return showSushis
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

	moreSushi = ()=> {
		let newIndex = this.state.index+this.showSushiLimit
		this.setState({ index: this.sushis[newIndex] ? newIndex : 0 })
	}

	addFunds = (dosh) => this.setState({ wallet: this.state.wallet + parseInt(dosh, 10) })

  render() {
  	// console.log(this.state)
    return (
      <div className="app">
        <SushiContainer moreSushi={this.moreSushi} eatSushi={this.eatSushi} sushis={this.getSushis()} eaten={this.state.eaten} />
        <WalletForm wallet={this.state.wallet} addFunds={this.addFunds} />
        <Table eaten={this.state.eaten} />
      </div>
    );
  }
}

export default App
