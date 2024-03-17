import styles from "./Individual.module.css";
import { useParams } from "react-router-dom";
import dummy from "../db/data.json";

function Individual() {
  const { name } = useParams();
  const list = dummy.people.find((a) => a.name === name);

  return (
    <div className="main">
      <div id="panel" className={styles.panel}>
        <span className={styles.personName}>{name}</span>
        <div className={styles.personal}>
          <span className={styles.hashtag}>
            {list.tag}
          </span>
          <span className={styles.intro}>{list.intro}</span>
          <div className={styles.license}>
            <span className={styles.plicense}>LICENSE</span>
            <div className={styles.tg}>
              {list.licenses.map((item, index) => (
                <div key={index} className={styles.tg0lax}>
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className={styles.Pflagship}>
            <span className={styles.pro}>FLAGSHIP PROJECT</span>
            <div className={styles.tg}>
            {list.projects.map((item, index) => (
                <div key={index} className={styles.tg0lax}>
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className={styles.skill}>
            <span className={styles.sk}>SKILLS</span>
            <div className={styles.fWrapper}>
            {list.skills.map((item, index) => (
                <div className={styles.singleChart}>
                <svg
                  viewBox="0 0 36 36"
                  className={`${styles.circularChart} ${styles.orange}`}
                >
                  <path
                    className={styles.circleBg}
                    d="M18 2.0845
                                    a 15.9155 15.9155 0 0 1 0 31.831
                                    a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <path
                    className={styles.circle}
                    stroke-dasharray={item.percent+", 100"}
                    d="M18 2.0845
                                    a 15.9155 15.9155 0 0 1 0 31.831
                                    a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <text x="18" y="20.35" className={styles.percentage}>
                    {item.percent}%
                  </text>
                </svg>
                <text className={styles.skillKind1}>{item.name}</text>
              </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.arrow}>
        <img className={styles.imgArrow} src="../img/PROJEcT VIEW.png" alt="" />
        {/* <span className={styles.textArrow} id={styles.arrow}>
          View more 1ST PROJECT
        </span> */}
      </div>

      <div className={styles.moto}>
        <span className={styles.pMoto}>YOUR MOTO</span>
      </div>
    </div>
  );
}

export default Individual;
