'use client';
import styles from '../Styles/scss/project.module.scss';
import history from '../../../public/images/History.jpg';
import Card from '../../components/Card';

export default function Project() {
    return (
        <div className={styles.projectCont}>
            <div className={styles.container}>
                <Card img={history} title={'AAWL'} link={'https://github.com/Noah-Santos/fbla-website-design.git'}></Card>
                <Card img={history} title={'Social Media'} link={'https://github.com/Noah-Santos/social-media.git'}></Card>
                <Card img={history} title={'Active API'} link={'https://github.com/Noah-Santos/Active-Api-Project.git'}></Card>
                <Card img={history} title={'Gamebox'} link={'https://github.com/Noah-Santos/Gamebox.git'}></Card>
                <Card img={history} title={'QuikTek'} link={'https://github.com/Noah-Santos/Client-Final.git'}></Card>
                <Card img={history} title={'Cloud Task Manager'} link={'https://github.com/Noah-Santos/Cloud-Task-Manager.git'}></Card>
                <Card img={history} title={'Summer'} link={'https://github.com/Noah-Santos/Summer-Assignment.git'}></Card>
                <Card img={history} title={'To-Do List'} link={'https://github.com/Noah-Santos/to-do-list-mongo.git'}></Card>
                <Card img={history} title={'JWTs'} link={'https://github.com/Noah-Santos/jwt_challenge2.git'}></Card>
                <Card img={history} title={'MongoDB'} link={'https://github.com/Noah-Santos/mongodb.git'}></Card>
                <Card img={history} title={'Theme Switcher'} link={'https://github.com/Noah-Santos/theme-switcher.git'}></Card>
                <Card img={history} title={'jQuery Profile'} link={'https://github.com/Noah-Santos/jQuery-Profile.git'}></Card>
                <Card img={history} title={'Rigged Election'} link={'https://github.com/Noah-Santos/Voting-For-Nixon.git'}></Card>
                <Card img={history} title={'Tic-Tac-Toe'} link={'https://github.com/Noah-Santos/Tic-Tac-Toe.git'}></Card>
                <Card img={history} title={'Home Page'} link={'https://github.com/Noah-Santos/home-page.git'}></Card>
                <Card img={history} title={'Birthday'} link={'https://github.com/Noah-Santos/birthday_reminder.git'}></Card>
            </div>
        </div>
    );
}