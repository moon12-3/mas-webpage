import styles from './Member.module.css';
import Header from './Header';
import dummy from "../db/data.json";

function Member() {
    //dummy.grades
    
    return (
        <div>
            <Header type = "2"></Header>
            <div id = "panel" className={styles.panel}>
                
            </div>
            
            <Member1></Member1>

            <div id = "panel" className={styles.fpanel2}>
                <Footer2></Footer2>
                <Footer2></Footer2>
            </div>
            
        </div>
    )
}

function Member1() {
    const grade = "1";
    const list = dummy.people.filter(people => people.id === grade);
    let a = 0;
    return(
        <div className={styles.fpanel}>
            {list.map(person => {
                if(a==0) {
                    a++;
                    return(
                        <>
                            <div className={styles.section}>
                                <div className={styles.ftitle}>유병석</div>
                                <a className={styles.fcontent1}>MAS 담당 교사</a><br/>
                                <a className={styles.fcontent2}>안녕하세요. 마스 1.5기의 부장을 맡고 있는 이현정입니다. 자기소개 뭐라고 함? 이 자리에 세 줄 정도 정리되면 딱 좋을 것 같은데...</a>
                            </div>
                            <div className={styles.section}>
                                <div className={styles.ftitle}>{person.name}</div>
                                <a className={styles.fcontent1}>{person.role}</a><br/>
                                <a className={styles.fcontent2}>{person.intro}</a>
                            </div>
                        </>
                    )
                }
                else if(a%2==0) {
                    a++;
                    return(
                        <>
                            <div className={styles.section}></div>
                            <div className={styles.section}>
                                <div className={styles.ftitle}>{person.name}</div>
                                <a className={styles.fcontent1}>{person.role}</a><br/>
                                <a className={styles.fcontent2}>{person.intro}</a>
                            </div>
                        </>
                    )
                }
                a++;
                return(
                <div className={styles.section}>
                    <div className={styles.ftitle}>{person.name}</div>
                    <a className={styles.fcontent1}>{person.role}</a><br/>
                    <a className={styles.fcontent2}>{person.intro}</a>
                </div>)
            })
            }
        </div>
    )
}

function Footer1() {
    return (
                <div >
                    <div className={styles.section}>
                        <div className={styles.ftitle}>유병석</div>
                        <a className={styles.fcontent1}>MAS 담당 교사</a><br/>
                        <a className={styles.fcontent2}>안녕하세요. 마스 1.5기의 부장을 맡고 있는 
                            이현정입니다. 자기소개 뭐라고 함? 이 자리에
                            세 줄 정도 정리되면 딱 좋을 것 같은데...</a>
                    </div>
                    <div className={styles.section}>
                        <a className={styles.ftitle}>
                        <div className={styles.ftitle}>김유진</div>
                        <a className={styles.fcontent1}>부장 / 21기 DESIGN</a><br/>
                        <a className={styles.fcontent2}>소개</a>
                        </a>
                    </div>
                    <div className={styles.section}>
                        <div className={styles.ftitle}>김유나</div>
                        <a className={styles.fcontent1} >부부장 / 21기 SOFTWARE</a><br/>
                        <a className={styles.fcontent2}>소개</a>
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
                <a className={styles.fcontent1}>2022.07.25~2022.07.30</a><br/>
                <a className={styles.fcontent2}>소개를 쓰십시오</a>
            </div>
            <div className={styles.section}>
                <div className={styles.fImg}></div>
                <div className={styles.ftitle2}>프로젝트명</div>
                <a className={styles.fcontent1}>2022.07.25~2022.07.30</a><br/>
                <a className={styles.fcontent2}>소개를 쓰십시오</a>
            </div>
            <div className={styles.section}>
                <div className={styles.fImg}></div>
                <div className={styles.ftitle2}>프로젝트명</div>
                <a className={styles.fcontent1}>2022.07.25~2022.07.30</a><br/>
                <a className={styles.fcontent2}>소개를 쓰십시오</a>
            </div>       
        </div>
    )
}


export default Member;

