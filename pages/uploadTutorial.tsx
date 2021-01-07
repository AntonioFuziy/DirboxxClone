import React, { useState } from 'react';

import styles from '../styles/UploadTutorial.module.css';

import axios from 'axios';

import { useSession } from 'next-auth/client'

export default function UploadTutorial(){
  const [session, loading] = useSession();

  const [user, setUser] = useState("");
  if (session){
    const [user, setUser] = useState(session.user.name);
  }

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = {
      user,
      title,
      description,
      link,
      likes,
      dislikes
    }
    console.log(data)

    try{
      axios.post("https://dirboxx-clone-3mtmujl0q.vercel.app.app/api/tutorials", data)
    } catch(error){
      alert(error)
    }
  }

  return(
    <div className={styles.container}>
      <img src="/images/background.png" alt="" className={styles.background}/>
      <form onSubmit={handleSubmit} className={styles.form}>
        <img src="/images/uploadVideo.svg" alt="Upload" className={styles.videoIcon}/>
        <h2 className={styles.subtitle}>Upload your video</h2>
        <input 
          type="text" 
          className={styles.inputTitle} 
          name="title" 
          value={title} 
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input 
          type="text" 
          className={styles.inputDescription} 
          name="description" 
          value={description} 
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
        />
        <input 
          type="url" 
          className={styles.inputLink} 
          name="link" 
          value={link} 
          placeholder="Link from youtube video"
          onChange={(e) => setLink(e.target.value)}
        />

        <button type="submit" className={styles.button}>
          <p>Upload Video</p>
          <img src="/images/upload.svg" className={styles.uploadIcon}/>
        </button>
      </form>
    </div>
  )
}