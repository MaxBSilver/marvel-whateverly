import React, { Component } from 'react'

export class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleInfo: false,
      favorited: false
    }
  }

  showCardInfo = () => {
    this.setState({toggleInfo: !this.state.toggleInfo})
  }

  toggleFavorite = () => {
    let storedCopy = JSON.parse(localStorage.getItem('marvelous')) || [];
    this.props.card.favorite = !this.props.card.favorite;
    if (storedCopy.find(el => el.id === this.props.card.id) === undefined) {
      storedCopy.push(this.props.card);
    } else if (this.props.card.favorite === false) {
      storedCopy.splice(storedCopy.indexOf(el => el.id === this.props.card.id), 1);
    }
    localStorage.setItem('marvelous', JSON.stringify(storedCopy));
    this.setState({favorited : !this.state.favorited})
  }

  isFavorited = () => {
    let storedCopy = JSON.parse(localStorage.getItem('marvelous')) || [];
    const aFavorite = storedCopy.some(card => card.id === this.props.card.id);
    return aFavorite;
  }

  stanLeeApproved = () => {
    let approved;
    if(this.props.card.writers && this.props.card.editors) {
      approved = this.props.card.writers.concat(this.props.card.editors)
        .includes('Stan Lee')
          ? true
          : false;
    }
    return approved;
  }

  render() {
    const cardInfo = 
    this.props.card.imdbRating
      ? <article className='popup-container'>
          <p>Released: {this.props.card.releaseYear}</p>
          <p>Characters: {this.props.card.characters.join(' - ')}</p>
          <p>{this.props.card.writer}</p>
          <p>Director(s): {this.props.card.directors ? this.props.card.directors.join(' - ') : 'N/A'}</p>
          <p>Based On: {this.props.card.basedOn}</p>
          <p>Stars: {this.props.card.stars.join(' - ')}</p>
          <p>IMDB Rating: {this.props.card.imdbRating}</p>
          <a target="blank" href={this.props.card.link} >read the wiki</a>
        </article>
      : <article className='popup-container'>
          <p>Released: {this.props.card.publishDate}</p>
          <p>Characters: {this.props.card.characters.join(' - ')}</p>
          <p>Writers: {this.props.card.writers.join(' - ')}</p>
          <p>Pencillers: {this.props.card.pencillers ? this.props.card.pencillers.join(' - ') : 'N/A'}</p>
          <p>Letterers: {this.props.card.letterers ? this.props.card.letterers : 'N/A'}</p>
          <p>Inkers: {this.props.card.inkers ? this.props.card.inkers.join(' - '): 'N/A'}</p>
          <p>Colorists: {this.props.card.colorists ? this.props.card.colorists.join(' - '): 'N/A'}</p>
          <p>Editors: {this.props.card.editors ? this.props.card.editors.join(' - ') : 'N/A'}</p>
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
            {this.stanLeeApproved() && <img src="https://media.customon.com/unsafe/600x600/img.customon.com/design/600/600/ffffff/40207/25b4041ed0a2418e9a95057a96ecd333.png.jpg" alt="Stan Lee Foto" className="stan-lee-approved" />}
          
          </div>
          <div className="info-container">
              <h3>{this.props.card.title}</h3>
            <div className="button-container">
              <button 
                type='button' 
                onClick={this.toggleFavorite}
                className={this.isFavorited() ? 'favorited-btn' : ''} >
                Favorite
              </button>
              <button type='button' onClick={this.showCardInfo}>Show More</button>
            </div>
          </div>
        </div>
      </article>)
  }
}

export default Card
