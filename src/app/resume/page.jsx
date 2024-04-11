'use client';
import styles from '../Styles/scss/resume.module.scss';
import { useEffect, useState, useRef } from 'react';

export default function Resume() {
    const [rotation, setRotation] = useState(0);
    let temp = useRef();

    const handleWheel = (event) => {
        const newRotation = rotation + event.deltaY * 0.1;
        setRotation(newRotation);
    };

    useEffect(() => {
        temp.current.style.transform = `rotate(${rotation}deg)`;
    }, [rotation])
    

    return (
        <>
            <div className={styles.resumeCont} onWheel={handleWheel}>
                <div ref={temp} className={styles.temp} style={{ transform: `rotate(${rotation}deg)` }}></div>
            </div>
        </>
    )
};