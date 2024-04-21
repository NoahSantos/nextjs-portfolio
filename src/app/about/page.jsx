'use client'
import styles from '../Styles/scss/about.module.scss';
import Scrolling from '../../components/Scrolling'

export default function About() {

    let classOne = [styles.intro, styles.about, styles.hobbies];
    let classTwo = [styles.hobbies, styles.timeline]

    return (
        <div className={styles.testCont}>
            <Scrolling classes={classOne} boxes={3} section={1}></Scrolling>
            {/* <Scrolling classes={classTwo} boxes={2} section={2}></Scrolling> */}
        </div>
    );
}