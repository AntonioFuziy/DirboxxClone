import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link'

import { GetStaticProps, GetStaticPaths } from 'next';

import styles from "../../styles/videoPage.module.css";

export default function Video({ video, listVideos }){
  const { query } = useRouter();
  return(
    <>
      <div className={styles.container}>
        <div className={styles.videoListContent}>
          <iframe src={"https://www.youtube.com/embed/"+video.newLink} className={styles.iframe} frameBorder="0" allowFullScreen></iframe>
          <div className={styles.videoText}>
            <h3>{video.title}</h3>
            <p>{video.description}</p>
            <p>{video.user}</p>
            <p>{video.likes}</p>
            <p>{video.dislikes}</p>
          </div>

          <input type="text" defaultValue={query.newLink} name="newLink" className={styles.inputNone}/>
        </div>
        <ul className={styles.list}>
          {
            listVideos.map((item) => (
              <a href={"/uniques/"+item.newLink}>
                <li className={styles.item}>
                    <iframe src={"https://www.youtube.com/embed/"+item.newLink} className={styles.iframeList} frameBorder="0" allowFullScreen></iframe>
                    <h3 className={styles.listTitle}>{item.title}</h3>
                    <p>{item.user}</p>
                </li>
              </a>
            ))
          }
        </ul>
      </div>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () =>{
  const response = await fetch(`http://localhost:3000/api/tutorials`);
  const data = await response.json();
  console.log(data)

  const paths = data.map(member => {
    return { params: {
      user: member.user,
      newLink: member.newLink,
      title: member.title,
      description: member.description,
      likes: member.likes,
      dislikes: member.dislikes
    } }
  })

  return{
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const newLink = context.params;

  const options = {
    method: "POST",
    body: JSON.stringify(newLink),
    headers: {
      'Content-Type': 'application/json'
    }
  }

  const response = await fetch(`http://localhost:3000/api/video`, options);
  const data = await response.json();

  const list = await fetch("http://localhost:3000/api/tutorials");
  const listVideosData = await list.json();

  return{
    props: {
      video: data,
      listVideos: listVideosData
    }
  }
}