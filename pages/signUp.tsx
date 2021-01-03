import React from 'react';

import styles from '../styles/SignUp.module.css';

import Image from 'next/image';
import Link from 'next/link';

export default function SignUp(){
  return(
    <div className={styles.container}>
      <Image src="/images/background.png" width={400} height={500}/>
      <div className={styles.main}>
        <Image src="/images/signIcon.png" width={171} height={189}/>
        <form action="" className={styles.form}>
            <h2>Create your account</h2>
            <input type="email" name="email" id="" className={styles.email} placeholder="Email"/>
            <input type="password" name="password" id="" className={styles.password} placeholder="Password"/>

            <button type="button" className={styles.signUp}>Sign Up</button>
        </form>
      </div>
    </div>
  );
}