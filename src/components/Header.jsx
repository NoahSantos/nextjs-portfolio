"use client"
import React, { useRef } from "react";
import { gsap } from "gsap";
// import { CSSPlugin } from 'gsap/CSSPlugin'
// gsap.registerPlugin(CSSPlugin)
import styles from './header.module.css';

export default function Header() {
    const bar = useRef();
    let box = useRef([]);
    let count = useRef(1);
    const pushRef = (el) => box.current.push(el)

    const openNav = async() => {
        if(count.current === 0){
            await gsap.to(bar.current, {
            duration: 0.3, 
            y: -500, 
            });
            await gsap.to(box.current, {
                duration: 0.4, 
                x: -200, 
                stagger: 0.025,
                ease: "back.inOut"
            });
            count.current = 1;
        }else{
            await gsap.to(box.current, {
                duration: 0.3, 
                x: -50, 
                stagger: 0.025,
                ease: "back.inOut"
            });
            gsap.to(bar.current, {
                duration: 0.4, 
                y: 90, 
            });
            count.current = 0;
        }

    };
    
    const onEnter = async() => {
        await gsap.to(box.current, {
            duration: 0.4, 
            x: -50, 
            stagger: 0.025,
            ease: "back.in"
        });
        gsap.to(bar.current, {
            duration: 0.4, 
            y: 90, 
        });
    };

    const onLeave = async() => {
        await gsap.to(bar.current, {
            duration: 0.4, 
            y: -500, 
        });
        await gsap.to(box.current, {
            duration: 0.4, 
            x: -200, 
            stagger: 0.025,
            ease: "back.in"
        });
    };
    
    return (
        <>
            <div className={styles.topBar}>

            </div>
            <div ref={bar} className={styles.navbar}></div>
            <div className={styles.app}>
                {Array(36).fill(0).map((x, i) => (
                    <div ref={pushRef} className={styles.box} key={i} onClick={openNav}></div>
                    // <div ref={pushRef} className={styles.box} key={i} onMouseEnter={onEnter} onMouseLeave={onLeave}></div>
                ))}
            </div>
        </>
    );
}