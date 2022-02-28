import styles from "./BoxLeft.module.css";
import { plan } from "../modules/types";
import { BsPlusLg } from "react-icons/bs";
import { GoKebabVertical } from "react-icons/go";
// --------------------------------------------------------------
// --TYPES-------------------------------------------------------
// --------------------------------------------------------------
type BoxLeftProps = {
  plans: plan[];
  selectedPlan: plan;
  setSelectedPlan: React.Dispatch<React.SetStateAction<plan | null>>;
};
// --------------------------------------------------------------
// --RFC---------------------------------------------------------
// --------------------------------------------------------------
function BoxLeft({ plans, selectedPlan, setSelectedPlan }: BoxLeftProps) {
  // --------------------------------------------------------------
  // --RENDERS-----------------------------------------------------
  // --------------------------------------------------------------
  // --------------------------------------------------------------
  // --HANDLERS----------------------------------------------------
  // --------------------------------------------------------------
  function onClick_handleSelectedList(plan: plan) {
    if (selectedPlan === plan) {
      setSelectedPlan(null);
    } else {
      setSelectedPlan(plan);
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
      {plans.map((plan, index) => (
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
