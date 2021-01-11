import { GetStaticProps } from 'next';
import React, { useEffect, useState } from 'react';

import styles from '../styles/Search.module.css';
import SubHeader from './components/SubHeader/SubHeader';
import SearchVideosList from './components/SearchVideosList/SearchVideosList';
import Spinner from './components/Spinner/Spinner';

export default function Search({ videos }){
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const responseLoading = await fetch("http://localhost:3000/api/tutorials");
      const dataLoading = await responseLoading.json();
      setIsLoading(false)
    }
    fetchData()
  }, [])

  return(
    <div className={styles.container}>
      <header className={styles.header}>
        <h2>Search Tutorials</h2>
        <img src="/images/options.png" alt="More Options" width={15} height={3}/>
      </header>
      <SubHeader/>
      <input type="text" name="search" id="" placeholder="Search Folder"/>
      {isLoading ? (
        <Spinner/>
      ) : (
        <SearchVideosList videos={videos}/>
      )}
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch("http://localhost:3000/api/tutorials");
  const data = await response.json();

  return{
    props: {
      videos: data,
    },
    revalidate: 10
  }
};