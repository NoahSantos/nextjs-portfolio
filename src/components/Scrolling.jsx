'use client'
import styles from '../app/Styles/scss/about.module.scss';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Image from 'next/image';
import intro from '../../public/images/About.JPG';
import about from '../../public/images/Noah-Chair.jpeg';
import gaming from '../../public/images/Total War.jpg'
import history from '../../public/images/History.jpg';
import song from '../../public/images/Song.jpg';
import walking from '../../public/images/Walking.JPG';
import travel from '../../public/images/Travel.JPG'
import reading from '../../public/images/Reading.JPG';

export default function Scrolling({classes, boxes, section}) {
    const containerRef = useRef(null);
    const panelRefs = useRef([]);
    let cont = useRef(null);
    let horizontal = useRef([]);
    let horizontalTitle = useRef([]);
    let verticalTitle = useRef([]);
    let img = useRef();
    let text = useRef();

    useEffect(() => {
        AOS.init({})

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

        gsap.to(img.current, {scrollTrigger: img.current, y: 0, duration: 1, ease: "back.inOut(3)", opacity: 1});
        gsap.to(text.current, {scrollTrigger: text.current, x: 0, duration: 1, ease: "back.inOut(3)", opacity: 1, delay: 0.5});

        verticalTitle.current.forEach((ref) =>{
            gsap.to(ref, {scrollTrigger: ref, y: 0, duration: 0.5, ease: "back.inOut(3)", opacity: 1});
        });
        horizontalTitle.current.forEach((ref) =>{
            gsap.to(ref, {scrollTrigger: ref, x: 0, duration: 0.7, ease: "back.inOut(3)", opacity: 1});
        });
        horizontal.current.forEach((ref) =>{
            gsap.to(ref, {scrollTrigger: ref, x: 0, duration: 1, ease: "back.inOut(3)", opacity: 1});
        })

        // Clean up function
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <div className={`${styles.aboutCont}`} ref={cont}>
            <div className={styles.container} ref={containerRef}>
                <div className={`${styles.panel} ${classes[0]}`} ref={el => panelRefs.current.push(el)}>
                    <div className={styles.imageCont}>
                        <Image src={intro} alt='picture of me' className={styles.img} ref={img}></Image>
                    </div>
                    <div className={styles.nameCont} ref={text}>
                        <p className={styles.nameText}>Hi,</p>
                        <p className={styles.nameText}>I&apos;m Noah</p>
                    </div>
                </div> 

                <div className={`${styles.panel} ${classes[1]}`} ref={el => panelRefs.current.push(el)}>
                    <p className={styles.title} data-aos="fade-down">About Me</p>
                    <div className={styles.content}>
                        <div className={styles.imageCont}>
                            <Image src={about} alt='picture of me' className={styles.img}></Image>
                        </div>
                        <p className={styles.aboutMe}>My name is Noah Santos. I was born and raised here in Arizona. I am a senior in high school and am planning to go to ASU for college.</p>
                    </div>
                </div>

                <div className={`${styles.panel} ${classes[2]}`} ref={el => panelRefs.current.push(el)}>
                    <p className={styles.title} ref={el => verticalTitle.current.push(el)}>Hobbies</p>
                    <div className={`${styles.hobbyCont} ${styles.hobbyContL}`}>
                        <p className={`${styles.hobbyTitle} ${styles.hobbyTitleL}`} ref={el => horizontalTitle.current.push(el)}>Gaming</p>
                        <div className={`${styles.hobbyContent} ${styles.hobbyContentL}`} ref={ref=>horizontal.current.push(ref)}>
                            <div className={styles.hobbyImgCont}>
                                <Image src={gaming} alt='Video Game' className={styles.hobbyImg}></Image>
                            </div>
                            <p className={`${styles.hobbyDesc} ${styles.hobbyDescL}`}>I love playing video games, especially strategy games like the Total War franchise. I also play random games like Risk of Rain 2, War Thunder, and Minecraft.</p>
                        </div>
                    </div>
                    <div className={`${styles.hobbyCont} ${styles.hobbyContR}`}>
                        <p className={`${styles.hobbyTitle} ${styles.hobbyTitleR}`} ref={el => horizontalTitle.current.push(el)}>History</p>
                        <div className={`${styles.hobbyContent} ${styles.hobbyContentR}`} ref={ref=>horizontal.current.push(ref)}>
                            <div className={styles.hobbyImgCont}>
                                <Image src={history} alt='Tank' className={styles.hobbyImg}></Image>
                            </div>
                            <p className={`${styles.hobbyDesc} ${styles.hobbyDescR}`}>I really like reading and watching videos on history, specifically war-related history. WW2 is my favorite history period, and I love learning about events from the war.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`${styles.lastContainer} ${classes[classes.length-1]}`}>
                <div className={`${styles.hobbyCont} ${styles.hobbyContL}`}>
                            <p className={`${styles.hobbyTitle} ${styles.hobbyTitleL}`} ref={el => horizontalTitle.current.push(el)}>Music</p>
                            <div className={`${styles.hobbyContent} ${styles.hobbyContentL}`} ref={ref=>horizontal.current.push(ref)}>
                                <div className={styles.hobbyImgCont}>
                                    <Image src={song} alt='Music' className={styles.hobbyImg}></Image>
                                </div>
                                <p className={`${styles.hobbyDesc} ${styles.hobbyDescL}`}>I listen to a lot of genres of music like lo-fi, pop, phonk, metal, and instrumental. I generally go with phonk as that is my favorite.</p>
                            </div>
                        </div>
                <div className={`${styles.hobbyCont} ${styles.hobbyContR}`}>
                    <p className={`${styles.hobbyTitle} ${styles.hobbyTitleR}`} ref={el => horizontalTitle.current.push(el)}>Walking</p>
                    <div className={`${styles.hobbyContent} ${styles.hobbyContentR}`} ref={ref=>horizontal.current.push(ref)}>
                        <div className={styles.hobbyImgCont}>
                            <Image src={walking} alt='Walking' className={styles.hobbyImg}></Image>
                        </div>
                        <p className={`${styles.hobbyDesc} ${styles.hobbyDescR}`}>I enjoy going on walks around my community center. It&apos;s fun to look at all the scenery, and it is a great way to clear my head.</p>
                    </div>
                </div>    
            </div>
            <div className={`${styles.lastContainer} ${classes[classes.length-1]}`}>
                <div className={`${styles.hobbyCont} ${styles.hobbyContL}`}>
                    <p className={`${styles.hobbyTitle} ${styles.hobbyTitleL}`} ref={el => horizontalTitle.current.push(el)}>Reading</p>
                    <div className={`${styles.hobbyContent} ${styles.hobbyContentL}`} ref={ref=>horizontal.current.push(ref)}>
                        <div className={styles.hobbyImgCont}>
                            <Image src={reading} alt='Reading' className={styles.hobbyImg}></Image>
                        </div>
                        <p className={`${styles.hobbyDesc} ${styles.hobbyDescL}`}>I&apos;ve recently gotten back into reading, and so far, I have read Enders Game, which I enjoyed a lot. I am curently reading some history books on WW2 right now though.</p>
                    </div>
                </div>
                <div className={`${styles.hobbyCont} ${styles.hobbyContR}`}>
                    <p className={`${styles.hobbyTitle} ${styles.hobbyTitleR}`} ref={el => horizontalTitle.current.push(el)}>Traveling</p>
                    <div className={`${styles.hobbyContent} ${styles.hobbyContentR}`} ref={ref=>horizontal.current.push(ref)}>
                        <div className={styles.hobbyImgCont}>
                            <Image src={travel} alt='Travel' className={styles.hobbyImg}></Image>
                        </div>
                        <p className={`${styles.hobbyDesc} ${styles.hobbyDescR}`}>I don&apos;t go on vacation as much, but from past experiences, I really enjoyed my trip to Hawaii and Japan.</p>
                    </div>
                </div>   
            </div>
        </div>
    );
}