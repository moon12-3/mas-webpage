import styles from "./Member.module.css";
import { useState } from "react";
import dummy from "../db/project.json";
import { Link } from "react-router-dom";

function Project() {
  //dummy.grades
  return <ProjectContainer />;
}

function ProjectContainer() {
  const [grade, setGrade] = useState("2");
  let list = dummy.project.filter((project) => project.id === grade);

  return (
    <>
      <div className={styles.panel2}>
        <div className={styles.fpanel}>
          {list.map((project, index) => (
            <div key={index} className={styles.section}>
              <Link to={`/indi-project/${project.name}`}>
                <img className={styles.fImg} src={project.img} alt="" />
                <div className={styles.ftitle2}>{project.name}</div>
                <span className={styles.fcontent1}>
                  {project.startDate} ~ {project.endDate}
                </span>
                <span className={styles.fcontent2}>{project.thumbDes}</span>
              </Link>
            </div>
          ))}
        </div>
        <div className="grade">
          <ul className="grade-list">
            {dummy.grades.map((grade) => (
              <li key={grade.id}>
                <button
                  onClick={() => {
                    setGrade(grade.id);
                  }}
                >
                  <p>2024 {grade.grade}</p>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Project;
