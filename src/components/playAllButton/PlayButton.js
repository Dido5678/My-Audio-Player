import React, { useState} from 'react'; 
import "./playButton.css";
import { Link } from 'react-router-dom';


export default function PlayButton ({ song }) {
    const [isPopupOpen, setPopupOpen] = useState(false);
  
    const handlePlayClick = () => {
      setPopupOpen(!isPopupOpen);
    };
  
    return (
      <div className='open-window'>
        {song.icons.img[0].src && <img src={song.icons.img[0].src} alt="play icon" onClick={handlePlayClick}/>}
              
        {/* Popup window */}
        {isPopupOpen && (
          <div className='open-window_box'
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: '500px',
              height: '650px',
              transform: 'translate(-50%, -50%)',
              padding: '10px',
              background: 'rgb(30, 42, 62)',
              border: '1px solid rgb(30, 42, 62)',
              borderRadius: '30px',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
              zIndex: 9999,
            }}
          >
              <div className='open-window_context'>  
                <div className='open-window_list'>  
                  <button className="open-window_btn" onClick={handlePlayClick} aria-label="open new window">
                    <img className='open-window_grey' src="../icons/close.png" alt="close" />
                  </button>
                  <div className='open-window_item'>
                    <div className='open-window_box'>
                        <img src={song.links.images[0].url} className='open-window_img' alt="foto author" />
                    </div>
                    <div className='open-window_box_2'>
                        <div className='open-window_name'>{song.name}</div>
                        <div className='open-window_author'>{song.author}</div>
                        <div className='open-window_audio'>
                          <audio controls>
                            <source src={song.audioUrl} />
                          </audio>
                        </div>
                        <div className='open-window_url'>
                          <Link to={song.url}>{song.url}</Link></div>
                      </div>
                      </div>
                </div>
              </div>
          </div>
        )}
      </div>
    );
  };