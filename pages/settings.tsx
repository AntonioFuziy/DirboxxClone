import React from 'react';

import styles from '../styles/Settings.module.css';

import { FormCheck } from 'react-bootstrap';

export default function Settings(){
  return(
    <div className={styles.container}>
      <header className={styles.header}>
        <img src="/images/Vector.png" alt="Back"/>
      </header>
      <div className={styles.settings}>
        <h1 className={styles.title}>Settings</h1>
        <p className={styles.options}>Add Account</p>
        <p className={styles.options}>Change Password</p>
        <p className={styles.options}>Change Language</p>
        <p className={styles.options}>Upgrade Plan</p>
        <p className={styles.options}>Multiple Account</p>
        <div className={styles.advanced}>
          <h4>Enable Sync</h4>
          <FormCheck 
              type="switch"
              id="custom-switch"
          />
        </div>
        <div className={styles.advanced}>
          <h4>Enable 2 Step Verification</h4>
            <FormCheck 
              type="switch"
              id="custom-switch"
            />
        </div>
      </div>
    </div>
  )
}