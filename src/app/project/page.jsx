'use client';
import styles from '../Styles/scss/project.module.scss';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';

export default function About() {
    const containerRef = useRef(null);
    const panelRefs = useRef([]);

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
        <div className={styles.projectCont}>
            <div className={styles.container} ref={containerRef}>
                <div className={`card lg:card-side bg-base-100 shadow-xl ${styles.card}`}>
                    <figure><img src="https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg" alt="Album"/></figure>
                    <div className="card-body">
                        <h2 className="card-title">New album is released!</h2>
                        {/* <p>Click the button to listen on Spotiwhy app.</p> */}
                        <div className="card-actions justify-end">
                        <button className={`btn btn-primary ${styles.btn}`}>Listen</button>
                        </div>
                    </div>
                </div>
                <div className={`card lg:card-side bg-base-100 shadow-xl ${styles.card}`}>
                    <figure><img src="https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg" alt="Album"/></figure>
                    <div className="card-body">
                        <h2 className="card-title">New album is released!</h2>
                        {/* <p>Click the button to listen on Spotiwhy app.</p> */}
                        <div className="card-actions justify-end">
                        <button className={`btn btn-primary ${styles.btn}`}>Listen</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}