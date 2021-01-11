import React from 'react';

import styles from './Spinner.module.css';

export default function Spinner(){
  return(
    <div className={styles.spinnerContainer}>
      <img src="/images/loading2.svg" alt="Loading..." className={styles.spinner}/>
    </div>
  )
}