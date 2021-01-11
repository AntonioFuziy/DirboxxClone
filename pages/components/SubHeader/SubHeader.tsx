import React from 'react';

import styles from './SubHeader.module.css';

export default function SubHeader(){
  return(
    <header className={styles.subHeader}>
      <h4>My Folders</h4>
      <div className={styles.actions}>
        <a className={styles.upload} href="/uploadTutorial">
          <p>Post</p>
          <img src="/images/upload.svg" alt="" width={15} height={15}/>
        </a>
      </div>
    </header>
  );
}