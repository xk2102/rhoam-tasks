import styles from "./BoxRight.module.css";
import { plan } from "../modules/types";
import React, { useState } from "react";
// --------------------------------------------------------------
// --TYPES-------------------------------------------------------
// --------------------------------------------------------------
type BoxRightProps = {
  selectedPlan: plan;
  addTaskToAPlan: (selectedPlanName: string, taskDescription: string) => void;
};
// --------------------------------------------------------------
// --RFC---------------------------------------------------------
// --------------------------------------------------------------
function BoxRight({ selectedPlan, addTaskToAPlan }: BoxRightProps) {
  // --------------------------------------------------------------
  // --STATE-------------------------------------------------------
  // --------------------------------------------------------------
  const [input, setInput] = useState("");
  // --------------------------------------------------------------
  // --HANDLERS----------------------------------------------------
  // --------------------------------------------------------------
  function onChange_handleInput(event: React.ChangeEvent<HTMLInputElement>): void {
    setInput(event.target.value);
  }
  function onClick_handleSubmit(event: React.MouseEvent<HTMLButtonElement, MouseEvent>, selectedListName: string, taskDescription: string): void {
    event.preventDefault();
    addTaskToAPlan(selectedListName, taskDescription);
    setInput("");
  }
  // --------------------------------------------------------------
  // --RENDERS-----------------------------------------------------
  // --------------------------------------------------------------
  function renderSelectedPlanTasks(selectedPlan: plan): JSX.Element[] | null {
    if (selectedPlan) {
      return selectedPlan?.tasks.map((task, index) => <div key={index}>{task.description}</div>);
    } else {
      return null;
    }
  }
  // --------------------------------------------------------------
  // --RETURN------------------------------------------------------
  // --------------------------------------------------------------
  return (
    <div className={styles.BoxRight}>
      {selectedPlan && (
        <>
          <div className={styles.plan}>
            <div className={styles.planHeader}>
              <div className={styles.image}>🌎</div>
              <div className={styles.label}>{selectedPlan.name}</div>
              <div className={styles.config}>⋮</div>
            </div>
            <div className={styles.planContent}>content</div>
            {/* <div className={styles.planFooter}> */}
            <form className={styles.planFooter}>
              <div className={styles.image}>
                <button type="submit" onClick={(event) => onClick_handleSubmit(event, selectedPlan.name, input)}>
                  ➕
                </button>
              </div>
              <div className={styles.input}>
                <input value={input} onChange={(event) => onChange_handleInput(event)}></input>
              </div>
            </form>
            {/* </div> */}
          </div>
        </>
      )}
    </div>
  );
}
export default BoxRight;
