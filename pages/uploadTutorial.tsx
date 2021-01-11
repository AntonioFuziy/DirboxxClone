import React, { useEffect, useState } from 'react';

import styles from '../styles/UploadTutorial.module.css';

import axios from 'axios';

import { signIn, signOut, useSession } from 'next-auth/client'
import Link from 'next/link';
import { useToast } from "@chakra-ui/react"
import { useRouter } from 'next/router';

export default function UploadTutorial(){
  const [session, loading] = useSession();

  const [user, setUser] = useState("");

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [redirect, setRedirect] = useState(false);
  const router = useRouter();
  const toast = useToast();

  useEffect(() => {
    function setSession(){
      if (session){
        setUser(session.user.name)
        console.log(session.user.name)
      }
    }
    setSession()
  }, [])

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
      axios.post("https://dirboxx-clone.vercel.app/api/tutorials", data)
      toast({
        position: "top-right",
        title: "Uploaded.",
        description: "We've uploaded your video.",
        status: "success",
        duration: 9000,
        isClosable: true,
      })
      setTimeout(() => {
        router.push("/search")
      }, 1500)
    } catch(error){
      toast({
        position: "top-right",
        title: "Error.",
        description: error,
        status: "error",
        duration: 9000,
        isClosable: true,
      })
    }
  }

  return(
    <div className={styles.container}>
      <img src="/images/background.png" alt="" className={styles.background}/>
      {session ? (
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
      ): (
        <div className={styles.notLogged}>
          <h1>You should sign in to upload a video</h1>
          <Link href="">
            <button className={styles.signIn} onClick={(): Promise<void> =>signIn('auth0')}>
              <p>Sign In</p>
              <img src="/images/goTo.png" width={16} height={8}/>
            </button>
          </Link>
        </div>
      )}
    </div>
  )
}