import React, { Component } from 'react';
import Card from '../card/Card';

export class CardContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleInfo: true,
      // allCards: Object.values(props.movies.movies).concat(Object.values(props.comics.comics)).sort(() => .5 - Math.random())
    }
  }

  handleChange = event => {
    this.setState({toggleInfo: !this.state.toggleInfo})
  }

  render() {
    let renderElements = this.state.toggleInfo
    ? this.state.allCards.slice(0, 10)
    : this.state.allCards;

    return (
      <section>
        <button onClick={this.handleChange} type="button">SHOW MORE</button>
        { renderElements.map(card => <Card  
        key={card.id}
        card={card}
        />) }
      </section>
    )
  }
}

export default CardContainer
