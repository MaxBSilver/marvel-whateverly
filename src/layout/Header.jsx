import React, { Component } from 'react';
<<<<<<< HEAD
import Search from '../components/Search';
import Filter from '../components/Filter'
import CardContainer from '../card components/CardContainer';
=======
import Search from '../components/search/Search';
import Filter from '../components/filter/Filter'
>>>>>>> 0661283de15041b4ceb7203ce991ba97e22ec9b7

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
