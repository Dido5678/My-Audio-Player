import React, { useState } from 'react';
import "./favoritiesContainer.css";
import songData from "../../data/song.json";

export default function FavoritiesContainer({ song }) {
  const [show, setShow] = useState(false);

  const handleFavoritesClick = (id) => {
    console.log(song);
    songData.forEach((item) => {
      if (item.id === id) {
        setShow(!show);
      }
    });
  };

  return (
    <div className='options'>
      <button onClick={() => handleFavoritesClick(song.id)}>
        <img src={song.buttons.but[0].src} alt="heart" />
      </button>
      {show ? (
        <div className='fav'>
          <div className='fav-list'>
            <div key={song.id} className='fav-item'>
              <button className="fav_btn" onClick={() => handleFavoritesClick(song.id)} aria-label="open new window">
                <img className='fav_grey' src="../icons/close.png" alt="close" />
              </button>
              <div className='favorities-box'>
                <img src={song.links.images[0].url} className='fav-img' alt="video" />
              </div>
              <div className='favorities-box_2'>
                <div className='fav-name'>{song.name}</div>
                <div className='fav-author'>{song.author}</div>
                <audio controls className='fav-play_btn'>
                  <source src={song.audioUrl} />
                </audio>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};


