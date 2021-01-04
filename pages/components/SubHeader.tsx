import React from 'react';

import styles from './styles/SubHeader.module.css';

export default function SubHeader(){
  return(
    <header className={styles.subHeader}>
      <h4>My Folders</h4>
      <div className={styles.actions}>
        <img src="/images/add.png" alt="Add" width={11} height={11}/>
        <img src="/images/settings.png" alt="Settings" width={18} height={12}/>
        <img src="/images/forward.png" alt="Forward" width={6} height={12}/>
      </div>
    </header>
  );
}