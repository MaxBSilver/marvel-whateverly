import React, { Component } from 'react'
export class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleInfo: false
    }
  }

  showCardInfo = () => {
    this.setState({toggleInfo: !this.state.toggleInfo})
  }

  //INVOKE THIS WHEN THEY FAVORITE THIS PHOTO
  toggleFavorite = () => {
    let storedCopy = JSON.parse(localStorage.getItem('marvelous')) || [];
    this.props.card.favorite = !this.props.card.favorite;
    if (storedCopy.find(el => el.id === this.props.card.id) === undefined) {
      storedCopy.push(this.props.card);
    } else if (this.props.card.favorite === false) {
      storedCopy.splice(storedCopy.indexOf(el => el.id === this.props.card.id), 1);
    }
    localStorage.setItem('marvelous', JSON.stringify(storedCopy));
    this.props.updateFavorites();
  }

  render() {
    return (

      (<article className='card' onClick={this.showCardInfo}>
      <div className ='card-positioning'>
        <img src={this.props.card.img} 
          alt={`${this.props.card.title}`} 
          width="200px"/>
        { this.state.toggleInfo && 
          <div>
            <a target="blank" href={this.props.card.link} >{this.props.card.link}</a>
          </div> }
          <h3>{this.props.card.title}</h3>
          <button type='button' onClick={this.toggleFavorite}>FAVORITEEEE</button>
          <button type='button' >Show More</button>
          </div>
      </article>)
    )
  }
}

export default Card
