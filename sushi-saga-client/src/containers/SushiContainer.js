import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const renderSushis = (props)=> props.sushis.map(sushi => <Sushi eatSushi={props.eatSushi} key={sushi.id} eaten={props.eaten.includes(sushi.id)} sushi={sushi} />)

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {renderSushis(props)}
        
        { /* <MoreButton moreSushi={props.moreSushi} /> */ }
        <button onClick={props.moreSushi}>More sushi!</button>
      </div>
    </Fragment>
  )
}

export default SushiContainer