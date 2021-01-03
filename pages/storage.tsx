import React from 'react';

import Image from 'next/image';
import { ProgressBar } from 'react-bootstrap';
import Link from 'next/link';

import styles from '../styles/Storage.module.css';

export default function Storage(){
    return (
        <div className={styles.container}>
            <header className={styles.storage}>
                <Image src="/images/Vector.png" alt="Back" width={6} height={12} className={styles.vector}/>
                <h3>Storage Details</h3>
                <Image src="/images/options.png" alt="More Options" width={15} height={3} className={styles.options}/>
            </header>
            <Image src="/images/Pie.png" alt="Graphic" width={148} height={148}/>
            <main className={styles.main}>
                <div className={styles.data}>
                    <h4 className={styles.available}>Available: 43.36 GB</h4>
                    <p className={styles.total}>Total: 128 GB</p>
                    <ul className={styles.list}>
                        <li className={styles.row}>
                            <div className={styles.text}>
                                <p className={styles.title}>Design Files</p>
                                <p className={styles.number}>38.66 GB</p>
                            </div>
                            <Image src="/images/progress.png" width={120} height={4}/>
                        </li>
                        <li className={styles.row}>
                            <div className={styles.text}>
                                <p className={styles.title}>Images</p>
                                <p className={styles.number}>24.8 GB</p>
                            </div>
                            <Image src="/images/progress.png" width={120} height={4}/>
                        </li>
                        <li className={styles.row}>
                            <div className={styles.text}>
                                <p className={styles.title}>Video</p>
                                <p className={styles.number}>12.6 GB</p>
                            </div>
                            <Image src="/images/progress.png" width={120} height={4}/>
                        </li>
                        <li className={styles.row}>
                            <div className={styles.text}>
                                <p className={styles.title}>Documents</p>
                                <p className={styles.number}>6.57 GB</p>
                            </div>
                            <Image src="/images/progress.png" width={120} height={4}/>
                        </li>
                        <li className={styles.row}>
                            <div className={styles.text}>
                                <p className={styles.title}>Others</p>
                                <p className={styles.number}>2.01 GB</p>
                            </div>
                            <Image src="/images/progress.png" width={120} height={4}/>
                        </li>
                    </ul>
                </div>
            </main>
            
            <Link href="/sign">
                <button className={styles.button}>
                    <a>Export Details</a>
                </button>
            </Link>
        </div>
    )
}