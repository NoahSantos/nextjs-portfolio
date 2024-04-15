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
        gsap.to([skill.current, education.current, certification.current, experience.current], {
            duration: 0.3, 
            y: 100, 
            opacity: 0,
        });
        [skill.current, education.current, certification.current, experience.current].forEach(element=>{
            element.classList.remove(`${styles.active}`);
        })
        gsap.to(section.current, {
            duration: 0.3, 
            y: 0, 
            opacity: 1,
        });
        section.current.classList.add(`${styles.active}`)
    }
    
    const closeInfo = (section) =>{
        gsap.to(section.current, {
            duration: 0.3, 
            y: 10, 
            opacity: 0,
        });
        section.current.classList.remove(`${styles.active}`)
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
                    <p className={styles.title}>Education</p>
                    <p className={styles.subTitle}>2022 - Present: West-MEC</p>
                    <p className={styles.content}>At the two-year West-MEC coding program, I have have been praccticing and honing both my professional skills and soft skills in different languages. I have also earned multiple certifications through this program.</p>
                    <p className={styles.subTitle}>2020 - Present: Sandra Day O'Connor High School</p>
                    <p className={styles.content}>At my home high school, I have learned that basics of Java and gotten two certifications through both of my coding classes there, which were Comp Sci Principles and Comp Sci A.</p>
                </div>
                <div ref={certification} className={`${styles.certificationsCont} ${styles.sect}`}>
                    <IoClose className={styles.close} onClick={()=>closeInfo(certification)}></IoClose>
                    <p className={styles.title}>Certifications / Awards</p>
                </div>
                <div ref={experience} className={`${styles.experienceCont} ${styles.sect}`}>
                    <IoClose className={styles.close} onClick={()=>closeInfo(experience)}></IoClose>
                    <p className={styles.title}>Experience</p>
                </div>
            </div>
        </>
    )
};