import React, { Component } from 'react'
export class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleInfo: false
    }
  }

  showCardInfo = () => {
    this.setState({toggleInfo: !this.state.toggleInfo})
  }

  render() {
    return (
      (<article className='card'>
        <img src={this.props.card.img} 
          alt={`${this.props.card.title}`} 
          width="200px"
          onClick={this.showCardInfo}/>
        { this.state.toggleInfo && <div><a target="blank" href={this.props.card.link} >{this.props.card.link}</a></div> }
          <h3>{this.props.card.title}</h3>
      </article>)
    )
  }
}

export default Card
