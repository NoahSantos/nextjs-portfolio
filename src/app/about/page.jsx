'use client'
import styles from '../Styles/scss/about.module.scss';
import Scrolling from '../../components/Scrolling'

export default function About() {

    let classOne = [styles.intro, styles.about, styles.hobbies, styles.hobbySection];
    let classTwo = [styles.hobbies, styles.timeline, styles.timeSection]

    return (
        <div className={styles.testCont}>
            <Scrolling classes={classOne} boxes={3}></Scrolling>
            <Scrolling classes={classTwo} boxes={2}></Scrolling>
        </div>
    );
}