import {useEffect} from 'react';
import styles from '../app/Styles/scss/project.module.scss';
import Image from 'next/image';
import Link from 'next/link'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Card({img, title, link, animation}){
    useEffect(() => {
        AOS.init({
            once: true,
        })
    }, [])

    return (
        <div className={`card lg:card-side ${styles.card}`} data-aos={animation} data-aos-duration="500">
            <figure><Image src={img} className={styles.img} alt='project img'></Image></figure>
            <div className={`card-body ${styles.body}`}>
                <h2 className={`card-title ${styles.title}`}>{title}</h2>
                <div className={`${styles.btnCont}`}>
                    <Link href={link} target='_blank' className={`btn btn-primary ${styles.btn}`}>Repo</Link>
                </div>
            </div>
        </div>
    )
}