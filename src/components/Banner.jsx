import React, { Component } from 'react'
import Search from './Search';


export class Banner extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    console.log(this.props)
    return (
      <Search movies={this.props.movies} comics={this.props.comics}/>
    )
  }
}

export default Banner
