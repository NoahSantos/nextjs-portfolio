'use client';
import {useEffect} from 'react';
import styles from '../Styles/scss/project.module.scss';
import Card from '../../components/Card';
import AOS from 'aos';
import 'aos/dist/aos.css';

import AAWL from '../../../public/images/AAWL.png';
import Social from '../../../public/images/Social Media.png';
import API from '../../../public/images/Active-API.png';
import Gamebox from '../../../public/images/Gamebox.png';
import QuikTek from '../../../public/images/QuikTek.png';
import Task from '../../../public/images/Cloud-Task.png';
import Summer from '../../../public/images/Summer.png';
import JWT from '../../../public/images/JWT.png';
import MongoDB from '../../../public/images/MongoDB.png';
import Theme from '../../../public/images/Theme-Switcher.png';
import jQuery from '../../../public/images/jQuery-Profile.png';
import Election from '../../../public/images/Election.png';
import TicTacToe from '../../../public/images/Tic-Tac-Toe.png';
import HomePage from '../../../public/images/Homepage.png';
import Birthday from '../../../public/images/Birthday.png';

export default function Project() {
    useEffect(() => {
        AOS.init({})
    }, [])
    

    return (
        <div className={styles.projectCont}>
            <div className={styles.container}>
                <Card img={AAWL} title={'AAWL'} link={'https://github.com/Noah-Santos/fbla-website-design.git'} animation={"zoom-in-right"}></Card>
                <Card img={Social} title={'Social Media'} link={'https://github.com/Noah-Santos/social-media.git'} animation={"zoom-in-up"}></Card>
                <Card img={API} title={'Active API'} link={'https://github.com/Noah-Santos/Active-Api-Project.git'} animation={"zoom-in-left"}></Card>
                <Card img={Gamebox} title={'Gamebox'} link={'https://github.com/Noah-Santos/Gamebox.git'} animation={"zoom-in-right"}></Card>
                <Card img={QuikTek} title={'QuikTek'} link={'https://github.com/Noah-Santos/Client-Final.git'} animation={"zoom-in-up"}></Card>
                <Card img={Task} title={'Cloud Task Manager'} link={'https://github.com/Noah-Santos/Cloud-Task-Manager.git'} animation={"zoom-in-left"}></Card>
                <Card img={Summer} title={'Summer'} link={'https://github.com/Noah-Santos/Summer-Assignment.git'} animation={"zoom-in-right"}></Card>
                <Card img={JWT} title={'JWTs'} link={'https://github.com/Noah-Santos/jwt_challenge2.git'} animation={"zoom-in-up"}></Card>
                <Card img={MongoDB} title={'MongoDB'} link={'https://github.com/Noah-Santos/mongodb.git'} animation={"zoom-in-left"}></Card>
                <Card img={Theme} title={'Theme Switcher'} link={'https://github.com/Noah-Santos/theme-switcher.git'} animation={"zoom-in-right"}></Card>
                <Card img={jQuery} title={'jQuery Profile'} link={'https://github.com/Noah-Santos/jQuery-Profile.git'} animation={"zoom-in-up"}></Card>
                <Card img={Election} title={'Rigged Election'} link={'https://github.com/Noah-Santos/Voting-For-Nixon.git'} animation={"zoom-in-left"}></Card>
                <Card img={TicTacToe} title={'Tic-Tac-Toe'} link={'https://github.com/Noah-Santos/Tic-Tac-Toe.git'} animation={"zoom-in-right"}></Card>
                <Card img={HomePage} title={'Home Page'} link={'https://github.com/Noah-Santos/home-page.git'} animation={"zoom-in-up"}></Card>
                <Card img={Birthday} title={'Birthday'} link={'https://github.com/Noah-Santos/birthday_reminder.git'} animation={"zoom-in-left"}></Card>
            </div>
        </div>
    );
}