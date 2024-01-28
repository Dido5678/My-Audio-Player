// ShareButton.js
import React, { useState } from 'react';
import './shareButton.css';


const ShareButton = ({ song }) => {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const handleShareClick = () => {
    setPopupOpen(!isPopupOpen);
  };

  return (
    <div className='share'>
      <span onClick={handleShareClick} style={{ cursor: 'pointer' }}>
        {song.buttons.but[2] && <img src={song.buttons.but[2].src} alt="" />}
      </span>

      {/* Popup window */}
      {isPopupOpen && (
        <div className='share-window'
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '500px',
            height: '300px',
            transform: 'translate(-50%, -50%)',
            padding: '10px',
            background: '#fff',
            border: '1px solid #696969',
            borderRadius: '30px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            zIndex: 9999,
          }}
        >
            <h1 className='share-title'>Share this song</h1>
            <div className='share-context'>
                <a href="https://www.facebook.com/your-facebook-page" target="_blank" rel="noopener noreferrer">
                    <img src="../shareIcons/facebook.gif" alt="facebook"/>
                </a>
                <a href="https://www.instagram.com/your-instagram-account" target="_blank" rel="noopener noreferrer">
                    <img src="../shareIcons/instagram.gif" alt="instagram"/>
                </a>
                <a href="https://t.me/your-telegram-channel" target="_blank" rel="noopener noreferrer">
                    <img src="../shareIcons/telegram.gif" alt="telegram"/>
                </a>
                <a href="viber://chat?number=+1234567890" target="_blank" rel="noopener noreferrer">
                    <img src="../shareIcons/viber.gif" alt="viber"/>
                </a>
                <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                    <img src="../shareIcons/whatsapp.gif" alt="whatsapp"/>
                </a>
            </div>
          <button className='share-btn' onClick={handleShareClick} aria-label="open window">CLOSE 
            <img src="../shareIcons/close.png" alt=""/>
          </button>
        </div>
      )}
    </div>
  );
};

export default ShareButton;










