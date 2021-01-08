import { GetStaticProps } from 'next';
import React from 'react';
import Link from 'next/link'

import styles from '../styles/Search.module.css';
import SubHeader from './components/SubHeader/SubHeader';

export default function Search({ videos }){
  return(
    <div className={styles.container}>
      <header className={styles.header}>
        <h2>Your Dirbbox</h2>
        <img src="/images/options.png" alt="More Options" width={15} height={3}/>
      </header>
      <SubHeader/>
      <input type="text" name="search" id="" placeholder="Search Folder"/>
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
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch("http://localhost:3000/api/tutorials");
  const data = await response.json();

  return{
    props: {
      videos: data,
    },
    revalidate: 10
  }
};