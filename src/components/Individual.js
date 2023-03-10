import styles from './Individual.module.css';
import { useParams } from 'react-router-dom';
import dummy from "../db/data.json";

function Individual() {

    const {name} = useParams();
    const list = dummy.people.find(a => a.name === name);

    return (
        <div className="main">
            <div id = "panel" className={styles.panel}>
                <span className={styles.personName}>{name}</span>
                <div className={styles.personal}>
                    <span className ={styles.hashtag}>#뉴미디어웹솔루션과 #MAS 2기 부원  #유희주</span>
                    <span className ={styles.intro}>{list.intro}</span>
                    <div className={styles.license}>
                        <span className ={styles.plicense}>LICENSE</span>
                        <table className={styles.tg}>
                            <thead>
                            <tr>
                                <th className={styles.tg0lax}>ACA  Adobe Photoshop CC 2015 </th>
                                <th className={styles.tg0lax}>ACA  Adobe Illustrator CC 2015</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td className={styles.tg0lax}>ITQ OA MASTER</td>
                                <td className={styles.tg0lax}>GTQ PS 1급</td>
                            </tr>
                            <tr>
                                <td className={styles.tg0lax}>GTQ AI 1급</td>
                                <td className={styles.tg0lax}></td>
                            </tr>
                            <tr>
                                <td className={styles.tg0lax}></td>
                                <td className={styles.tg0lax}></td>
                            </tr>
                            <tr>
                                <td className={styles.tg0lax}></td>
                                <td className={styles.tg0lax}></td>
                            </tr>
                            </tbody>
                            </table>
                    </div>
                    <div className={styles.Pflagship}>
                        <span className ={styles.pro}>FLAGSHIP PROJECT</span>
                        <table className={styles.tg}>
                            <thead>
                            <tr>
                                <th className={styles.tg0lax}>ACA  Adobe Photoshop CC 2015 </th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td className={styles.tg0lax}>ACA  Adobe Illustrator CC 2015 두 개 정도만 적읍시다</td>
                            </tr>
                            <tr>
                                <td className={styles.tg0lax}></td>
                            </tr>
                            <tr>
                                <td className={styles.tg0lax}></td>
                            </tr>
                            <tr>
                                <td className={styles.tg0lax}></td>
                            </tr>
                            </tbody>
                            </table>
                    </div>
                    <div className={styles.skill}>
                        <span className ={styles.sk}>SKILLS</span>
                        <div className={styles.fWrapper}>
                            <div className={styles.singleChart}>
                            <svg viewBox="0 0 36 36" className={`${styles.circularChart} ${styles.orange}`}>
                                <path className={styles.circleBg}
                                d="M18 2.0845
                                    a 15.9155 15.9155 0 0 1 0 31.831
                                    a 15.9155 15.9155 0 0 1 0 -31.831"/>
                                <path className ={styles.circle}
                                stroke-dasharray="30, 100"
                                d="M18 2.0845
                                    a 15.9155 15.9155 0 0 1 0 31.831
                                    a 15.9155 15.9155 0 0 1 0 -31.831"/>
                                <text x="18" y="20.35" className={styles.percentage}>30%</text>
                            </svg>
                            <text className={styles.skillKind1}>PHOTOSHOP</text>
                            </div>
                            
                            <div className={styles.singleChart}>
                            <svg viewBox="0 0 36 36" className={`${styles.circularChart} ${styles.orange}`}>
                                <path className={styles.circleBg}
                                d="M18 2.0845
                                    a 15.9155 15.9155 0 0 1 0 31.831
                                    a 15.9155 15.9155 0 0 1 0 -31.831"/>
                                <path className ={styles.circle}
                                stroke-dasharray="30, 100"
                                d="M18 2.0845
                                    a 15.9155 15.9155 0 0 1 0 31.831
                                    a 15.9155 15.9155 0 0 1 0 -31.831"/>
                                <text x="18" y="20.35" className={styles.percentage}>30%</text>
                            </svg>
                            <text className={styles.skillKind1}>PHOTOSHOP</text>
                            </div>
                        
                            <div className={styles.singleChart}>
                            <svg viewBox="0 0 36 36" className={`${styles.circularChart} ${styles.orange}`}>
                                <path className={styles.circleBg}
                                d="M18 2.0845
                                    a 15.9155 15.9155 0 0 1 0 31.831
                                    a 15.9155 15.9155 0 0 1 0 -31.831"/>
                                <path className ={styles.circle}
                                stroke-dasharray="30, 100"
                                d="M18 2.0845
                                    a 15.9155 15.9155 0 0 1 0 31.831
                                    a 15.9155 15.9155 0 0 1 0 -31.831"/>
                                <text x="18" y="20.35" className={styles.percentage}>30%</text>
                            </svg>
                            <text className={styles.skillKind1}>PHOTOSHOP</text>
                            </div>

                            <div className={styles.singleChart}>
                            <svg viewBox="0 0 36 36" className={`${styles.circularChart} ${styles.orange}`}>
                                <path className={styles.circleBg}
                                d="M18 2.0845
                                    a 15.9155 15.9155 0 0 1 0 31.831
                                    a 15.9155 15.9155 0 0 1 0 -31.831"/>
                                <path className ={styles.circle}
                                stroke-dasharray="30, 100"
                                d="M18 2.0845
                                    a 15.9155 15.9155 0 0 1 0 31.831
                                    a 15.9155 15.9155 0 0 1 0 -31.831"/>
                                <text x="18" y="20.35" className={styles.percentage}>30%</text>
                            </svg>
                            <text className={styles.skillKind1}>PHOTOSHOP</text>
                            </div>

                            <div className={styles.singleChart}>
                            <svg viewBox="0 0 36 36" className={`${styles.circularChart} ${styles.orange}`}>
                                <path className={styles.circleBg}
                                d="M18 2.0845
                                    a 15.9155 15.9155 0 0 1 0 31.831
                                    a 15.9155 15.9155 0 0 1 0 -31.831"/>
                                <path className ={styles.circle}
                                stroke-dasharray="60, 100"
                                d="M18 2.0845
                                    a 15.9155 15.9155 0 0 1 0 31.831
                                    a 15.9155 15.9155 0 0 1 0 -31.831"/>
                                <text x="18" y="20.35" className={styles.percentage}>60%</text>
                            </svg>
                            <text className={styles.skillKind1}>PHOTOSHOP</text>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.arrow}>
                <img className ={styles.imgArrow} src="../img/PROJEcT VIEW.png" alt=""/>
                <span className={styles.textArrow} id={styles.arrow}>View more 1ST PROJECT</span>
            </div>

            <div className={styles.moto}>
                <span className ={styles.pMoto}>YOUR MOTO</span>
            </div>

        </div>
    )
}

export default Individual;