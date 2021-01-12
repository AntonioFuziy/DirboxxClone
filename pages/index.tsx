import React, { useEffect, useState } from 'react';

import styles from '../styles/Sign.module.css';

import Link from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/client'

export default function Sign(){
  const [ session, loading ] = useSession()
  
  return(
    <div className={styles.container}>
      <img src="/images/background.png" className={styles.background}/>
      <div className={styles.main}>
        <img src="/images/signIcon.png" width={171} height={189}/>
        <div className={styles.text}>
          <p className={styles.welcome}>
            Welcome to
            <h2 className={styles.name}>Dirbbox</h2>
          </p>
          <p className={styles.description1}>Best cloud storage platform of all business and individuals to manage there data.</p>
          <p className={styles.description2}>Join For Free.</p>

          {loading && <>
            Loading...
          </>}
        </div>
        
      </div>
      <footer className={styles.footer}>
        
        {session && <>
          <Link href="">
            <button className={styles.signOut} onClick={(): Promise<void> =>signOut()}>
              <p>Sign Out</p>
              <img src="/images/goTo.png" width={16} height={8}/>
            </button>
          </Link>
        </>}
        {!session && <>
          <Link href="">
            <button className={styles.signIn} onClick={(): Promise<void> =>signIn('auth0')}>
              <p>Sign In</p>
              <img src="/images/goTo.png" width={16} height={8}/>
            </button>
          </Link>
        </>}
        <div className={styles.options}>
          <p>Use Social Login</p>
          <div className={styles.images}>
            <img src="/images/instagramLogo.png" width={17.9*1.25} height={17.9*1.25} className={styles.instagram}/>
            <img src="/images/twitterLogo.png" width={18.93*1.25} height={15.38*1.25} className={styles.twitter}/>
            <img src="/images/facebookLogo.png" width={10.07*1.25} height={18.63*1.25} className={styles.facebook}/>
          </div>
        </div>
        <Link href="/search">
          <button className={styles.signUp}>
            Search Videos
          </button>
        </Link>
      </footer>
    </div>
  );
}

