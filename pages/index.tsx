import React, { useEffect, useState } from 'react';

import styles from '../styles/Sign.module.css';

import Image from 'next/image';
import Link from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/client'

export default function Sign(){
  const [ session, loading ] = useSession()
  
  return(
    <div className={styles.container}>
      <img src="/images/background.png" className={styles.background}/>
      <div className={styles.main}>
        <Image src="/images/signIcon.png" width={171} height={189}/>
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
              <Image src="/images/goTo.png" width={16} height={8}/>
            </button>
          </Link>
        </>}
        {!session && <>
          <Link href="">
            <button className={styles.signIn} onClick={(): Promise<void> =>signIn('auth0')}>
              <p>Sign In</p>
              <Image src="/images/goTo.png" width={16} height={8}/>
            </button>
          </Link>
        </>}
        <div className={styles.options}>
          <p>Use Social Login</p>
          <div className={styles.images}>
            <Image src="/images/instagramLogo.png" width={17.9} height={17.9} className={styles.instagram}/>
            <Image src="/images/twitterLogo.png" width={18.93} height={15.38} className={styles.twitter}/>
            <Image src="/images/facebookLogo.png" width={10.07} height={18.63} className={styles.facebook}/>
          </div>
        </div>
        <Link href="/signUp">
          <button className={styles.signUp}>
            Create an account
          </button>
        </Link>
      </footer>
    </div>
  );
}

