import React from 'react';
import { getImageUrl } from '../../utils';
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>
                Hi, I'm Song
            </h1>
            <p className={styles.description}>
                I'm a System Engineer with experiences in technical skills 
                additionally with soft-skill in digital project management!
            </p>
            <a href="mailto:songkrian2014@gmail.com" className={styles.contactBtn}>
                Contact Me
            </a>
        </div>
        <img 
            src={getImageUrl("hero/heroImage.png")} 
            className={styles.heroImg} 
            alt="profile image" 
        />
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
    </section>
  );
};
