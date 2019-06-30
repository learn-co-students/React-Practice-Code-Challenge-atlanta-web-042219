import React from 'react'

const plate = (key, index, xOffset=0) => <div className="empty-plate" key={key} style={{ top: (-10 * index), left: Math.floor(Math.random()*(320-300) + 300) + xOffset }} />

const renderPlates = (num) => {
  let plates = []
  let end = num

  if(num > 70) {
    for(let c = 70; c < num; c++)
      plates.push(plate(plates.length, c-70, 200))

    end = 70
  }
  if(num > 40) {
    for(let b = 40; b < end; b++)
      plates.push(plate(plates.length, b-40, -200))

    end = 40
  }
  for(let a = 0; a < end; a++)
    plates.push(plate(plates.length, a, 0))

  return plates
}

const Table = (props) => {
  return (
    <div className="table">
      <h2>{props.eaten.length} sushi eaten</h2>
      <div className="stack">{renderPlates(props.eaten.length)}</div>
    </div>
  )
}

export default Table
