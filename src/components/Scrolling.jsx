'use client'
import styles from '../app/Styles/scss/about.module.scss';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';
import about from '../../public/images/About.JPG'

export default function Scrolling({classes, boxes, section}) {
    const containerRef = useRef(null);
    const panelRefs = useRef([]);
    let firstCont = useRef(null);
    let cont = useRef(null);
    let horizontalSections = [];

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
                snap: {
                    snapTo: 1 / (panels.length - 1),
                    duration: 0.3,
                    delay: 0.3,
                    ease: "power1.inOut"
                },
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

    // for(let i = 0; i < boxes; i++){
    //     horizontalSections.push(<div className={`${classes[i]} ${styles.panel}`} key={i} ref={el => panelRefs.current.push(el)}>
    //         <div className={styles.first}>Scroll</div>
    //     </div>)
    // }


    return (
        <div className={`${styles.aboutCont}`} ref={cont}>
            <div className={styles.container} ref={containerRef}>
                {section === 1 ? 
                    <>
                        <div className={`${classes[0]} ${styles.panel}`} ref={el => panelRefs.current.push(el)}>
                            <div className={styles.introCont}>
                                <div className={styles.imageCont}>
                                    <Image src={about} alt='picture of me' className={styles.img}></Image>
                                </div>
                                <div className={styles.nameCont}>
                                    <p className={styles.nameText}>Hi,</p>
                                    <p className={styles.nameText}>I&apos;m Noah</p>
                                </div>
                            </div>
                        </div> : 
                        <div className={`${classes[1]} ${styles.panel}`} ref={el => panelRefs.current.push(el)}>
                            <div className={styles.first}>1</div>
                        </div>
                        <div className={`${classes[2]} ${styles.panel}`} ref={el => panelRefs.current.push(el)}>
                            <div className={styles.first}>1</div>
                        </div>
                    </> : 
                    <>
                        <div className={`${classes[0]} ${styles.panel}`} ref={el => panelRefs.current.push(el)}>
                            <div className={styles.first}>2</div>
                        </div> : 
                        <div className={`${classes[1]} ${styles.panel}`} ref={el => panelRefs.current.push(el)}>
                            <div className={styles.first}>2</div>
                        </div>
                    </>
                }
            </div>
            <div className={`${styles.lastContainer} ${classes[classes.length-1]}`}>Last Container</div>
        </div>
    );
}