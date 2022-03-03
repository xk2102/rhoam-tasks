import { useState } from "react";
import { BsPlusLg } from "react-icons/bs";
import { GoKebabVertical } from "react-icons/go";
import { MdExpandMore, MdExpandLess } from "react-icons/md";
import styles from "./AddPlan.module.css";

export default function AddPlan() {
  const [addPlanExpand, setAddPlanExpand] = useState(false);
  const COLORS = ["#3689e6", "#28bca3", "#68b723", "#f9c440", "#ffa154", "#ed5353", "#de3e80", "#a56de2", "#8a715e", "#667885"];
  return (
    <div className={styles.addPlan}>
      <div className={styles.header} onClick={() => setAddPlanExpand(!addPlanExpand)}>
        <div className={styles.image}>
          <BsPlusLg />
        </div>
        <div className={styles.label}>Add Plan</div>
        <div className={styles.image}>{addPlanExpand ? <MdExpandMore /> : <MdExpandLess />}</div>
      </div>
      {addPlanExpand && (
        <div className={`animate ${styles.content}`}>
          <div className={styles.colors}>
            {COLORS.map((color, index) => (
              <div key={index} className={styles.color} style={{ backgroundColor: color }}></div>
            ))}
          </div>
          <form>
            <input placeholder="Plan name..."></input>
          </form>
          <div className={styles.actions}>
            <button>RESET</button>
            <button>ADD</button>
          </div>
        </div>
      )}
    </div>
  );
}
