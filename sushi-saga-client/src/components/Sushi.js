import React from 'react'

class Sushi extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sushiEaten: false
    }
  }

  render() {
    console.log('Sushi props:', this.props)

    return (
      <div className="sushi">
        <div 
          className="plate"
          onClick={() => this.props.eatSushi(this.props.sushi)}>
          {this.props.sushi.ate ? null :
            <img
              src={this.props.sushi.img_url}
              alt='Fresh sushi!'
              width="100%"
            />}
        </div>
        <h4 className="sushi-details">
          {this.props.sushi.name} - ${this.props.sushi.price}
        </h4>
      </div>
    )
  }

}

export default Sushi