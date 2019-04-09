
import React from 'react';
import App from '../App';
import { shallow } from 'enzyme';


describe('App', () => {

  let mockMovie = {
    movie: {
    "title": "Spider-Man: Homecoming",
    "releaseYear": 2017,
    "directors": ["Jon Watts"],
    "rating": "PG13",
    "stars": ["Tom Holland", "Michael Keaton", "Jon Favreau", "Donald Glover", "Robert Downey Jr."],
    "imdbRating": 7.5,
    "characters": ["Spider-Man", "Iron Man", "Vulture"],
    "basedOn": ["Ultimate Spider-Man"],
    "link": "https://www.imdb.com/title/tt2250912/?ref_=nv_sr_2",
    "img": "https://vignette.wikia.nocookie.net/marveldatabase/images/4/4f/Spider-Man_Homecoming_poster_004.jpg/revision/latest?cb=20170524085936",
    "id": 9,
    "favorite": false
  }
}

  let mockComic = {
    comic: {
    "title": "House of M",
    "publishDate": 2005,
    "writers": ["Brian Michael Bendis"],
    "pencillers": ["Oliver Coipel"],
    "inkers": ["Tim Townsend"],
    "letterers": null,
    "colorists": ["Frank D'Armata"],
    "editors": null,
    "characters": ["Scarlet Witch", "Quicksilver", "Magneto", "Professor Xavier", "Captain America", "Emma Frost", "Doctor Strange"],
    "adapted": false,
    "summary": "Mutant Scarlet Witch suffers a breakdown and cannot control her powers. The Avengers quarrel on how to help her, some of them think there is no other way than to kill her, while others think they could control her magic. When they try to talk to her, she alters the reality of Earth and the lives of the heroes in it.",
    "link": "https://marvel.fandom.com/wiki/Earth-58163",
    "img": "https://vignette.wikia.nocookie.net/marveldatabase/images/6/67/Family_Magnus_%28Earth-58163%29_from_House_of_M_Vol_1_6_001.jpg/revision/latest/scale-to-width-down/700?cb=20061206101145",
    "id": 16,
    "favorite": false
  }
}

  let mockMedia = [{
  "title": "Spider-Man: Homecoming",
  "releaseYear": 2017,
  "directors": ["Jon Watts"],
  "rating": "PG13",
  "stars": ["Tom Holland", "Michael Keaton", "Jon Favreau", "Donald Glover", "Robert Downey Jr."],
  "imdbRating": 7.5,
  "characters": ["Spider-Man", "Iron Man", "Vulture"],
  "basedOn": ["Ultimate Spider-Man"],
  "link": "https://www.imdb.com/title/tt2250912/?ref_=nv_sr_2",
  "img": "https://vignette.wikia.nocookie.net/marveldatabase/images/4/4f/Spider-Man_Homecoming_poster_004.jpg/revision/latest?cb=20170524085936",
  "id": 9,
  "favorite": false
}, {
  "title": "House of M",
  "publishDate": 2005,
  "writers": ["Brian Michael Bendis"],
  "pencillers": ["Oliver Coipel"],
  "inkers": ["Tim Townsend"],
  "letterers": null,
  "colorists": ["Frank D'Armata"],
  "editors": null,
  "characters": ["Scarlet Witch", "Quicksilver", "Magneto", "Professor Xavier", "Captain America", "Emma Frost", "Doctor Strange"],
  "adapted": false,
  "summary": "Mutant Scarlet Witch suffers a breakdown and cannot control her powers. The Avengers quarrel on how to help her, some of them think there is no other way than to kill her, while others think they could control her magic. When they try to talk to her, she alters the reality of Earth and the lives of the heroes in it.",
  "link": "https://marvel.fandom.com/wiki/Earth-58163",
  "img": "https://vignette.wikia.nocookie.net/marveldatabase/images/6/67/Family_Magnus_%28Earth-58163%29_from_House_of_M_Vol_1_6_001.jpg/revision/latest/scale-to-width-down/700?cb=20061206101145",
  "id": 16,
  "favorite": false
}]

  let wrapper;

  beforeEach(() => {
    wrapper = shallow (
      <App movies={mockMovie} comics={mockComic}/>
    )
  });

  it('should have a proper default state', () => {
    expect(wrapper.state()).toEqual( {movies: [], comics: [], combined: [], rendered: []} )
  });

  it('should match the snapshot with all the data passed in', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should combine data', () => {
    expect(wrapper.state('combined')).toEqual( [] );
    wrapper.setState( {movies: mockMovie, comics: mockComic} )
    wrapper.instance().combineData();
    expect(wrapper.state('combined')).toHaveLength(2);
  });

  it('should store rendered media', () => {
    expect(wrapper.state('rendered')).toEqual( [] );
    wrapper.instance().storeRendered(mockMedia);
    expect(wrapper.state('rendered')).toHaveLength(2);
  });

})