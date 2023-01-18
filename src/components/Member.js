import styles from './Member.module.css';
import React from 'react';
import dummy from "../db/data.json";
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Individual from './Individual';

function Member() {
    //dummy.grades
    return (
        <BrowserRouter>
            
            <Routes>
                <Route path="/" element={<Member1/>}/>
                <Route path="/indi/:name" element={<Individual/>}/>
            </Routes>
            
            <div id = "panel" className={styles.fpanel2}>
                <Footer2></Footer2>
                <Footer2></Footer2>
            </div>
            
        </BrowserRouter>
    )
}

function Member1() {
    const [grade, setGrade] = React.useState("1");
    let list = dummy.people.filter(people => people.id === grade);
    console.log(list);
    return(
        <div className={styles.panel2}>
            <div className={styles.fpanel3}>
                <div className={styles.section}>
                    <div className={styles.ftitle}>유병석</div>
                    <a href="#!" className={styles.fcontent1}>MAS 담당 교사</a><br/>
                    <a href="#!" className={styles.fcontent2}>안녕하세요. 마스 1.5기의 부장을 맡고 있는 이현정입니다. 자기소개 뭐라고 함? 이 자리에 세 줄 정도 정리되면 딱 좋을 것 같은데...</a>
                </div>             
            </div>
            <div className={styles.fpanel}>
                {
                    list.map(person => (
                        <div className={styles.section}>
                            <Link to={`/indi/${person.name}`}>
                                <div className={styles.ftitle}>{person.name}</div>
                                <a href="#!" className={styles.fcontent1}>{person.role}</a><br/>
                                <a href="#!" className={styles.fcontent2}>{person.intro}</a>
                            </Link>
                        </div>
                        ))
                }
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



export default Member;

