import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'


const SushiContainer = (props) => {


  return (
    
    <Fragment>
      <div className="belt">
        { props.allSushi.map(sushi => <Sushi eachSushi={sushi} callBack={props.eatenCallBack} eaten={props.eaten.includes(sushi.id)}/>)}
        <MoreButton moreFunc={props.moreFunc} />
      </div>
    </Fragment>
  )
}
// isClicked={props.eaten}

export default SushiContainer;