import React from 'react';

import styles from './SearchVideosList.module.css';

import Link from 'next/link';

export default function SearchVideosList({ videos }){
  return(
    <div className={styles.grid}>
      {
        videos.map((video) => (
          <Link href={"/uniques/"+video.newLink}>
            <div className={styles.item}>
              <iframe src={"https://www.youtube.com/embed/"+video.newLink} className={styles.iframe} frameBorder="0" allowFullScreen></iframe>
              <div className={styles.text}>
                <h3>{video.title}</h3>
                <p>{video.description}</p>
                <h4><p>{video.user}</p></h4>
                <div className={styles.likes}>
                  <p>{video.likes}</p>
                  <p>{video.dislikes}</p>
                </div>
              </div>
            </div>
          </Link>
        ))
      }
    </div>
  )
}