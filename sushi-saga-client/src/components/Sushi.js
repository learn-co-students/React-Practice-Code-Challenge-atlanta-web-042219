import React from 'react'

const Sushi = (props) => {
  return (
    <div className="sushi">
      <div className="plate">
        { props.eaten ? null : <img onClick={(e)=>props.eatSushi(props.sushi)} src={props.sushi.img_url} id={props.sushi.id} width="100%" alt="Delicious sushi!" /> }
      </div>
      <h4 className="sushi-details">
        {props.sushi.name} - ${props.sushi.price}
      </h4>
    </div>
  )
}

export default Sushi