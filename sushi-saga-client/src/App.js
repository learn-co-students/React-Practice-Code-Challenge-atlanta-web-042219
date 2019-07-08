import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
// const API = "http://localhost:3000/sushis/"
const limitAPI = "http://localhost:3000/sushis/?_limit=4&_page="


class App extends Component {
// orignal data not need to chnage bcz we are not persisiting data
  constructor(props) {
    super(props)
  
    this.state = {
       sushis: [],
       page: 1,
       eaten:[],
       wallet: 100
       //sushiINdex: 0
    }
  }
  

  componentDidMount(){
    fetch(limitAPI.concat(this.state.page))
    .then(res => res.json())
    .then(sushis => {
      // setState can get optional argument so u can put this.setState({ sushis:sushis}, console.log(this.state)
      this.setState({ sushis: sushis})
    }) 
  }

  // getSushis(){  // not inclusive in slice last element 
    // let sushiArray = this.sushis.slice(sushiIndex, sushiIndex +5)
    // this.state

  // }

  //sushi to table 

   handleMore = () =>{

    this.setState({
      page: this.state.page + 1 
    })
    this.componentDidMount()
  }

  eatSushi = (sushi) => {
    // console.log(sushi)
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
        <SushiContainer  allSushi={this.state.sushis} moreFunc={this.handleMore} eatenCallBack={this.eatSushi} eaten={this.state.eaten}/>
        <Table wallet={this.state.wallet} eaten={this.state.eaten}/>
      </div>
    );
  }
  // function define here!! thats fine  
}

export default App;

