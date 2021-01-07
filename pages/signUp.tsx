import React, { useState } from 'react';

import styles from '../styles/SignUp.module.css';

import Image from 'next/image';
import axios from 'axios';

export default function SignUp(){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = {
      email,
      password
    }
    console.log(data)

    try{
      await axios.post("http://localhost:3000/api/user", data)
    } catch(error){
      alert(error)
    }
  }

  return(
    <div className={styles.container}>
      <Image src="/images/background.png" width={400} height={500}/>
      <div className={styles.main}>
        <Image src="/images/signIcon.png" width={171} height={189}/>
        <form onSubmit={handleSubmit} className={styles.form}>
            <h2>Create your account</h2>
            <input 
              type="email" 
              name="email" 
              value={email} 
              className={styles.email} 
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
            <input 
              type="password" 
              name="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)}
              className={styles.password} 
              placeholder="Password"
            />

            <button type="submit" className={styles.signUp}>Sign Up</button>
        </form>
      </div>
    </div>
  );
}