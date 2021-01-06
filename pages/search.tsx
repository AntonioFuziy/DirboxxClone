import axios from 'axios';
import React, { useEffect, useState } from 'react';

import styles from '../styles/Search.module.css';
import SubHeader from './components/SubHeader/SubHeader';

export default function Search(){
  const [videos, setVideos] = useState([])
  useEffect(() => {
    async function fetchData() {    
      const videos = await axios.get("https://dirboxx-clone.vercel.app/api/tutorials") 
      setVideos(videos.data)
      console.log(videos);
      return videos;
    }
    fetchData()

  }, [])
  return(
    <div className={styles.container}>
      <header className={styles.header}>
        <h2>Your Dirbbox</h2>
        <img src="/images/options.png" alt="More Options" width={15} height={3}/>
      </header>
      <SubHeader/>
      <input type="text" name="search" id="" placeholder="Search Folder"/>
      <div className={styles.centerGrid}>
        <div className={styles.grid}>
          {
            videos.map((video) => (
            <div className={styles.item}>
              <iframe src={"https://www.youtube.com/embed/"+video.link} className={styles.iframe} frameBorder="0" allowFullScreen></iframe>
              <h3>{video.title}</h3>
              <p>{video.description}</p>
            </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}