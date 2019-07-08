import React, { Fragment } from 'react'

let isClicked= false

const Sushi = (props) => {



  return (
    <div className="sushi">
      <div className="plate" 
           onClick={(e) => props.callBack(props.eachSushi)}>
        { 
          props.eaten ?
          //props.sushi.eaten
          // true ?
            null
          :
            <img src={props.eachSushi.img_url} alt=""  id={props.eachSushi.id}width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {props.eachSushi.name} - ${props.eachSushi.price}
      </h4>
    </div>
  )
}


export default Sushi;