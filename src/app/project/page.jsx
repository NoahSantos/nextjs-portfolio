'use client';
import styles from '../Styles/scss/project.module.scss';
import Image from 'next/image';
import history from '../../../public/images/History.jpg';
import Card from '../../components/Card';

export default function About() {
    return (
        <div className={styles.projectCont}>
            <div className={styles.container}>
                <Card img={history} title={'New album is released!'}></Card>
                <Card img={history} title={'New album is released!'}></Card>
                <Card img={history} title={'New album is released!'}></Card>
                <Card img={history} title={'New album is released!'}></Card>
            </div>
        </div>
    );
}