import React, { Component } from 'react';
import Card from '../card/Card';

export class CardContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
      return (
        <section className='card-container'>
          { this.props.rendered.map(card => 
          <Card  
            key={card.id}
            card={card}
          />) }
        </section>
      )
  }
}

export default CardContainer
