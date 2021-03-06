import styles from "./BoxRight.module.css";
import Plan from "./Plan";
import { useContext } from "react";
import { Global } from "../contexts/Global";
import { FaList } from "react-icons/fa";
// --------------------------------------------------------------
// --TYPES-------------------------------------------------------
// --------------------------------------------------------------
function BoxRight() {
  // --------------------------------------------------------------
  // --STATE-------------------------------------------------------
  // --------------------------------------------------------------
  const _Global = useContext(Global);
  // --------------------------------------------------------------
  // --HANDLERS----------------------------------------------------
  // --------------------------------------------------------------
  // --------------------------------------------------------------
  // --RENDERS-----------------------------------------------------
  // --------------------------------------------------------------
  // --------------------------------------------------------------
  // --RETURN------------------------------------------------------
  // --------------------------------------------------------------
  if (_Global!.selectedPlan === null) {
    return (
      <div className={styles.BoxRightEmpty}>
        <h1>RHOAM TASKS</h1>
        <span>Select a plan..!</span>
      </div>
    );
  } else {
    return (
      <div className={styles.BoxRight}>
        <Plan selectedPlan={_Global!.selectedPlan} />
      </div>
    );
  }
}
export default BoxRight;
