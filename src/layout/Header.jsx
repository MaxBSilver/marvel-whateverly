import React, { Component } from 'react';
import Search from '../components/search/Search';
import Filter from '../components/filter/Filter'

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
        <Search data ={this.props.combined} storeRendered={this.props.storeRendered}/>
        <Filter rendered={this.props.rendered} comics={this.props.comics} movies={this.props.movies}/>
      </header>
    )
  }
}
