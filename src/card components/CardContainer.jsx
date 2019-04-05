import React, { Component } from 'react';
import Card from './Card';

export class CardContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {

      return (
        <section>
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
