import React, { useState, useEffect } from 'react';
import './index.css';
import songData from '../../data/song.json';
import PlayButton from '../playAllButton/PlayButton';
import ShareButton from '../addAllButton/ShareButton';
import { Link } from 'react-router-dom';
import FavoritiesContainer from '../addAllButton/FavoritiesContainer';


export default function SongList() {
  const [songs, setSongs] = useState([]); 

  useEffect(() => {
    setSongs(songData.slice(0, 5));
  }, []);
 

  const handleButtonClick = (event) => {
  const doneElements = document.querySelectorAll(".songList-song_done");
    doneElements.forEach(element => {
        element.style.color = "red";
    });

    // Prevent the default button behavior, which might trigger form submission or page reload
    event.preventDefault();
    const allPlayImgs = document.querySelectorAll('.songList-data_first .songList-play-img')
    // Find the closest songList row to the button that was clicked
    const songListRow = event.target.closest('.songList-row');
    // Find the audio element within the songList row
    const audioElement = songListRow.querySelector('.songList-song_audio');
    // Find the cover audio element
    const coverAudioElement = document.querySelector('.cover-song_audio');
    // -webkit-media-controls-play-button
    // If both audio elements are found, transfer the src value
    if (audioElement && coverAudioElement) {
      const sourceElement = audioElement.querySelector('source');
      if (sourceElement) {
        // Transfer the src value
        coverAudioElement.src = sourceElement.src;
        // Start playback
        if (!event.currentTarget.classList.contains('active') && event.currentTarget) {
          allPlayImgs.forEach(img => img.classList.remove('active'))
          event.currentTarget.classList.add('active');
          coverAudioElement.play();
        } else {
          event.currentTarget.classList.remove('active');
          coverAudioElement.pause();
        }
      }
    } else {
      console.warn('Audio elements not found.');
    }
  };

  return (
    <>
      <div className='songList-container'>
        <div className='songList-thead'>
          <div className='songList-tr'>
            <div className='songList-one'></div>
            <div className='songList-song'>Song Name</div>
            <div className='songList-artist'>Artist Name</div>
            <div className='songList-track'>Track</div>
            <div className='songList-img'>image</div>
            <div className='songList-zero'></div>
          </div>
        </div>
        <div className='songList-block'>
          {songs.map((song) => (
            <React.Fragment key={song.id}>
              <div className='songList-row'>
                <div className='songList-data_first'>       
                    <PlayButton song={song} />
                    <img className='songList-play-img' src={song.icons.img[1].src} alt="play icon" onClick={handleButtonClick}/>
                </div>
                <div className='songList-song_name'>{song.name}</div>
                <div className='songList-song_author'>{song.author}</div>
                <div className='songList-song_audio-track'>
                  {song.id}
                  <audio className='songList-song_audio' style={{ display: "none" }} controls aria-label="play music">
                     <source src={song.audioUrl} />
                  </audio>
                </div>
                <div className='songList-song_image'>
                  <img src={song.links.images[0].url} className='songList-img' alt="foto artists" />
                </div>
                <div className='songList-song_more-options'>
                  <FavoritiesContainer song={song}/>
                  <img className="songList-song_done" src={song.buttons.but[1].src} alt="done" />
                  <ShareButton song={song} />
                  <Link to={'/favorites'}> 
                 <img className='songList-sort' src={song.buttons.but[3].src} alt="sort" />
                 </Link>
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
};


























