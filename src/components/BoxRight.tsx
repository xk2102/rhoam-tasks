import styles from "./BoxRight.module.css";
import { plan } from "../modules/types";
import React, { useState } from "react";
import { MdOutlineCheckBoxOutlineBlank, MdOutlineCheckBox } from "react-icons/md";
import { BsPlusLg } from "react-icons/bs";
import { GoKebabVertical } from "react-icons/go";
// --------------------------------------------------------------
// --TYPES-------------------------------------------------------
// --------------------------------------------------------------
type BoxRightProps = {
  selectedPlan: plan;
  addTaskToAPlan: (selectedPlanName: string, taskDescription: string) => void;
  toggleTaskCompleted: (planId: string, taskId: string) => void;
};
type PlanProps = {
  selectedPlan: plan;
};
// --------------------------------------------------------------
// --RFC---------------------------------------------------------
// --------------------------------------------------------------

function Plan({ selectedPlan }: PlanProps) {
  return <div className={styles.plan}></div>;
}

function BoxRight({ selectedPlan, addTaskToAPlan, toggleTaskCompleted }: BoxRightProps) {
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
          <Plan selectedPlan={selectedPlan} />
          {/* PLAN */}
          <div className={styles.plan}>
            {/* HEADER */}
            <div className={styles.planHeader}>
              <div className={styles.image}>🌎</div>
              <div className={styles.label}>{selectedPlan.name}</div>
              <div className={styles.config}>
                <GoKebabVertical />
              </div>
            </div>
            {/* CONTENT */}
            <div className={styles.planContent}>
              {selectedPlan.tasks.length > 0 &&
                selectedPlan.tasks.map((task, index) => (
                  <div className={styles.task} key={index}>
                    <div className={styles.image} onClick={() => toggleTaskCompleted(selectedPlan.id, task.id)}>
                      {task.completed ? <MdOutlineCheckBox /> : <MdOutlineCheckBoxOutlineBlank />}
                    </div>
                    <div className={styles.description}>{task.description}</div>
                  </div>
                ))}
            </div>
            {/* FOOTER */}
            <form className={styles.planFooter}>
              <div className={styles.image}>
                <button type="submit" onClick={(event) => onClick_handleSubmit(event, selectedPlan.name, input)}>
                  <BsPlusLg />
                </button>
              </div>
              <div className={styles.input}>
                <input value={input} onChange={(event) => onChange_handleInput(event)}></input>
              </div>
            </form>
          </div>
        </>
      )}
    </div>
  );
}
export default BoxRight;
