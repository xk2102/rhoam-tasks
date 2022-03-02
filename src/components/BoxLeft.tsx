import styles from "./BoxLeft.module.css";
import { plan } from "../modules/types";
import { BsPlusLg } from "react-icons/bs";
import { GoKebabVertical } from "react-icons/go";
import { useContext } from "react";
import { Global } from "../contexts/Global";

function BoxLeft() {
  // --------------------------------------------------------------
  // --STATE-------------------------------------------------------
  // --------------------------------------------------------------
  const _Global = useContext(Global);
  // --------------------------------------------------------------
  // --HANDLERS----------------------------------------------------
  // --------------------------------------------------------------
  function onClick_handleSelectedList(plan: plan) {
    if (_Global!.selectedPlan === plan) {
      _Global!.setSelectedPlan(null);
    } else {
      _Global!.setSelectedPlan(plan);
    }
  }
  // --------------------------------------------------------------
  // --RETURN------------------------------------------------------
  // --------------------------------------------------------------
  return (
    <div className={styles.BoxLeft}>
      <div className={styles.category}>
        <div className={styles.image}>🌎</div>
        <div className={styles.label}>LOCAL</div>
      </div>
      {_Global?.plans.map((plan, index) => (
        <div className={styles.plan} key={index} onClick={() => onClick_handleSelectedList(plan)}>
          <div className={styles.image}>🌎</div>
          <div className={styles.label}>{plan?.name}</div>
        </div>
      ))}

      <div className={styles.category}>
        <div className={styles.image}>🌎</div>
        <div className={styles.label}>CLOUD</div>
      </div>
      <div className={styles.plan}>
        <div className={styles.image}>🌎</div>
        <div className={styles.label}>plan</div>
      </div>
      <div className={styles.plan}>
        <div className={styles.image}>🌎</div>
        <div className={styles.label}>another plan</div>
      </div>

      <div className={styles.addPlanButton}>
        <div className={styles.image}>
          <BsPlusLg />
        </div>
        <div className={styles.label}>Add Plan</div>
        <div className={styles.config}>
          <GoKebabVertical />
        </div>
      </div>
    </div>
  );
}
export default BoxLeft;
