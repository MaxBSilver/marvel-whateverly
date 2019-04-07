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
       <div className ='card-positioning'>
        <img src={this.props.card.img} 
          alt={`${this.props.card.title}`} 
          onClick={this.showCardInfo}/>
        { this.state.toggleInfo && <div><a target="blank" href={this.props.card.link} >{this.props.card.link}</a></div> }
          <h3>{this.props.card.title}</h3>
          </div>
      </article>)
    )
  }
}

export default Card
