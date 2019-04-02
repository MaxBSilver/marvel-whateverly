import React, { Component } from 'react';
import ShowLessCard from './ShowLessCard';
import ShowMoreCard from './ShowMoreCard';
export class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleInfo: false
    }
  }

  handleChange = event => {
    this.setState({toggleInfo: !this.state.toggleInfo})
  }

  render() {
    const {movies, comics} = this.props;
    console.log('banner: ', this.props.movies)
    return (
      <article className="cardContainer">
        <ShowMoreCard movies={movies} comics={comics}/>
      </article>
    )
  }
}

export default Card
