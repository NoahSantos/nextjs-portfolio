'use client';
import styles from '../Styles/scss/resume.module.scss';
import { useEffect, useState, useRef } from 'react';
import { gsap } from "gsap";
import { IoClose } from "react-icons/io5";

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
            const newRotation = rotation + deltaY * 0.2;
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
        if(window.innerWidth > 300){
            temp.current.style.transform = `translate(-60%, -50%) rotate(${rotation}deg)`;
        }else{
            temp.current.style.transform = `translate(-50%, -50%) rotate(${rotation}deg)`;
        }
    }, [rotation]);

    const showInfo = (section) =>{
        console.log('clicked')
        console.log(section.current)
        gsap.to(section.current, {
            duration: 0.3, 
            y: 0, 
            opacity: 1,
        });
    }
    
    const closeInfo = (section) =>{
        console.log('clicked')
        console.log(section.current)
        gsap.to(section.current, {
            duration: 0.3, 
            y: 100, 
            opacity: 0,
        });
    }

    return (
        <>
            <div className={styles.resumeCont} onWheel={handleWheel} onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
                <div ref={temp} className={styles.temp}>
                    <div className={`${styles.skills} ${styles.square}`}><p className={styles.skillsName} onClick={()=>showInfo(skill)}>skills</p></div>
                    <div className={`${styles.education} ${styles.square}`}><p className={styles.educationName} onClick={()=>showInfo(education)}>education</p></div>
                    <div className={`${styles.certifications} ${styles.square}`}><p className={styles.certificationsName} onClick={()=>showInfo(certification)}>certifications</p></div>
                    <div className={`${styles.experience} ${styles.square}`}><p className={styles.experienceName} onClick={()=>showInfo(experience)}>experience</p></div>
                </div>
            </div>

            <div className={styles.cont}>
                <div ref={skill} className={`${styles.skillsCont} ${styles.sect}`}>
                    <IoClose className={styles.close} onClick={()=>closeInfo(skill)}></IoClose>
                </div>
                <div ref={education} className={`${styles.educationCont} ${styles.sect}`}>
                    <IoClose className={styles.close} onClick={()=>closeInfo(education)}></IoClose>
                </div>
                <div ref={certification} className={`${styles.certificationsCont} ${styles.sect}`}>
                    <IoClose className={styles.close} onClick={()=>closeInfo(certification)}></IoClose>
                </div>
                <div ref={experience} className={`${styles.experienceCont} ${styles.sect}`}>
                    <IoClose className={styles.close} onClick={()=>closeInfo(experience)}></IoClose>
                </div>
            </div>
        </>
    )
};