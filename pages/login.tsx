import Head from 'next/head'
import { useState } from 'react'
import styles from '../styles/Login.module.css'

import jwt from "jsonwebtoken"

export default function Login(){

    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const [message, setMessage] = useState<string>("You are not logged in")

    async function submitForm(){
        const res = await fetch("/api/login", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        }).then((t) => t.json())

        const token = res.token

        if(token){
            const json = jwt.decode(token) as { [key: string]: string }
            setMessage(`Welcome ${json.email} and you are ${json.admin ? 'an admin!' : 'not an admin'}`)
        } else{
            setMessage("Something went wrong")
        }
    }

    return(
        <div className={styles.container}>
            <Head>
                <title>Login</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            
            <div className={styles.main}>
                <form method="POST" action="/api/login" className={styles.card}>
                    <h3 className={styles.title}>Login</h3>

                    <p>{message}</p>

                    <div className={styles.inputGroup}>
                        <label htmlFor=""  className={styles.label}>Email</label>
                        <input type="email" name="email" value={email} onChange={e => setEmail(e.target.value)} className={styles.input}/>
                    </div>

                    <div className={styles.inputGroup}>
                        <label htmlFor="" className={styles.label}>Password</label>
                        <input type="password" name="password" value={password} onChange={e => setPassword(e.target.value)} className={styles.input}/>
                    </div>

                    <button type="button" value="Login" onClick={submitForm} className={styles.button} >Entrar</button>
                </form>
            </div>
        </div>
    )
}