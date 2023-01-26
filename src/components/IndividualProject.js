import styles from './IndividualProject.module.css';
import React from 'react';
// import { Link } from 'react-router-dom';

function IndividualProject() {
    //dummy.grades
    return (
        <>
            <div id = "panel" className={styles.fpanel2}>
                <Member1></Member1>
            </div>
            
        </>
    )
}

function Member1() {
    return(         
        <div className={styles.container}>
            <div className={styles.project_info}>
                <div className={styles.title}>
                    <p className={styles.title_text}>프로젝트명</p>
                </div>
                <div className={styles.create_date}>
                    <p className={styles.date_text}>2022.02.02 ~ 2022.03.03</p></div>
                <div className={styles.info}>
                    <p className={styles.info_text}>머시머시머시기머시머기머시머시머시기머시머기머시머시머시기머시머기시머시기머시머기머시머시머시기머시머기머시머시머시기머시머기머시머시머시기머시머기머시머시머시기머시머기머시머시머시기머시머기머시머시머시기머시머기머시머시머시기머시머기머시머시머시기머시머기머시머시머시기머시머기머시머시머시기머시머기</p></div>
            </div>
            <div className={styles.project_img}>
                {/* <img src="https://cdn.travie.com/news/photo/first/201710/img_19975_1.jpg"/>
                <img src="https://t1.daumcdn.net/cfile/tistory/9906804C5FB7337315"/> */}
                <div className={styles.a}></div>
                <div className={styles.a}></div>
            </div>

        </div>
    )
}


export default IndividualProject;