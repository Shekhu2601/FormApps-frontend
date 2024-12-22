import React from 'react'
import styles from './home.module.css'
import svg from '../logo/SVG.png'
import { Link } from 'react-router-dom'
import mainI from '../logo/Container.png'
import Footer from './Footer'

export default function Home() {
  return (
    <>
    <div className={styles.container}>
      
      <div className={styles.navbar}>
       <div className={styles.box1}>
       <img src={svg} alt="" /> 
      <b className={styles.bot}> FormBot</b>
       </div>
       <div className={styles.box2}>
        <Link className={styles.loginbtn} to="/login">Sign in </Link>
        <Link className={styles.loginbtn2} to="/login">Create a FormBot </Link>
       </div>

      </div>
      <div className={styles.main}>
      <Link className={styles.loginbtn3} to="/login">Create a FormBot for free</Link>
        <img className={styles.mainI} src={mainI} alt="" />
     
      </div>
      <Footer/>
    </div>
   
    </>
  )
}
