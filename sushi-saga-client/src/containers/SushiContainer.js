import React, { Fragment } from 'react'
import Sushi from '../components/Sushi'

const renderSushis = (props)=> props.sushis.map(sushi => <Sushi eatSushi={props.eatSushi} key={sushi.id} eaten={props.eaten.includes(sushi.id)} sushi={sushi} />)

const SushiContainer = (props) => {
  return (
  	<Fragment>
	  	<div className="belt">{renderSushis(props)}</div>
	  	<button id="more-sushi" onClick={props.fetchSushi}>More Sushi!</button>
  	</Fragment>
  )
}

export default SushiContainer