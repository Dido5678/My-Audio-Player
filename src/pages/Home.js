import React  from 'react';
import './home.css';
import Cover from '../components/cover/index';
import Dasboard from '../components/Dashboard/Dashboard';
import SongList from '../components/songList/index';
import SingleFileUploader from '../components/musicUploadForm/SingleFileUploader';



export default function Home () {

  return (
     <div className='home'>
       <div className='home-container'> 
            <Cover />
            <Dasboard />
            <SongList />
            <SingleFileUploader />
         </div>
     </div>
  );
};



