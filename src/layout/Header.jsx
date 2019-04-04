import React, { Component } from 'react';
import Search from '../components/Search';
import Filter from '../components/Filter'

export default class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
  }

  render() {
    return (
      <header className='Header'>
        <Search data ={this.props.combined}/>
        <Filter rendered={this.props.rendered} comics={this.props.comics} movies={this.props.movies}/>
      </header>
    )
  }
}
