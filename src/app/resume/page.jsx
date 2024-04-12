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
        temp.current.style.transform = `translate(-50%, -50%) rotate(${rotation}deg)`;
    }, [rotation]);
    

    return (
        <>
            <div className={styles.resumeCont} onWheel={handleWheel}>
                <div ref={temp} className={styles.temp}>
                    <div ref={skill} className={styles.skills}></div>
                    <div ref={education} className={styles.education}></div>
                    <div ref={certification} className={styles.certifications}></div>
                    <div ref={experience} className={styles.experience}></div>
                </div>
            </div>
        </>
    )
};