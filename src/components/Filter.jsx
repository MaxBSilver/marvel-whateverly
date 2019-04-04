import React, { Component } from 'react'

export class Filter extends Component {
  constructor() {
    super();
    this.state = {
      movies: false,
      comics: false
    }
  }

  handleComics = e => {
    e.preventDefault();
    e.target.id === 'comics'
      ? this.setState({comics: !this.state.comics})
      : this.setState({movies: false})
    if (this.state.movies) this.setState({movies: false});
    this.props.rendered.push(...[this.props.comics])
  }

  handleMovies = e => {
    e.preventDefault();
    e.target.id === 'movies'
      ? this.setState({movies: !this.state.movies})
      : this.setState({comics: false})
    if (this.state.comics) this.setState({comics: false});
    this.props.rendered.push(...[this.props.movies])
  }

  // object.values over current movies/comics, index 0
  // object.keys over that and map into a dropdown

  // filterData = () => {
  //   let val = Object.values(this.props.movies)
  //   val[0].map(v => {
  //     return <option>{v}</option>
  //   })
  // }

  // switch(true) {
  //   case this.state.movies:
  //   Object.values(this.props.movies)
  //     val[0].map(v => {
  //       return <option>{v}</option>
  //     })
  //     break;
  //   case this.state.comics:
  //     break;
  //   default:
  // }

  
  render() {

    let val = Object.values(this.props.movies)
    let dropDownMovies = Object.keys(val).map(v => {
    return (<option>{v}</option>)})
    let com = Object.values(this.props.comics)
    let dropDownComics = Object.keys(com).map(v => {
    return (<option>{v}</option>)})
              
    switch(true) {
      case this.state.movies:
      return (
            <div>
            <select>
              <option selected="selected">--Filter by--</option>
            {dropDownMovies}
            </select>
            </div>
            )
      break;
      case this.state.comics:
      return (
        <div>
        <select>
          <option selected="selected">--Filter by--</option>
        {dropDownComics}
        </select>
        </div>
        )
      break;
      default:
      // return false
    
      return (
      <form >
        <input onClick={this.handleComics} type="submit" value="Comics" id="comics"/>
        <input onClick={this.handleMovies} type="submit" value="Movies" id="movies"/>
      </form>
      )
    }
  }
}

export default Filter
