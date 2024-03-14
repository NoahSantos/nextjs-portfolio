"use client"
import React, { useRef } from "react";
import { gsap } from "gsap";
import styles from './header.module.css';

export default function Header() {
    const app = useRef();
    let box = useRef([]);
    const pushRef = (el) => box.current.push(el)

    const onEnter = () => {
        gsap.to(box.current, {
            duration: 0.5, 
            x: -50, 
            stagger: 0.05,
            ease: "back.in"
        });
    };
    
    const onLeave = () => {
        gsap.to(box.current, {
            duration: 0.5, 
            x: -250, 
            stagger: 0.05,
            ease: "back.in"
        });
    };
    
    return (
        <div ref={app} className={styles.app} onMouseEnter={onEnter} onMouseLeave={onLeave}>
            <div ref={pushRef} className={styles.box}></div>
            <div ref={pushRef} className={styles.box}></div>
            <div ref={pushRef} className={styles.box}></div>
            <div ref={pushRef} className={styles.box}></div>
            <div ref={pushRef} className={styles.box}></div>
            <div ref={pushRef} className={styles.box}></div>
            <div ref={pushRef} className={styles.box}></div>
            <div ref={pushRef} className={styles.box}></div>
            <div ref={pushRef} className={styles.box}></div>
            <div ref={pushRef} className={styles.box}></div>
            <div ref={pushRef} className={styles.box}></div>
            <div ref={pushRef} className={styles.box}></div>
            <div ref={pushRef} className={styles.box}></div>
            <div ref={pushRef} className={styles.box}></div>
            <div ref={pushRef} className={styles.box}></div>
            <div ref={pushRef} className={styles.box}></div>
            <div ref={pushRef} className={styles.box}></div>
            <div ref={pushRef} className={styles.box}></div>
        </div>
    );
}