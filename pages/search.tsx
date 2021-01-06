import React from 'react';

import styles from '../styles/Search.module.css';
import SubHeader from './components/SubHeader/SubHeader';

export default function Search(){
  return(
    <div className={styles.container}>
      <header className={styles.header}>
        <h2>Your Dirbbox</h2>
        <img src="/images/options.png" alt="More Options" width={15} height={3}/>
      </header>
      <input type="text" name="search" id="" placeholder="Search Folder"/>
      
      <SubHeader/>
    </div>
  )
}