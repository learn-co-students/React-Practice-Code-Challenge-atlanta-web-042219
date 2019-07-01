import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const renderSushi = (props) => props.sushis.map(sushi => 
  <Sushi 
    key={sushi.id} 
    sushi={sushi}
    eatSushi={props.eatSushi}
    eaten={props.eaten.includes(sushi.id)}
  />)

const SushiContainer = (props) => {
  
  return (
    <Fragment>
      <div className="belt">
        {renderSushi(props)} 
        <MoreButton fetchSushi={props.fetchSushi}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer