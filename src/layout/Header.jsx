import React, { Component } from 'react';
import Search from '../components/Search';
import Filter from '../components/Filter'
import CardContainer from '../card components/CardContainer';

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
        <Filter storeRendered={this.props.storeRendered} comics={this.props.comics} movies={this.props.movies}/>
      </header>
    )
  }
}
