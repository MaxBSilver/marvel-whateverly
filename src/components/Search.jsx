import React, { Component } from 'react'
import Card from '../card components/Card'
export class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }

  }
  render() {
    return (
      <Card movies={this.props.movies} comics={this.props.comics}/>
    )
  }
}

export default Search
