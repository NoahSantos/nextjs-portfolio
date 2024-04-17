'use client'
import styles from '../app/Styles/scss/about.module.scss';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

export default function Scrolling({classes, boxes}) {
    const containerRef = useRef(null);
    const panelRefs = useRef([]);
    let firstCont = useRef(null);
    let cont = useRef(null);
    let horizontalSections = [];
    let vertSection = useRef(null);

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

        const targetElement = panelRefs.current[panelRefs.current.length-1];
        const elementToMove = vertSection.current;

        const updatePosition = () => {
            if (targetElement && elementToMove) {
                const { top: targetTop, left: targetLeft } = targetElement.getBoundingClientRect();

                // Set the position of the element to move to match the position of the target element
                elementToMove.style.position = 'absolute'; // Make sure the element has position: absolute or position: relative
                elementToMove.style.top = `${targetTop}px`;
                elementToMove.style.left = `${targetLeft}px`;
            }
        };

        // Update position when the window is resized or scrolled
        window.addEventListener('resize', updatePosition);
        window.addEventListener('scroll', updatePosition);

        // Initial update
        updatePosition();

        // Clean up function
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
            window.removeEventListener('resize', updatePosition);
            window.removeEventListener('scroll', updatePosition);
        };
    }, []);

    // console.log(panelRefs.current[panelRefs.current.length-1].style.top)
    // vertSection.current.style.top = `${panelRefs.current[panelRefs.current.length-1].style.top}px`;
    // vertSection.current.style.left = `${panelRefs.current[panelRefs.current.length-1].style.left}px`;

    for(let i = 0; i < boxes; i++){
        horizontalSections.push(<div className={`${classes[i]} ${styles.panel}`} key={i} ref={el => panelRefs.current.push(el)}>
            <div className={styles.first}>Scroll</div>
        </div>)
    }

    console.log(panelRefs.current)

    return (
        <div className={`${styles.aboutCont}`} ref={cont}>
            {/* <div className={styles.firstContainer} ref={firstCont}>
                <h1>Testing horizontal scrolling w/ three sections</h1>
                <h2>First Container</h2>
            </div> */}
            {/* {()=>{
                for(let i = 0; i < boxes; i++){

                }
            }} */}
            <div className={styles.container} ref={containerRef}>
                {/* <div className={`${styles.description} ${styles.panel}`} ref={el => panelRefs.current.push(el)}>
                    <div className={styles.first}>SCROLL DOWN</div>
                </div>
                <section className={`${styles.description} ${styles.panel}`} ref={el => panelRefs.current.push(el)}>ONE</section>
                <section  className={`${styles.description} ${styles.panel}`} ref={el => panelRefs.current.push(el)}>TWO</section>
                <section  className={`${styles.description} ${styles.panel}`} ref={el => panelRefs.current.push(el)}>THREE</section> */}
                {horizontalSections}
            </div>
            <div className={`${styles.lastContainer} ${classes[classes.length-2]}`}>Last Container</div>
            <div ref={vertSection} className={classes[classes.length-1]}></div>
        </div>
    );
}