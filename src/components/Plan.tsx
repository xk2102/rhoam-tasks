import React, { useState, useContext } from "react";
import { Global } from "../contexts/Global";
import styles from "./BoxRight.module.css";
import { plan } from "../modules/types";
import { MdOutlineCheckBoxOutlineBlank, MdOutlineCheckBox } from "react-icons/md";
import { BsPlusLg } from "react-icons/bs";
import { GoKebabVertical } from "react-icons/go";
// --------------------------------------------------------------
// --TYPES-------------------------------------------------------
// --------------------------------------------------------------
type PlanProps = {
  selectedPlan: plan;
};
// --------------------------------------------------------------
// --RFC---------------------------------------------------------
// --------------------------------------------------------------

function Plan({ selectedPlan }: PlanProps) {
  // --------------------------------------------------------------
  // --STATE-------------------------------------------------------
  // --------------------------------------------------------------
  const _Global = useContext(Global);
  const [input, setInput] = useState<string>("");
  const [showConfigBox, setShowConfigBox] = useState<boolean>(false);
  // --------------------------------------------------------------
  // --HANDLERS----------------------------------------------------
  // --------------------------------------------------------------
  function onChange_handleInput(event: React.ChangeEvent<HTMLInputElement>): void {
    setInput(event.target.value);
  }
  function onClick_handleSubmit(event: React.MouseEvent<HTMLButtonElement, MouseEvent>, selectedPlanId: string, taskDescription: string): void {
    event.preventDefault();
    if (input !== "") {
      _Global!.addTaskToAPlan(selectedPlanId, taskDescription);
      setInput("");
    }
  }
  return (
    <div className={styles.plan}>
      {/* HEADER */}
      <div className={styles.planHeader}>
        <div className={styles.image}>🌎</div>
        <div className={styles.label}>{selectedPlan?.name}</div>
        <div className={styles.config}>
          <div className={showConfigBox ? `${styles.reactIconContainer} ${styles.selected}` : `${styles.reactIconContainer}`} onClick={() => setShowConfigBox(!showConfigBox)}>
            <GoKebabVertical />
          </div>
          {showConfigBox && <div className={`animate ${styles.configBox}`}></div>}
        </div>
      </div>
      {/* CONTENT */}
      <div className={styles.planContent}>
        {selectedPlan.tasks.map((task, index) => (
          <div className={styles.task} key={index}>
            <div className={styles.image} onClick={() => _Global!.toggleTaskCompleted(selectedPlan.id, task.id)}>
              {task.completed ? <MdOutlineCheckBox /> : <MdOutlineCheckBoxOutlineBlank />}
            </div>
            <div className={styles.description}>{task.description}</div>
          </div>
        ))}
      </div>
      {/* FOOTER */}
      <form className={styles.planFooter}>
        <div className={styles.image}>
          <button type="submit" onClick={(event) => onClick_handleSubmit(event, selectedPlan.id, input)}>
            <BsPlusLg />
          </button>
        </div>
        <div className={styles.input}>
          <input value={input} onChange={(event) => onChange_handleInput(event)}></input>
        </div>
      </form>
    </div>
  );
}

export default Plan;
