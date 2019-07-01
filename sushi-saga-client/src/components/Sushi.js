import React, { Fragment } from 'react'

const Sushi = (props) => {
  return (
    <div className="sushi">
      <div className="plate">
        {console.log(props.sushi)}
        {props.eaten ? null :
        <img onClick={(e) => props.eatSushi(props.sushi)} src={props.sushi.img_url} id={props.sushi.id} width="100%" alt=""/>
        }
      </div>
      <h4 className="sushi-details">
        {props.sushi.name} - ${props.sushi.price}
      </h4>
    </div>
  )
}

export default Sushi