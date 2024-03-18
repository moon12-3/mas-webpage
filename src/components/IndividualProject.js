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
        {list.img.map((image, index) => (
          <div className={styles.a} key={index}>
            <img src={`${process.env.PUBLIC_URL}/assets/${image}`} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default IndividualProject;
