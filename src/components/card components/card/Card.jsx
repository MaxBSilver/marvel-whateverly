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

  isFavorited = () => {
    let storedCopy = JSON.parse(localStorage.getItem('marvelous')) || [];
    const aFavorite = storedCopy.some(card => card.id === this.props.card.id);
    return aFavorite;
  }

  render() {
    const cardInfo = 
    this.props.card.imdbRating
      ? <article className='popup-container'>
          <p>Released: {this.props.card.releaseYear}</p>
          <p>Characters: {this.props.card.characters.join(' - ')}</p>
          <p>{this.props.card.writer}</p>
          <p>Director(s): {this.props.card.directors}</p>
          <p>Based On: {this.props.card.basedOn}</p>
          <p>About: {this.props.card.summary}</p>
          <a target="blank" href={this.props.card.link} >read the wiki</a>
        </article>
      : <article className='popup-container'>
          <p>Released: {this.props.card.publishDate}</p>
          <p>Characters: {this.props.card.characters.join(' - ')}</p>
          <p>{this.props.card.writer}</p>
          <p>Letterers: {this.props.card.letterers}</p>
          <p>Inkers: {this.props.card.inkers}</p>
          <p>Colorists: {this.props.card.colorists}</p>
          <p>Editors: {this.props.card.editors}</p>
          <p>Adapted: {this.props.card.adapted ? 'Yes' : 'No'}</p>
          <p>About: {this.props.card.summary}</p>
          <a target="blank" href={this.props.card.link} >read the wiki</a>
        </article>

    return (
      <article className='card'>
        <div className ='card-positioning'>
          <div className="image-container">
           <img src={this.props.card.img} 
            alt={`${this.props.card.title}`} />
            {this.state.toggleInfo && cardInfo}
          </div>
          <div className="info-container">
              <h3>{this.props.card.title}</h3>
            <div className="button-container">
              <button 
                type='button' 
                onClick={this.toggleFavorite}
                className={this.isFavorited() ? 'favorited-btn' : ''} >
                FAVORITE
              </button>
              <button type='button' onClick={this.showCardInfo}>Show More</button>
            </div>
          </div>
        </div>
      </article>)
  }
}

export default Card
