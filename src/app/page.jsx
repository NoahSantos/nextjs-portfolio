"use client";
import {useRef, useEffect} from 'react';
import styles from './Styles/css/home.module.css';
import { gsap } from "gsap";

export default function Page() {
  let line = useRef();

  useEffect(() => {
    gsap.to(line.current, {
      duration: 0.4, 
      height: '100%', 
    });
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.infoCont}>
        <div className={styles.name}>
          <div className={styles.lineCont}>
            <div ref={line} className={styles.line}></div>
            <div className={`${styles.box} ${styles.coverBoxF}`}></div>
            <div className={`${styles.box} ${styles.coverBoxL}`}></div>
          </div>
        </div>

        <div className={styles.brief}></div>
      </div>

      <div className={styles.imageCont}>

      </div>
    </div>
  )
}