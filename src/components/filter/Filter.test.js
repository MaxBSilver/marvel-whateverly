import React from 'react';
import ReactDOM from 'react-dom';
import Filter from './Filter';
import { shallow } from 'enzyme';

describe('Filter', () => {
  let wrapper;

  let mockMovies = {
    "title": "Deadpool",
    "releaseYear": 2016,
    "directors": ["Tim Miller"],
    "rating": "R",
    "stars": ["Ryan Reynolds", "Morena Baccarin", "T.J. Miller", "Ed Skrein", "Brianna Hildebrand"],
    "imdbRating": 8,
    "characters": ["Deadpool", "Negasonic Teenage Warhead", "Ajax", "Colossus"],
    "basedOn": ["Deadpool Vol. 1 #1"],
    "link": "https://www.imdb.com/title/tt1431045/",
    "img": "https://images-na.ssl-images-amazon.com/images/I/51Gh9OaWVcL.jpg",
    "id": 11,
    "favorite": false
  }

  let mockComics = {
    "title": "Civil War",
    "publishDate": 2006,
    "writers": ["Mark Millar"],
    "pencillers": ["Steve McNiven"],
    "inkers": ["Dexter Vines"],
    "letterers": ["Chris Eliopoulos"],
    "colorists": ["Morry Hollowell"],
    "editors": ["Molly Lazer", "Aubrey Sitterson", "Andy Schmidt", "Tom Brevoort"],
    "characters": ["Iron Man", "Spider-Man", "Doctor Strange", "Luke Cage", "Mister Fantastic", "Henry Pym", "Captain America", "Black Panther"],
    "adapted": true,
    "summary": "After a huge number of civilian lives lost, the government tries to enact The Superhero Registration Act, an authoritarian law where all heroes will have to register with the government. Some heroes, like Iron Man, are in favor of the law while others, like Captain America, are not.",
    "link": "https://marvel.fandom.com/wiki/Civil_War_(Event)",
    "img": "https://vignette.wikia.nocookie.net/marveldatabase/images/0/0f/Civil_War_Vol_1_1_Turner_Variant.jpg/revision/latest?cb=20070524065830",
    "id": 15,
    "favorite": false
  }

  beforeEach(() => {
    wrapper = shallow(
      <Filter movies={mockMovies} comics={mockComics}/>
    )
  });

  it('should have a proper default state', () => {
    expect(wrapper.state()).toEqual( {movies: false, comics: false} );
  });

  it('should match the snapshot with all the data passed in', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it.skip('should filter comics', () => {
    const e = { target: { name: 'comics' } }
    expect(wrapper.state()).toEqual( {comics:false, movies: false} )
    wrapper.find('#comics').simulate('click', { preventDefault: () => { target: { value: "comics"} } } )
    expect(wrapper.state()).toEqual( { comics:true, movies: false } )
  });

})