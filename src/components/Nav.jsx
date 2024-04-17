"use client"
import React, { useRef } from "react";
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from '../app/Styles/scss/nav.module.scss';
import { HiMenuAlt2 } from "react-icons/hi";
import { gsap } from "gsap";

export default function Nav() {
    const pathname = usePathname()
    let bar = useRef();
    let links = useRef();
    let box = useRef([]);
    let count = useRef(1);
    let mobile = useRef();
    let mobileList = useRef([]);
    let cont = useRef();
    const pushRef = (el) => box.current.push(el)
    const mobilePushRef = (el) => mobileList.current.push(el)

    const openNav = async() => {
        // closes nav
        if(count.current === 0){
            await gsap.to(links.current, {
                duration: 0.2, 
                x: -300, 
            });
            await gsap.to(bar.current, {
            duration: 0.2, 
            y: -900, 
            });
            gsap.to(box.current, {
                duration: 0.3, 
                x: -200, 
                stagger: 0.015,
                ease: "back.inOut"
            });
            count.current = 1;
        // open nav
        }else{
            await gsap.to(box.current, {
                duration: 0.2, 
                x: -50, 
                stagger: 0.015,
                ease: "back.in"
            });
            gsap.to(bar.current, {
                duration: 0.2, 
                y: '-2.5rem', 
            });
            gsap.to(links.current, {
                duration: 0.3, 
                x: 0, 
            });
            count.current = 0;
        }
    };

    const openMobile = async()=>{
        console.log(mobileList.current)
        // closes nav
        if(count.current === 0){
            gsap.to(cont.current, {
                duration: 0.2,  
                rotation: 0,
            });
            await gsap.to(mobileList.current, {
                duration: 0.15, 
                x: -200,
                stagger: 0.05,
                ease: "back.inOut"
            });
            gsap.to(mobile.current, {
                duration: 0.1,  
                width: 0,
                height: 0,
            });
            count.current = 1;
        // open nav
        }else{
            gsap.to(cont.current, {
                duration: 0.2,  
                rotation: -90,
            });
            await gsap.to(mobile.current, {
                duration: 0.2,  
                width: '100vw',
                height: '100vh',
            });
            gsap.to(mobileList.current, {
                duration: 0.3, 
                x: 200,
                stagger: 0.05,
                ease: "back.inOut"
            });
            count.current = 0;
        }
    }
    
    // const onEnter = async() => {
    //     await gsap.to(box.current, {
    //         duration: 0.4, 
    //         x: -50, 
    //         stagger: 0.025,
    //         ease: "back.in"
    //     });
    //     gsap.to(bar.current, {
    //         duration: 0.4, 
    //         y: 90, 
    //     });
    // };

    // const onLeave = async() => {
    //     await gsap.to(bar.current, {
    //         duration: 0.4, 
    //         y: -500, 
    //     });
    //     await gsap.to(box.current, {
    //         duration: 0.4, 
    //         x: -200, 
    //         stagger: 0.025,
    //         ease: "back.in"
    //     });
    // };
    
    return (
        <>
            <div className={styles.topBar}>

            </div>


            <div ref={links} className={styles.linkCont}>
                <ul className={styles.linkList}>
                    <li><Link className={pathname === '/' ? styles.activeList : styles.list} href='/'>Home</Link></li>
                    <li><Link className={pathname === '/about' ? styles.activeList : styles.list} href='/about'>About</Link></li>
                    <li><Link className={pathname === '/resume' ? styles.activeList : styles.list} href='/resume'>Resume</Link></li>
                    <li><Link className={pathname === '/project' ? styles.activeList : styles.list} href='/project'>Projects</Link></li>
                </ul>
            </div>
            <div className={styles.app}>
                <div ref={bar} className={styles.navbar}></div>
                {Array(40).fill(0).map((x, i) => (
                    <div ref={pushRef} className={styles.box} key={i} onClick={openNav}></div>
                    // <div ref={pushRef} className={styles.box} key={i} onMouseEnter={onEnter} onMouseLeave={onLeave}></div>
                ))}
            </div>

            <div ref={cont} className={styles.burgerCont}>
                <HiMenuAlt2 className={styles.mobileBurger} onClick={openMobile} />
            </div>
            <div ref={mobile} className={styles.mobileNav}></div>
            {/* <IoClose className={styles.mobileBurger} onClick={openMobile}></IoClose> */}
            <div className={styles.mobileList}>
                <div><Link ref={mobilePushRef} className={pathname === '/' ? styles.mobileActive : styles.mobileListLink} href="/">Home</Link></div>
                <div><Link ref={mobilePushRef} className={pathname === '/about' ? styles.mobileActive : styles.mobileListLink} href="/about">About</Link></div>
                <div><Link ref={mobilePushRef} className={pathname === '/resume' ? styles.mobileActive : styles.mobileListLink} href="/resume">Resume</Link></div>
                <div><Link ref={mobilePushRef} className={pathname === '/project' ? styles.mobileActive : styles.mobileListLink} href="/projects">Projects</Link></div>
            </div>
        </>
    );
}