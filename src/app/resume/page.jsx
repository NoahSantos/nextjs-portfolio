'use client';
import styles from '../Styles/scss/resume.module.scss';
import { useEffect, useState, useRef } from 'react';

export default function Resume() {
    const [rotation, setRotation] = useState(0);
    let temp = useRef();
    let skill = useRef();
    let education = useRef();
    let certification = useRef();
    let experience = useRef();

    const handleWheel = (event) => {
        const newRotation = rotation + event.deltaY * 0.03;
        setRotation(newRotation);
    };

    useEffect(() => {
        temp.current.style.transform = `translate(-60%, -50%) rotate(${rotation}deg)`;
    }, [rotation]);
    

    return (
        <>
            <div className={styles.resumeCont} onWheel={handleWheel}>
                <div ref={temp} className={styles.temp}>
                    <div ref={skill} className={`${styles.skills} ${styles.square}`}><p className={styles.skillsName}>skills</p></div>
                    <div ref={education} className={`${styles.education} ${styles.square}`}><p className={styles.educationName}>education</p></div>
                    <div ref={certification} className={`${styles.certifications} ${styles.square}`}><p className={styles.certificationsName}>certifications</p></div>
                    <div ref={experience} className={`${styles.experience} ${styles.square}`}><p className={styles.experienceName}>experience</p></div>
                </div>
            </div>
        </>
    )
};