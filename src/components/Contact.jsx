"use client"
import styles from './contact.module.css';
import { BsLinkedin, BsGithub, BsInstagram, BsDiscord, BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

export default function Contact() {
    return (
        <>
            <div className={styles.contactBar}>
                <div className={styles.iconCont}>
                    <BsLinkedin className={styles.contactIcon}/>
                    <BsGithub className={styles.contactIcon}/>
                    <BsInstagram className={styles.contactIcon}/>
                    <BsDiscord className={styles.contactIcon}/>
                    <MdEmail className={styles.contactIcon}/>
                    <BsFillTelephoneFill className={styles.contactIcon}/>
                </div>
            </div>
            {/* <div ref={bar} className={styles.navbar}></div>
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
            </div> */}
        </>
    );
}