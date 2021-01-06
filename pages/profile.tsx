import React from 'react';

import styles from '../styles/Profile.module.css';

import Image from 'next/image';
import Link from 'next/link';
import SubHeader from './components/SubHeader/SubHeader';

export default function Profile(){
  return(
    <div className={styles.container}>
      <header className={styles.header}>
        <img src="/images/Vector.png" alt="Back" width={6} height={12}/>
        <h4>My Profile</h4>
        <img src="/images/options.png" alt="More Options" width={15} height={3}/>
      </header>

      <div className={styles.profile}>
        <Image src="/images/profile.png" width={52} height={52}/>
        <h4>Antonio Fuziy</h4>
        <h5>Ui / UX Designer</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare pretium placerat ut platea.</p>
      </div>

      <SubHeader/>

      <div className={styles.alignmentGrid}>
        <div className={styles.grid}>
          <div className={styles.child1}>
            <div className={styles.gridImages}>
              <img src="/images/folder.png" width={36} height={28} className={styles.folder}/>
              <img src="/images/moreOption.png" width={3} height={15} className={styles.moreOption}/>
            </div>
            <h3>Mobile Apps
              <p>December 20, 2020</p>
            </h3>
          </div>
          <div className={styles.child2}>
            <div className={styles.gridImages}>
              <img src="/images/folder.png" width={36} height={28} className={styles.folder}/>
              <img src="/images/moreOption.png" width={3} height={15} className={styles.moreOption}/>
            </div>
            <h3>SVG Icons
              <p>December 20, 2020</p>
            </h3>
          </div>
          <div className={styles.child3}>
            <div className={styles.gridImages}>
              <img src="/images/folder.png" width={36} height={28} className={styles.folder}/>
              <img src="/images/moreOption.png" width={3} height={15} className={styles.moreOption}/>
            </div>
            <h3>Prototypes
              <p>December 20, 2020</p>
            </h3>
          </div>
          <div className={styles.child4}>
            <div className={styles.gridImages}>
              <img src="/images/folder.png" width={36} height={28} className={styles.folder}/>
              <img src="/images/moreOption.png" width={3} height={15} className={styles.moreOption}/>
            </div>
            <h3>Avatars
              <p>December 20, 2020</p>
            </h3>
          </div>
        </div>
      </div>
      
      <SubHeader/>

      <div className={styles.documents}>
        <div className={styles.document}>
          <img src="/images/wordIcon.png" className={styles.wordIcon} alt=""/>
          <div className={styles.text}>
            <h4>Projects.docx</h4>
            <p>November 22, 2020</p>
          </div>
        </div>
        <p>300 KB</p>
      </div>
      <div className={styles.documents}>
        <div className={styles.document}>
          <img src="/images/wordIcon.png" className={styles.wordIcon} alt=""/>
          <div className={styles.text}>
            <h4>Projects.docx</h4>
            <p>November 22, 2020</p>
          </div>
        </div>
        <p>300 KB</p>
      </div>
      <div className={styles.documents}>
        <div className={styles.document}>
          <img src="/images/wordIcon.png" className={styles.wordIcon} alt=""/>
          <div className={styles.text}>
            <h4>Projects.docx</h4>
            <p>November 22, 2020</p>
          </div>
        </div>
        <p>300 KB</p>
      </div>
    </div>
  )
}