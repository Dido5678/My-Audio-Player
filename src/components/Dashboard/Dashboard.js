import React, { useState } from 'react'; 
import './dashboard.css';
import songData from '../../data/song.json';
// import _ from "lodash";


export default function Dasboard() {
  const [isClicked, setIsClicked] = useState(false);
  const [playAllClicked, setPlayAllClicked] = useState(true);


  // PLAY ALL
  const handleButtonClick = () => {
    setIsClicked(!isClicked);
    console.log(!isClicked);
  };
  // ADD ALL
    const handlePlayAllClick = () => {
    setPlayAllClicked(!playAllClicked);
    console.log(!playAllClicked);
  };

 
// RANDOM BUTTON
  const handleRandomllClick = () => {
    const _ = require('lodash');
    const randomIndex = _.random(0, songData.length - 1);
    const selectedSong = songData[randomIndex];
    console.log(selectedSong);
  };


  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
  
    const songs = document.querySelectorAll(".songList-row");
    const songsList = document.querySelector(".songList-block");
  
    songs.forEach(song => {
      const songName = song.querySelector(".songList-song_name").textContent.toLowerCase();
      const songAuthor = song.querySelector(".songList-song_author").textContent.toLowerCase();

      if (songName.includes(searchTerm)) {
        songsList.prepend(song);
        console.log(song);
      }
      if (songAuthor.includes(searchTerm)) {
        songsList.prepend(song);
        console.log(song);
      }
    });
  };
  


  return (
    <div>
      <div className='list-dashboard container'>
        <div className='list-button_one'>
            <button className={`list-button_1 ${isClicked ? 'clicked' : ''}`} 
            onClick={handleButtonClick} aria-label="play all music">
              <img className='list-play' src='./icons/play_60.png' alt='play' />
              Play All
            </button>
            <button
              className={`list-button_2 ${isClicked ? 'clicked' : ''}`}
              onClick={handleButtonClick} aria-label="play all music">
              <img className='list-sortBD' src="./icons/sort-down.png" alt="sort" />
            </button>
        </div>
        <div className='list-button_two'>
            <button className={`list-button_3 ${!playAllClicked ? 'clicked' : ''}`}
              onClick={handlePlayAllClick} aria-label="add all music">
              <img className='list-plus' src='./icons/plus.png' alt='plus' />
            Add All
            </button>
            <button className={`list-button_4 ${!playAllClicked ? 'clicked' : ''}`}
              onClick={handlePlayAllClick} aria-label="add all music">
              <img className='list-sortBD' src="./icons/sort-down.png" alt="sort" />
            </button>
        </div>
            <button className='list-button_4' onClick={handleRandomllClick} aria-label="random music">
              <img className='list-sort' src='./icons/sort.png' alt='' />Track Number...<img src="./icons/sort-down.png" alt="down" />
            </button>
        <div className='list-filter_box'>
            <img className='list-filter_icon' src='./icons/search.png' alt="filter" />
            <input
              className='list-filter'
              type="search"
              placeholder='search'
              onInput={handleSearch}
              aria-label="Enter search term"
            />
        </div>
      </div>
    </div>
  );
}