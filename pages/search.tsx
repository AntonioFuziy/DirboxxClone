import { GetStaticProps } from 'next';
import React, { useEffect, useState } from 'react';

import styles from '../styles/Search.module.css';
import SubHeader from './components/SubHeader/SubHeader';
import SearchVideosList from './components/SearchVideosList/SearchVideosList';
import Spinner from './components/Spinner/Spinner';
import axios from 'axios'

export default function Search({ videos }){
  const [isLoading, setIsLoading] = useState(true);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const responseLoading = await axios.get("/api/tutorials");
      const dataLoading = await responseLoading.data;
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
  const response = await axios.get("/api/tutorials");
  const data = await response.data;

  return{
    props: {
      videos: data,
    },
    revalidate: 10
  }
};