import React from "react";
import styles from "./footer.module.css";
import svg from '../logo/SVG.png'
import { LuSquareArrowOutUpRight } from "react-icons/lu";


export default function Footer() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.main}>
          <div className={styles.box1}>
           <div className={styles.svg}>
           <img className={styles.bot} src={svg} alt="" />
          <h3>FormBot</h3>
           </div>
           
            <p>
            Made with ❤️ by
            <br />
            @cuvette
            </p>
          </div>
          <div className={styles.box2}>
            <h3>Product</h3>
            
            <p   className={styles.logo}>Status <LuSquareArrowOutUpRight  /> </p>
            <p  className={styles.logo}>Documentation<LuSquareArrowOutUpRight  /> </p>
            <p  className={styles.logo}>Roadmap<LuSquareArrowOutUpRight  /> </p>
            <p  className={styles.logo}>Pricing<LuSquareArrowOutUpRight  /></p>
            
          </div>
          <div className={styles.box3}>
            <h3>Community</h3>
           <div className={styles.link}>
           <p   className={styles.logo}>Discord<LuSquareArrowOutUpRight  /> </p>
            <p  className={styles.logo}>GitHub repository<LuSquareArrowOutUpRight  /> </p>
            <p  className={styles.logo}>Twitter<LuSquareArrowOutUpRight  /> </p>
            <p  className={styles.logo}>LinkedIn<LuSquareArrowOutUpRight  /></p>
            <p  className={styles.logo}>OSS Friends</p>
           </div>
          </div>
          <div className={styles.box4}>
          <h3>Company</h3>
           <div className={styles.link}>
            
           <p   className={styles.logo}>About<LuSquareArrowOutUpRight  /> </p>
            <p  className={styles.logo}>Contact<LuSquareArrowOutUpRight  /> </p>
            <p  className={styles.logo}>Terms of Service<LuSquareArrowOutUpRight  /> </p>
            <p  className={styles.logo}>Privacy Policy<LuSquareArrowOutUpRight  /></p>
         
           </div>
          </div>
        </div>
        
      </div>
    </>
  );
}
