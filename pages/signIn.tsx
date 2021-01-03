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
            <h2>Login to your account</h2>
            <input type="email" name="email" id="" className={styles.email} placeholder="Email"/>
            <input type="password" name="password" id="" className={styles.password} placeholder="Password"/>

            <div className={styles.options}>
            <p>Use Social Login</p>
            <div className={styles.images}>
                <Image src="/images/instagramLogo.png" width={17.9} height={17.9} className={styles.instagram}/>
                <Image src="/images/twitterLogo.png" width={18.93} height={15.38} className={styles.twitter}/>
                <Image src="/images/facebookLogo.png" width={10.07} height={18.63} className={styles.facebook}/>
            </div>
            </div>

            <button type="button" className={styles.signUp}>Login</button>
        </form>
      </div>
    </div>
  );
}