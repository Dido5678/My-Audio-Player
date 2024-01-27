
import React from 'react';
import "./index.css";


 export default function Cover() {
 
   return (
     <div className="cover-block">
        <div className="cover-list">
          <div>
              <img className='cover-image rotate' src="https://pngimg.com/uploads/vinyl/vinyl_PNG107.png" alt="cd for songs" />
          </div>
          <audio className='cover-song_audio' controls aria-label="play music">
              <source src=""/>
          </audio>      
        </div>
     </div>
   );
 }

































// import React, { useState, useEffect, useRef } from 'react';
// import "./audioPlayer.css";
// import Controls from "./controls";
// import ProgressCircle from "./progressCircle";
// import WaveAnimation from "./waveAnimation";
// import { useLocation } from "react-router-dom";
// // import songData from '../../data/song.json';

// export default function AudioPlayer({ currentIndex, setCurrentIndex, total }) {
//   const location = useLocation();
//   console.log(location);

//   const [isPlaying, setIsPlaying] = useState(false);
//   const [trackProgress, setTrackProgress] = useState(0);

//   const audioRef = useRef(new Audio());
//   const intervalRef = useRef();
//   const isReady = useRef(false);

//   const currentTrack = total[currentIndex];
//   const artists = currentTrack?.songs.map((song) => song.name);

//   const audioSrc = currentTrack?.audioUrl;
//   const { duration } = audioRef.current;
//   const currentPercentage = duration ? (trackProgress / duration) * 100 : 0;

//   useEffect(() => {
//     setTrackProgress(audioRef.current.currentTime);

//     if (isReady.current) {
//       audioRef.current.play();
//       setIsPlaying(true);
//       startTimer();
//     } else {
//       isReady.current = true;
//     }

//     return () => {
//       audioRef.current.pause();
//       clearInterval(intervalRef.current);
//     };
//   }, [currentIndex]);

//   const startTimer = () => {
//     clearInterval(intervalRef.current);

//     intervalRef.current = setInterval(() => {
//       if (audioRef.current.ended) {
//         handleNext();
//       } else {
//         setTrackProgress(audioRef.current.currentTime);
//       }
//     }, 1000);
//   };

//   const handlePlay = () => {
//     if (isReady.current && audioRef.current) {
//       const promise = audioRef.current.play();

//       if (promise !== undefined) {
//         promise.then(() => {
//           setIsPlaying(true);
//           startTimer();
//         }).catch(error => {
//           console.error('Play failed:', error);
//         });
//       }
//     }
//   };

//   useEffect(() => {
//     document.addEventListener('click', handlePlay);

//     return () => {
//       document.removeEventListener('click', handlePlay);
//     };
//   }, [isPlaying]);

//   const handleNext = () => {
//     if (currentIndex < total.length - 1) {
//       setCurrentIndex(currentIndex + 1);
//     } else {
//       setCurrentIndex(0);
//     }
//   };

//   const handlePrev = () => {
//     if (currentIndex - 1 < 0) {
//       setCurrentIndex(total.length - 1);
//     } else {
//       setCurrentIndex(currentIndex - 1);
//     }
//   };

//   const addZero = (n) => (n > 9 ? "" + n : "0" + n);

//   return (
//     <div className="player-body_block">
//       <div className="player-body_prev">
//         <ProgressCircle
//           percentage={currentPercentage}
//           isPlaying={isPlaying}
//           image={currentTrack?.images[0]?.url}
//           size={300}
//           color="#C96850"
//         />
//       </div>
//       <div className="player-body_next">
//         <p className="song-title">{currentTrack?.name}</p>
//         <p className="song-artist">{artists?.join(" | ")}</p>
//         <div className="player-right-bottom">
//           <div className="song-duration">
//             <p className="duration">0:{addZero(Math.round(trackProgress))}</p>
//             <WaveAnimation />
//             <p className="duration">0:30</p>
//           </div>
//           <Controls
//             isPlaying={isPlaying}
//             setIsPlaying={setIsPlaying}
//             handleNext={handleNext}
//             handlePrev={handlePrev}
//             total={total}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }






















// import React, { useState, useEffect, useRef } from 'react';
// import "./audioPlayer.css";
// import Controls from "./controls";
// import ProgressCircle from "./progressCircle";
// import WaveAnimation from "./waveAnimation";
// import { useLocation } from "react-router-dom";
// import songData from '../../data/song.json';



// export default function AudioPlayer({
//   currentTrack,
//   currentIndex,
//   setCurrentIndex,
//   total,
// }) {
// const location = useLocation();console.log(location);
//   const [songs, setSongs] = useState([]);
//   const [playlists, setPlaylists] = useState([]);
//   const [isPlaying, setIsPlaying] = useState(false);


 

 

//   useEffect(() => {
//     setPlaylists(songData);
//     // console.log(songData);
//   }, []);   


  


  


//   // const location = useLocation();
//   // console.log(location);
  
//   const [trackProgress, setTrackProgress] = useState(0);
//   const audioSrc = total[currentIndex]?.track.preview_url;

//   // const audioRef = useRef(new Audio(total[0]?.track.preview_url));
//   const audioRef = useRef(new Audio(audioSrc));
//   const intervalRef = useRef();
//   const isReady = useRef(false);
//   const { duration } = audioRef.current;
//   const currentPercentage = duration ? (trackProgress / duration) * 100 : 0;

//   // console.log(currentTrack);
//    console.log(currentIndex);

//   const startTimer = () => {
//     clearInterval(intervalRef.current);

//     intervalRef.current = setInterval(() => {
//       if (audioRef.current.ended) {
//         handleNext();
//       } else {
//         setTrackProgress(audioRef.current.currentTime);
//       }
//     }, 1000);
//   };

//   useEffect(() => {
//     if (audioRef.current.src) {
//       if (isPlaying) {
//         if (audioRef.current.paused) {
//           audioRef.current.play().then(() => {
//             startTimer();
//           });
//         } else {
//           startTimer();
//         }
//       } else {
//         clearInterval(intervalRef.current);
//         audioRef.current.pause();
//       }
//     } else {
//       if (isPlaying) {
//         audioRef.current = new Audio(audioSrc);
//         audioRef.current.play().then(() => {
//           startTimer();
//         });
//       } else {
//         clearInterval(intervalRef.current);
//         audioRef.current.pause();
//       }
//     }
//   }, [isPlaying]);
  
//  //  WORK PLAYER
//  const handlePlay = () => {
//   // Ensure that audio playback is initiated in response to a user gesture
//   if (isReady.current && audioRef.current) {
//     const promise = audioRef.current.play();

//     if (promise !== undefined) {
//       promise.then(() => {
//         setIsPlaying(true);
//         startTimer();
//       }).catch(error => {
//         console.error('Play failed:', error);
//       });
//     }
//   }
// };

// // DONT WORK PLAYER
// // const handlePlay = () => {
// //   // Ensure that audio playback is initiated in response to a user gesture
// //   if (isReady.current) {
// //     if (audioRef.current.paused) {
// //       audioRef.current.play().then(() => {
// //         setIsPlaying(true);
// //         startTimer();
// //       });
// //     } else {
// //       audioRef.current.pause();
// //       setIsPlaying(false);
// //       clearInterval(intervalRef.current);
// //     }
// //   }
// // };

// useEffect(() => {
//   // ... (other useEffect code)

//   // Handle play/pause on user interaction
//   document.addEventListener('click', handlePlay);

//   return () => {
//     // Clean up event listener
//     document.removeEventListener('click', handlePlay);
//   };
// }, [isPlaying]);


//   useEffect(() => {
//     audioRef.current.pause();
//     audioRef.current = new Audio(audioSrc);

//     setTrackProgress(audioRef.current.currentTime);

//     if (isReady.current) {
//       audioRef.current.play();
//       setIsPlaying(true);
//       startTimer();
//     } else {
//       isReady.current = true;
//     }
//   }, [currentIndex]);

//   useEffect(() => {
//     return () => {
//       audioRef.current.pause();
//       clearInterval(intervalRef.current);
//     };
//   }, []);

//   const handleNext = () => {
//     if (currentIndex < total.length - 1) {
//       setCurrentIndex(currentIndex + 1);
//     } else {
//       setCurrentIndex(0);
//     }
//   };

//   const handlePrev = () => {
//     if (currentIndex - 1 < 0) {
//       setCurrentIndex(total.length - 1);
//     } else {
//       setCurrentIndex(currentIndex - 1);
//     }
//   };

//   const addZero = (n) => (n > 9 ? "" + n : "0" + n);

//   const artists = currentTrack?.album?.artists.map((artist) => artist.name);


//   return (
//     <div className="player-body_block">
//       <div className="player-body_prev">
//         <ProgressCircle
//           percentage={currentPercentage}
//           isPlaying={isPlaying}
//           image={currentTrack?.album?.images[0]?.url}
//           size={300}
//           color="#C96850"
//         />
//       </div>
//       <div className="player-body_next">
//       {playlists.map((playlist) => (<div>{playlist.name}</div> 
//        ))}
//         <p className="song-title">{currentTrack?.name}</p> 
//          <p className="song-artist">{artists?.join(" | ")}</p>
//         <div className="player-right-bottom">
//           <div className="song-duration">
//             <p className="duration">0:{addZero(Math.round(trackProgress))}</p>
//             <WaveAnimation />
//             <p className="duration">0:30</p>
//           </div>
//           <Controls
//             isPlaying={isPlaying}
//             setIsPlaying={setIsPlaying}
//             handleNext={handleNext}
//             handlePrev={handlePrev}
//             total={total}
//           />
//         </div>
//       </div>
//     </div>
//   );
//   };
 




  






