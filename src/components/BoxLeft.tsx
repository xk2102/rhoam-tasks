import styles from "./BoxLeft.module.css";
import { plan } from "../modules/types";
import { useContext, useState } from "react";
import { Global } from "../contexts/Global";
import AddPlan from "./AddPlan";

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
      <div className={styles.top}>
        <div className={styles.category}>
          <div className={styles.image}>🌎</div>
          <div className={styles.label}>LOCAL</div>
        </div>
        {_Global!.plans.map((plan, index) => (
          <div className={styles.plan} key={index} onClick={() => onClick_handleSelectedList(plan)}>
            <div className={styles.image}>
              <div className={styles.color} style={{ backgroundColor: plan.color }}></div>
            </div>
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
      </div>
      <div className={styles.bottom}>
        <AddPlan />
      </div>
    </div>
  );
}
export default BoxLeft;
