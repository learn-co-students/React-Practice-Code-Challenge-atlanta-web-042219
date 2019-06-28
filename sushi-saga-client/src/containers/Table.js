import React, { Fragment } from 'react'

const Table = (props) => {

  // const renderPlates = (array) => {
  //   return array.map((x, index) => {
  //     return <div className="empty-plate" style={{ top: -7 * index }}/>
  //   })
  // }

  const renderPlates = (array) => array.map( (sushi, index) => <div className="empty-plate" key={index} style={{ top: (-10 * index), left: (Math.floor(Math.random()*(320-300) + 300)) }}/>)

  return (
    <Fragment>
      <h1 className="remaining">
        You have: ${props.wallet} remaining!
      </h1>
      <div className="table">
        <div className="stack">
          { renderPlates(props.eaten) }
        </div>
      </div>
    </Fragment>
  )
}

export default Table