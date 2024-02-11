import React from 'react'
import { getImageUrl } from '../../utils';
import styles from "./Hero.module.css"
export const Hero = () => {
  return<section className={styles.container}>
    <div className={styles.content}> 
        <h1 className={styles.title}>
            Hi, I'm Harsh Pathak
        </h1>
        <p className={styles.description}>I'm a Software Developer with experience of multiple interships and a job using Rect , Django , SQL and basic web developement tools such as HTML, Css and JavaScript. Reach out if you'd like to to learn more!</p>
        <a href="mailto:06hpathak@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>

    </div>
    <img src={getImageUrl("hero/Harsh.jpg")}alt="Image of Harsh Pathak" className={styles.HeroImg}/>
        <div className={styles.topBlur}/>
        <div className={styles.bottomBlur}/>
  </section> 
};
