import React from 'react';
import Filter from '../components/filter/Filter';
import { shallow } from 'enzyme';

describe('Filter', () => {
  
  const mockStoreRendered = jest.fn();
  
  const mockSetSearchDataset = jest.fn();
  
  let wrapper;
  let mockSortData = [
    {mockNum: 5}, 
    {mockNum: 4}, 
    {mockNum: 3}, 
    {mockNum: 6}, 
    {mockNum: 7}, 
    {mockNum: 1}, 
    {mockNum: 2}
  ]
    
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
      <Filter movies={mockSortData} comics={mockComics} storeRendered={mockStoreRendered} setSearchDataset={mockSetSearchDataset} />
    )
  });

  it('should have a proper default state', () => {
    expect(wrapper.state()).toEqual( {movies: false, comics: false, favorites: false} );
  });

  it('should match the snapshot with all the data passed in', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should filter comics', () => {
    wrapper.setState( {comics: mockComics} )
    wrapper.instance().handleComics( { target: {id: 'comics'}, preventDefault: () => {} } )
    expect(wrapper.state('comics')).toEqual( false );
    wrapper.instance().handleComics( { target: {id: 'comics'}, preventDefault: () => {} } )
    expect(wrapper.state('comics')).toEqual( true );
    expect(mockStoreRendered).toHaveBeenCalled();
    expect(mockSetSearchDataset).toHaveBeenCalled();
  });

  it('should filter movies', () => {
    expect(wrapper.state()).toEqual( { comics: false, movies: false, favorites: false } )
    wrapper.setState( {comics: mockMovies} )
    wrapper.instance().handleMovies( { target: {id: 'movies' }, preventDefault: () => {} } )
    expect(wrapper.state()).toEqual( { comics: false, movies: true, favorites: false } );
  });

  it('should filter favorites', () => {
    expect(wrapper.state()).toEqual( { comics: false, movies: false, favorites: false } )
    wrapper.instance().handleFavorites( { target: {id: 'favorites' }, preventDefault: () => {} } )
    expect(wrapper.state()).toEqual( { comics: false, movies: false, favorites: true } );
  });

  it('should reset the search', () => {
    wrapper.instance().resetSearch()
    expect(mockSetSearchDataset).toHaveBeenCalled()
    expect(mockStoreRendered).toHaveBeenCalled()
    expect(wrapper.state()).toEqual( { comics: false, movies: false, favorites: false } );
  });

  it('should sort cards based on option', () => {
    wrapper.instance().setState({movies: true})
    wrapper.instance().sortCards({target: {value: 'mockNum'}})
    expect(mockStoreRendered).toHaveBeenCalledWith([
      {mockNum: 7}, 
      {mockNum: 6}, 
      {mockNum: 5}, 
      {mockNum: 4}, 
      {mockNum: 3}, 
      {mockNum: 2}, 
      {mockNum: 1}
    ])
  })
})