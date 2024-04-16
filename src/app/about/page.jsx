'use client'
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

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
        <div>
        <div className="firstContainer" style={{backgroundColor: 'red', height:'100vh', width:'100vw'}}>
            <h1>Testing horizontal scrolling w/ three sections</h1>
            <h2>First Container</h2>
        </div>
        <div className="container" ref={containerRef} style={{width: '400vw', height: '100vh', display: 'flex', flexWrap: 'nowrap'}}>
            <div className="description panel blue" style={{backgroundColor: 'blue', height:'100vh', width:'100vw'}}>
            <div>
                SCROLL DOWN
                <div className="scroll-down"><div className="arrow"></div></div>
            </div>
            </div>
            <section className="panel red" ref={el => panelRefs.current.push(el)} style={{backgroundColor: 'orange', height:'100vh', width:'100vw'}}>ONE</section>
            <section className="panel orange" ref={el => panelRefs.current.push(el)} style={{backgroundColor: 'purple', height:'100vh', width:'100vw'}}>TWO</section>
            <section className="panel purple" ref={el => panelRefs.current.push(el)} style={{backgroundColor: 'green', height:'100vh', width:'100vw'}}>THREE</section>
        </div>
        <div className="lastContainer"  style={{backgroundColor: 'yellow', height:'100vh', width:'100vw'}}>Last Container</div>
        </div>
    );
}