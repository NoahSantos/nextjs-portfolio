'use client'
import styles from '../Styles/scss/about.module.scss';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

export default function About() {
    const containerRef = useRef(null);
    const panelRefs = useRef([]);
    let firstCont = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const setupHorizontalScroll = () => {
            const panels = panelRefs.current;

            gsap.to(panels, {
                xPercent: -100 * (panels.length - 1),
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    pin: true,
                    scrub: 1,
                    end: () => "+=" + containerRef.current.offsetWidth
                }
            });
        };

        setupHorizontalScroll();

        // Clean up function
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <div className={styles.aboutCont}>
            <div className={styles.firstContainer} ref={firstCont}>
                <h1>Testing horizontal scrolling w/ three sections</h1>
                <h2>First Container</h2>
            </div>
            <div className={styles.container} ref={containerRef}>
                <div className={`${styles.description} ${styles.panel}`} ref={el => panelRefs.current.push(el)}>
                    <div className={styles.first}>SCROLL DOWN</div>
                </div>
                <section className={`${styles.description} ${styles.panel}`} ref={el => panelRefs.current.push(el)}>ONE</section>
                <section  className={`${styles.description} ${styles.panel}`} ref={el => panelRefs.current.push(el)}>TWO</section>
                <section  className={`${styles.description} ${styles.panel}`} ref={el => panelRefs.current.push(el)}>THREE</section>
            </div>
            <div className={styles.lastContainer}>Last Container</div>
        </div>
    );
}