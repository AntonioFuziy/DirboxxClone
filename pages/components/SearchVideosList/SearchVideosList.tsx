import React from 'react';

import styles from './SearchVideosList.module.css';

export default function SearchVideosList({ videos }){
  return(
    <div className={styles.grid}>
      {
        videos.map((video) => (
          <a href={"/uniques/"+video.newLink}>
            <div className={styles.item}>
              <iframe src={"https://www.youtube.com/embed/"+video.newLink} className={styles.iframe} frameBorder="0" allowFullScreen></iframe>
              <div className={styles.text}>
                <h3>{video.title}</h3>
                <p className={styles.description}>{video.description}</p>
                <h4>{video.user}</h4>
                <div className={styles.likes}>
                  <div className={styles.likeSubcontent}>
                    <img src="/images/like2.svg" alt="Likes" className={styles.likeIcon}/>
                    <p>{video.likes}</p>
                  </div>
                  <div className={styles.likeSubcontent}>
                    <img src="/images/dislike2.svg" alt="Dislikes" className={styles.likeIcon}/>
                    <p>{video.dislikes}</p>
                  </div>
                </div>
              </div>
            </div>
          </a>
        ))
      }
    </div>
  )
}