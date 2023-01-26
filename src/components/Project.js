import styles from './Member.module.css';
import React from 'react';
import dummy from "../db/data.json";
import { Link } from 'react-router-dom';
// import { BrowserRouter, Route, Routes} from 'react-router-dom';

function Project() {
    //dummy.grades
    return (
        <>
            <div id = "panel" className={styles.fpanel2}>
                <Footer2></Footer2>
                <Footer2></Footer2>
            </div>
        </>
    )
}

function Footer2() {

    const [setGrade] = React.useState("1");
    // let list = dummy.people.filter(people => people.id === grade);

    return(
        <div className={styles.footer1}>
            <div className={styles.section}>
                <Link to={'/individualproject'}>
                    <div className={styles.fImg}></div>
                    <div className={styles.ftitle2}>프로젝트명</div>
                    <a href="#!" className={styles.fcontent1}>2022.07.25~2022.07.30</a><br/>
                    <a href="#!" className={styles.fcontent2}>소개를 쓰십시오</a>
                </Link>
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

            <div className="grade">
                    <ul className="grade-list">
                        {
                        dummy.grades.map(grade => (
                            <li key={grade.id}>
                                <button onClick={()=>{setGrade(grade.id)}}>
                                <p>
                                    2021 {grade.grade}
                                </p>
                                </button>
                            </li>
                        ))
 
                        }
                    </ul>
            </div>
            
        </div>
        
    )
}


export default Project;

