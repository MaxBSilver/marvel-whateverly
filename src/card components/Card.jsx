
import React, { Component } from 'react'
export class ShowMoreCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleInfo: false
    }
  }

  showCardInfo = event => {
    this.setState({toggleInfo: !this.state.toggleInfo})
  }

  render() {
    return (
      (<article>
        <h3>{this.props.card.title}</h3>
        <img src={this.props.card.img} 
          alt={`${this.props.card.title}`} 
          width="200px"
          onClick={this.showCardInfo}/>
        { this.state.toggleInfo && <div>{this.props.card.link}</div> }
      </article>)
    )
  }
}

export default ShowMoreCard
