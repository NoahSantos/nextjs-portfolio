"use client";
import {useRef, useEffect} from 'react';
import styles from './Styles/scss/home.module.scss';
import { gsap } from "gsap";

export default function Page() {
  let line = useRef();
  let firstN = useRef();
  let lastN = useRef();
  let firstNCont = useRef();
  let lastNCont = useRef();

  useEffect(() => {
    (async()=>{
      await gsap.to(line.current, {
        duration: 0.4, 
        height: '100%', 
      });
      gsap.to(firstN.current, {
        duration: 0.4, 
        x: `-=${firstNCont.current.getBoundingClientRect().width}`, 
      });
      gsap.to(lastN.current, {
        duration: 0.4, 
        x: `+=${lastNCont.current.getBoundingClientRect().width}`, 
      });
    })()
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.infoCont}>
        <div className={styles.name}>
          <div className={styles.lineCont}>
            <div ref={line} className={styles.line}></div>
            <div ref={firstNCont} className={`${styles.box} ${styles.coverBoxF}`}>
              <p ref={firstN} className={`${styles.nameText} ${styles.fName}`}>Noah</p>
            </div>
            <div ref={lastNCont} className={`${styles.box} ${styles.coverBoxL}`}>
              <p ref={lastN} className={`${styles.nameText} ${styles.lName}`}>Santos</p>
            </div>
          </div>
        </div>

        <div className={styles.brief}></div>
      </div>

      <div className={styles.imageCont}>

      </div>
    </div>
  )
}