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

    const handleTouchStart = (event) => {
        // Store the initial touch position
        temp.current.dataset.touchStartY = event.touches[0].clientY;
    };

    const handleTouchMove = (event) => {
        if (temp.current.dataset.touchStartY) {
            // Calculate the difference between initial touch position and current touch position
            const deltaY = event.touches[0].clientY - parseFloat(temp.current.dataset.touchStartY);

            // Adjust rotation based on touch movement
            const newRotation = rotation + deltaY * 0.03;
            setRotation(newRotation);

            // Update touch start position
            temp.current.dataset.touchStartY = event.touches[0].clientY;
        }
    };

    const handleTouchEnd = () => {
        // Clear touch start position when touch ends
        delete temp.current.dataset.touchStartY;
    };

    useEffect(() => {
        temp.current.style.transform = `translate(-60%, -50%) rotate(${rotation}deg)`;
    }, [rotation]);
    

    return (
        <>
            <div className={styles.resumeCont} onWheel={handleWheel} onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
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