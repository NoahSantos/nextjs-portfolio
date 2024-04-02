"use client"
import styles from '../app/Styles/css/contact.module.css';
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
                    {/* <BsInstagram className={styles.contactIcon} onClick={()=>modal.current.showModal()}/> */}
                    {/* <BsDiscord className={styles.contactIcon} onClick={()=>modal.current.showModal()}/> */}
                    <MdEmail className={styles.contactIcon} onClick={()=>modal.current.showModal()}/>
                    {/* <BsFillTelephoneFill className={styles.contactIcon} onClick={()=>modal.current.showModal()}/> */}
                </div>
            </div>

            <dialog ref={modal} className='modal modal-bottom sm:modal-middle'>
            <div className={`modal-box ${styles.modal}`}>
                <h3 className={`font-bold text-lg ${styles.contactTitle}`}><strong>Find Me at the Following!</strong></h3>
                <hr />
                <p className={`py-4 ${styles.contact}`}><strong>LinkedIn:</strong> Noah Santos</p>
                <p className={`py-4 ${styles.contact}`}><strong>GitHub:</strong> NoahSantos</p>
                <p className={`py-4 ${styles.contact}`}><strong>Email:</strong> noahbsantos@gmail.com</p>
                <div className="modal-action">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className={`btn ${styles.modalBtn}`}>Close</button>
                    </form>
                </div>
            </div>
            </dialog>
        </>
    );
}