'use client';
import {useEffect} from 'react';
import styles from '../Styles/scss/project.module.scss';
import history from '../../../public/images/History.jpg';
import Card from '../../components/Card';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Project() {
    useEffect(() => {
        AOS.init({})
    }, [])
    

    return (
        <div className={styles.projectCont}>
            <div className={styles.container}>
                <Card img={history} title={'AAWL'} link={'https://github.com/Noah-Santos/fbla-website-design.git'} animation={"zoom-in-right"}></Card>
                <Card img={history} title={'Social Media'} link={'https://github.com/Noah-Santos/social-media.git'} animation={"zoom-in-up"}></Card>
                <Card img={history} title={'Active API'} link={'https://github.com/Noah-Santos/Active-Api-Project.git'} animation={"zoom-in-left"}></Card>
                <Card img={history} title={'Gamebox'} link={'https://github.com/Noah-Santos/Gamebox.git'} animation={"zoom-in-right"}></Card>
                <Card img={history} title={'QuikTek'} link={'https://github.com/Noah-Santos/Client-Final.git'} animation={"zoom-in-up"}></Card>
                <Card img={history} title={'Cloud Task Manager'} link={'https://github.com/Noah-Santos/Cloud-Task-Manager.git'} animation={"zoom-in-left"}></Card>
                <Card img={history} title={'Summer'} link={'https://github.com/Noah-Santos/Summer-Assignment.git'} animation={"zoom-in-right"}></Card>
                <Card img={history} title={'To-Do List'} link={'https://github.com/Noah-Santos/to-do-list-mongo.git'} animation={"zoom-in-up"}></Card>
                <Card img={history} title={'JWTs'} link={'https://github.com/Noah-Santos/jwt_challenge2.git'} animation={"zoom-in-left"}></Card>
                <Card img={history} title={'MongoDB'} link={'https://github.com/Noah-Santos/mongodb.git'} animation={"zoom-in-right"}></Card>
                <Card img={history} title={'Theme Switcher'} link={'https://github.com/Noah-Santos/theme-switcher.git'} animation={"zoom-in-up"}></Card>
                <Card img={history} title={'jQuery Profile'} link={'https://github.com/Noah-Santos/jQuery-Profile.git'} animation={"zoom-in-left"}></Card>
                <Card img={history} title={'Rigged Election'} link={'https://github.com/Noah-Santos/Voting-For-Nixon.git'} animation={"zoom-in-right"}></Card>
                <Card img={history} title={'Tic-Tac-Toe'} link={'https://github.com/Noah-Santos/Tic-Tac-Toe.git'} animation={"zoom-in-up"}></Card>
                <Card img={history} title={'Home Page'} link={'https://github.com/Noah-Santos/home-page.git'} animation={"zoom-in-left"}></Card>
                <Card img={history} title={'Birthday'} link={'https://github.com/Noah-Santos/birthday_reminder.git'} animation={"zoom-in-up"}></Card>
            </div>
        </div>
    );
}