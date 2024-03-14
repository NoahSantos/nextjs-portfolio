"use client"

// import {useRef, useEffect} from 'react';
// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";

// export default function Header() {
//     useGSAP(() => {
//         document.querySelectorAll(".box").forEach(function(box) {
//             box.addEventListener("click", function() {
//                 gsap.to(".box", {
//                 duration: 0.5, 
//                 opacity: 0, 
//                 y: -100, 
//                 stagger: 0.1,
//                 ease: "back.in"
//                 });
//             });
//         });
//     });

//     return (
//         <div>
//             <div className="box">hel</div>
//             <div className="box">hel</div>
//             <div className="box">hel</div>
//             <div className="box">hel</div>
//             <div className="box">hel</div>
//             <div className="box">hel</div>
//             <div className="box">hel</div>
//             <div className="box">hel</div>
//             <div className="box">hel</div>
//             <div className="box">hel</div>
//             <div className="box">hel</div>
//             <div className="box">hel</div>
//         </div>
//     )
// }


// import {gsap} from "gsap";
// import { useGSAP } from "@gsap/react";

// const { useRef } = 'react';

// export default function Header() {
//     const container = useRef();
//     const circle = useRef();

//     useGSAP(() => {
//         // use selectors...
//         gsap.to(".box", { rotation: "+=360", duration: 3 });

//         // or refs...
//         gsap.to(circle.current, { rotation: "-=360", duration: 3 });
//         },
//         { scope: container }
//     ); // <-- scope for selector text (optional)

//     return (
//         <div className="App">
//         <div ref={container} className="container">
//             <div className="box gradient-blue">selector</div>
//             <div className="circle gradient-green" ref={circle}>
//             Ref
//             </div>
//         </div>
//         <div className="box gradient-blue">selector</div>
//         </div>
//     );
// }
import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import styles from './header.module.css';
// import "./styles.css";

export default function Header() {
    const app = useRef();
    let box = useRef();

    const onEnter = ({ currentTarget }) => {
        console.log('enter')
        console.log(box)
        // let q = gsap.utils.selector(box);
        // gsap.to(box, { backgroundColor: "#e77614", scale: 1.2 });
        // gsap.to(q("p"), { rotation: 360})
        gsap.to(currentTarget, { rotation: 27, x: 100, duration: 1 });
    };
    
    const onLeave = ({ currentTarget }) => {
        // let q = gsap.utils.selector(box);
        // gsap.to(box, { backgroundColor: "#28a92b", scale: 1 });
        // gsap.to(q("p"), { rotation: -360})
        gsap.to(currentTarget, { rotation: 0, x: 0, duration: 1 });
    };

    // function transition(){
        // useLayoutEffect(() => {
        
        //     let ctx = gsap.context(() => {
        //     // all your animations go in here...
        //         document.querySelectorAll(".box").forEach(function(box) {
        //             box.addEventListener("click", function() {
        //                 gsap.to(".box", {
        //                 duration: 0.5, 
        //                 opacity: 0.5, 
        //                 y: -100, 
        //                 stagger: 0.1,
        //                 ease: "back.in"
        //                 });
        //             });
        //         });
        //         // document.querySelectorAll(".box")
        //         // gsap.to(".box", { rotation: "+=360" });
        //     }, root); // <- scopes all selector text to the root element

        //     return () => ctx.revert();
        // }, []);

    // }
    
    return (
        <div ref={app} className={styles.app} onMouseEnter={onEnter} onMouseLeave={onLeave}>
            <div ref={box} className={styles.box}>Hello</div>
            <div ref={box} className={styles.box}>hello</div>
            <div ref={box} className={styles.box}>hello</div>
            <div ref={box} className={styles.box}>hel</div>
            <div ref={box} className={styles.box}>hel</div>
            <div ref={box} className={styles.box}>hel</div>
            <div ref={box} className={styles.box}>hel</div>
            <div ref={box} className={styles.box}>hel</div>
            <div ref={box} className={styles.box}>hel</div>
        </div>
    );
}