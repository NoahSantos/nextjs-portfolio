'use client'
import styles from '../Styles/scss/about.module.scss';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

export default function About() {
    const containerRef = useRef(null);
    const panelRefs = useRef([]);
    let firstCont = useRef(null);
    let cont = useRef(null);

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
        <div className={styles.aboutCont} ref={cont}>
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




// export default function About() {
//     const container1Ref = useRef(null);
//     const container2Ref = useRef(null);
//     const contRef = useRef(null);

//     useEffect(() => {
//         gsap.registerPlugin(ScrollTrigger);

//         const setupHorizontalScroll = () => {
//             gsap.to(contRef.current, {
//                 xPercent: -50,
//                 // x: () => -container1Ref.current.offsetWidth,
//                 ease: "none",
//                 scrollTrigger: {
//                     trigger: container1Ref.current,
//                     start: "bottom bottom", // Trigger horizontal scrolling when the top of the viewport reaches the bottom of the container
//                     end: () => `left bottom-=${container2Ref.current.offsetWidth}`, // Stop horizontal scrolling when the left side of the second container reaches the left side of the viewport
//                     pin: true,
//                     scrub: false, // Disable scrubbing to enable user-controlled horizontal scrolling
//                     invalidateOnRefresh: true, // Invalidate scroll position on refresh to avoid conflicts
//                     markers: true, // Optional: Adds markers for debugging
//                 }
//             });
//         };

//         setupHorizontalScroll();

//         return () => {
//             ScrollTrigger.getAll().forEach(trigger => trigger.kill());
//         };
//     }, []);

//     return (
//         <div ref={contRef} className={styles.aboutCont}>
//             <div className={styles.containerWrapper}>
//                 <div ref={container1Ref} className={styles.container1}>
//                     Cont1
//                 </div>
//                 <div ref={container2Ref} className={styles.container2}>
//                     Cont2
//                 </div>
//             </div>
//         </div>
//     );
// }
