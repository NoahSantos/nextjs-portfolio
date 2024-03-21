"use client"
import React, { useRef } from "react";
import { gsap } from "gsap";
import styles from './header.module.css';
import Link from 'next/link'

export default function Header({activeLink}) {
    const bar = useRef();
    const links = useRef();
    let box = useRef([]);
    let count = useRef(1);
    const pushRef = (el) => box.current.push(el)

    const openNav = async() => {
        if(count.current === 0){
            await gsap.to(links.current, {
                duration: 0.2, 
                x: -300, 
            });
            await gsap.to(bar.current, {
            duration: 0.2, 
            y: -500, 
            });
            gsap.to(box.current, {
                duration: 0.3, 
                x: -200, 
                stagger: 0.015,
                ease: "back.inOut"
            });
            count.current = 1;
        }else{
            await gsap.to(box.current, {
                duration: 0.3, 
                x: -50, 
                stagger: 0.015,
                ease: "back.in"
            });
            gsap.to(bar.current, {
                duration: 0.2, 
                y: '10vh', 
            });
            gsap.to(links.current, {
                duration: 0.3, 
                x: 0, 
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
            <div ref={links} className={styles.linkCont}>
                <ul className={styles.linkList}>
                    {activeLink === 'home' ? <li><Link className={styles.activeList} href="/">Home</Link></li> : <li><Link className={styles.list} href="/">Home</Link></li>}
                    <li><Link className={styles.list} href="/about">About</Link></li>
                    <li><Link className={styles.list} href="/resume">Resume</Link></li>
                    <li><Link className={styles.list} href="/projects">Projects</Link></li>
                </ul>
            </div>
            <div className={styles.app}>
                {Array(45).fill(0).map((x, i) => (
                    <div ref={pushRef} className={styles.box} key={i} onClick={openNav}></div>
                    // <div ref={pushRef} className={styles.box} key={i} onMouseEnter={onEnter} onMouseLeave={onLeave}></div>
                ))}
            </div>
        </>
    );
}