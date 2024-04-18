'use client'
import styles from '../app/Styles/scss/about.module.scss';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';
import intro from '../../public/images/About.JPG';
import about from '../../public/images/Noah-Chair.jpeg';
import gaming from '../../public/images/Total War.jpg'

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
                        <div className={`${styles.panel} ${classes[0]}`} ref={el => panelRefs.current.push(el)}>
                            <div className={styles.imageCont}>
                                <Image src={intro} alt='picture of me' className={styles.img}></Image>
                            </div>
                            <div className={styles.nameCont}>
                                <p className={styles.nameText}>Hi,</p>
                                <p className={styles.nameText}>I&apos;m Noah</p>
                            </div>
                        </div> 

                        <div className={`${styles.panel} ${classes[1]}`} ref={el => panelRefs.current.push(el)}>
                            <p className={styles.title}>About Me</p>
                            <div className={styles.content}>
                                <div className={styles.imageCont}>
                                    <Image src={about} alt='picture of me' className={styles.img}></Image>
                                </div>
                                <p className={styles.aboutMe}>My name is Noah Santos. I was born and raised here in Arizona. I am a senior in high school and am planning to go to ASU for college.</p>
                            </div>
                        </div>

                        <div className={`${styles.panel} ${classes[2]}`} ref={el => panelRefs.current.push(el)}>
                            <p className={styles.title}>Hobbies</p>
                            <div className={`${styles.hobbyCont} ${styles.hobbyContL}`}>
                                <p className={styles.hobbyTitle}>Gaming</p>
                                <div className={`${styles.hobbyContent} ${styles.hobbyContentL}`}>
                                    <div className={styles.hobbyImgCont}>
                                        <Image src={gaming} alt='Video Game' className={styles.hobbyImg}></Image>
                                    </div>
                                    <p className={`${styles.hobbyDesc} ${styles.hobbyDescL}`}>I love playing video games, especially strategy games like the Total War franchise. I also play random games like Risk of Rain 2, War Thunder, and Minecraft.</p>
                                </div>
                            </div>
                            <div className={`${styles.hobbyCont} ${styles.hobbyContR}`}>
                                <p className={styles.hobbyTitle}>History</p>
                                <div className={`${styles.hobbyContent} ${styles.hobbyContentR}`}>
                                    <div className={styles.hobbyImgCont}>
                                        <Image src={gaming} alt='Video Game' className={styles.hobbyImg}></Image>
                                    </div>
                                    <p className={`${styles.hobbyDesc} ${styles.hobbyDescR}`}>I really like reading and watching videos on history, specifically war-related history. WW2 is my favorite history period, and I love learning about events from the war.</p>
                                </div>
                            </div>
                        </div>
                    </> : 
                    <>
                        <div className={`${classes[0]} ${styles.panel}`} ref={el => panelRefs.current.push(el)}>
                            <div className={`${styles.hobbyCont} ${styles.hobbyContL}`}>
                                <p className={styles.hobbyTitle}>Reading</p>
                                <div className={`${styles.hobbyContent} ${styles.hobbyContentL}`}>
                                    <div className={styles.hobbyImgCont}>
                                        <Image src={gaming} alt='Video Game' className={styles.hobbyImg}></Image>
                                    </div>
                                    <p className={`${styles.hobbyDesc} ${styles.hobbyDescL}`}>I&apos;ve recently gotten back into reading, and so far, I have read Enders Game, which I enjoyed a lot. I am curently reading some history books on WW2 right now though.</p>
                                </div>
                            </div>
                            <div className={`${styles.hobbyCont} ${styles.hobbyContR}`}>
                                <p className={styles.hobbyTitle}>Traveling</p>
                                <div className={`${styles.hobbyContent} ${styles.hobbyContentR}`}>
                                    <div className={styles.hobbyImgCont}>
                                        <Image src={gaming} alt='Video Game' className={styles.hobbyImg}></Image>
                                    </div>
                                    <p className={`${styles.hobbyDesc} ${styles.hobbyDescR}`}>I don&apos;t go on vacation as much, but from past experiences, I really enjoyed my trip to Hawaii and Japan.</p>
                                </div>
                            </div>
                        </div>

                        <div className={`${classes[1]} ${styles.panel}`} ref={el => panelRefs.current.push(el)}>
                            <div className={styles.first}>2</div>
                        </div>

                        <div className={`${styles.lastContainer} ${classes[classes.length-1]}`}>

                        </div>
                    </>
                }
            </div>

            {section === 1 ? 
                <div className={`${styles.lastContainer} ${classes[classes.length-1]}`}>
                    <div className={`${styles.hobbyCont} ${styles.hobbyContL}`}>
                                <p className={styles.hobbyTitle}>Music</p>
                                <div className={`${styles.hobbyContent} ${styles.hobbyContentL}`}>
                                    <div className={styles.hobbyImgCont}>
                                        <Image src={gaming} alt='Video Game' className={styles.hobbyImg}></Image>
                                    </div>
                                    <p className={`${styles.hobbyDesc} ${styles.hobbyDescL}`}>I listen to a lot of genres of music like lo-fi, pop, phonk, metal, and instrumental. I generally go with phonk as that is my favorite.</p>
                                </div>
                            </div>
                    <div className={`${styles.hobbyCont} ${styles.hobbyContR}`}>
                        <p className={styles.hobbyTitle}>Walking</p>
                        <div className={`${styles.hobbyContent} ${styles.hobbyContentR}`}>
                            <div className={styles.hobbyImgCont}>
                                <Image src={gaming} alt='Video Game' className={styles.hobbyImg}></Image>
                            </div>
                            <p className={`${styles.hobbyDesc} ${styles.hobbyDescR}`}>I enjoy going on walks around my community center. It&apos;s fun to look at all the scenery, and it is a great way to clear my head.</p>
                        </div>
                    </div>    
                </div> : 
                <div className={`${styles.lastContainer} ${classes[classes.length-1]}`}>
                    
                </div>
            }
        </div>
    );
}