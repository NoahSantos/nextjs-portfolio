import React from 'react';
import styles from '../app/Styles/scss/project.module.scss';
import Image from 'next/image';

export default function Card({img, title}){
    return (
        <div className={`card lg:card-side bg-base-100 shadow-xl ${styles.card}`}>
            <figure><Image src={img} className={styles.img} alt='project img'></Image></figure>
            <div className={`card-body ${styles.body}`}>
                <h2 className={`card-title ${styles.title}`}>{title}</h2>
                {/* <p>Click the button to listen on Spotiwhy app.</p> */}
                <div className={`${styles.btnCont}`}>
                    <button className={`btn btn-primary ${styles.btn}`}>Repo</button>
                </div>
            </div>
        </div>
    )
}