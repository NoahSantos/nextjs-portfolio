"use client"
import styles from './contact.module.css';
import { BsLinkedin, BsGithub, BsInstagram, BsDiscord, BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { useRef } from 'react';

export default function Contact() {
    let modal = useRef();

    return (
        <>
            <div className={styles.contactBar}>
                <div className={styles.iconCont}>
                    <BsLinkedin className={styles.contactIcon} onClick={()=>modal.current.showModal()}/>
                    <BsGithub className={styles.contactIcon} onClick={()=>modal.current.showModal()}/>
                    <BsInstagram className={styles.contactIcon} onClick={()=>modal.current.showModal()}/>
                    <BsDiscord className={styles.contactIcon} onClick={()=>modal.current.showModal()}/>
                    <MdEmail className={styles.contactIcon} onClick={()=>modal.current.showModal()}/>
                    <BsFillTelephoneFill className={styles.contactIcon} onClick={()=>modal.current.showModal()}/>
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
            {/* <button className="btn" onClick={()=>document.getElementById('my_modal_5').showModal()}>open modal</button> */}
            <dialog ref={modal} className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
                <h3 className="font-bold text-lg">Hello!</h3>
                <p className="py-4">Press ESC key or click the button below to close</p>
                <div className="modal-action">
                <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn">Close</button>
                </form>
                </div>
            </div>
            </dialog>
        </>
    );
}