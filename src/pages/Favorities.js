import React, { useState, useEffect } from 'react';
import './favorities.css';
import songData from '../data/song.json';
import { Link } from 'react-router-dom';


export default function Favorities() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    setSongs(songData.slice(0, 6));
  }, []);


  return (
    <div className='favorities'>
      <div className='favorities-container container'>
      <div>
      <Link to={'/'} className='favorities-home'>HOME</Link>
          <h2 className='favorities-title'>ALL SONGS </h2>
          {/* <div> </div> */}
          
            <div className='favorities-list'>  
             {songs.map((song) => (
                <div key={song.id} className='favorities-item'>
                  <div className='favorities-box'>
                    <img src={song.links.images[0].url} className='favorities-img' alt="video" />
                  </div>
                      <div className='favorities-box_2'>
                      <div className='favorities-name'>{song.name}</div>
                      <div className='favorities-author'>{song.author}</div>
                      <audio controls className='favorite-play_btn'>
                        <source src={song.audioUrl} />
                      </audio>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          <div>
        </div>
      </div>
    </div>
  );
}










