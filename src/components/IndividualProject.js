import styles from "./IndividualProject.module.css";
import { useParams } from "react-router-dom";
import dummy from "../db/project.json";

function IndividualProject() {
  const { name } = useParams();
  const list = dummy.project.find((a) => a.name === name);

  return (
    <div className={styles.container}>
      <div className={styles.project_info}>
        <div className={styles.title}>
          <p className={styles.title_text}>{list.name}</p>
        </div>
        <div className={styles.create_date}>
          <p className={styles.date_text}>
            {list.startDate} ~ {list.endDate}
          </p>
        </div>
        <div className={styles.info}>
          <p className={styles.info_text}>{list.des}</p>
        </div>
      </div>
      <div className={styles.project_img}>
        <div className={styles.a}>
          <img src={list.img} alt="" />
        </div>
        <div className={styles.a}>
          <img src={list.img} alt="" />
        </div>
      </div>
    </div>
  );
}

export default IndividualProject;
