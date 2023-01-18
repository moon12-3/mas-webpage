import styles from './Member.module.css';
import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';

function Project() {
    //dummy.grades
    return (
        <BrowserRouter>
            
            <Routes>
                <Route path="/" element={<Footer2 />}/>
            </Routes>
            
            <div id = "panel" className={styles.fpanel2}>
                <Footer2></Footer2>
                <Footer2></Footer2>
            </div>
            
        </BrowserRouter>
    )
}

function Footer2() {
    return(
        <div className={styles.footer1}>
            <div className={styles.section}>
                <div className={styles.fImg}></div>
                <div className={styles.ftitle2}>프로젝트명</div>
                <a href="#!" className={styles.fcontent1}>2022.07.25~2022.07.30</a><br/>
                <a href="#!" className={styles.fcontent2}>소개를 쓰십시오</a>
            </div>
            <div className={styles.section}>
                <div className={styles.fImg}></div>
                <div className={styles.ftitle2}>프로젝트명</div>
                <a href="#!" className={styles.fcontent1}>2022.07.25~2022.07.30</a><br/>
                <a href="#!" className={styles.fcontent2}>소개를 쓰십시오</a>
            </div>
            <div className={styles.section}>
                <div className={styles.fImg}></div>
                <div className={styles.ftitle2}>프로젝트명</div>
                <a href="#!" className={styles.fcontent1}>2022.07.25~2022.07.30</a><br/>
                <a href="#!" className={styles.fcontent2}>소개를 쓰십시오</a>
            </div>       
        </div>
    )
}


export default Project;

