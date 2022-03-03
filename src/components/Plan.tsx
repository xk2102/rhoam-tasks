import React, { useState, useContext } from "react";
import { Global } from "../contexts/Global";
import styles from "./Plan.module.css";
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
type ConfigBoxProps = {
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
        <div className={styles.label}>{selectedPlan.name}</div>
        <div className={styles.config}>
          <div className={showConfigBox ? `${styles.reactIconContainer} ${styles.selected}` : `${styles.reactIconContainer}`} onClick={() => setShowConfigBox(!showConfigBox)}>
            <GoKebabVertical />
          </div>
          {showConfigBox && <ConfigBox selectedPlan={selectedPlan} />}
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

function ConfigBox({ selectedPlan }: ConfigBoxProps) {
  const _Global = useContext(Global);
  const [newPlanName, setNewPlanName] = useState<string>("");
  const COLORS = ["#3689e6", "#28bca3", "#68b723", "#f9c440", "#ffa154", "#ed5353", "#de3e80", "#a56de2", "#8a715e", "#667885"];
  function onClick_handleChangeName(planId: string, newPlanName: string): void {
    setNewPlanName("");
    _Global!.changePlanName(planId, newPlanName);
  }
  return (
    <div className={`animate ${styles.configBox}`}>
      <div className={styles.colors}>
        {COLORS.map((color, index) => (
          <div
            key={index}
            className={color === selectedPlan.color ? `${styles.color} ${styles.selected}` : `${styles.color}`}
            style={{ backgroundColor: color }}
            onClick={() => _Global!.changePlanColor(selectedPlan.id, color)}></div>
        ))}
      </div>
      <span id={styles.newPlanName}>New name: </span>
      <input placeholder="Plan name.." value={newPlanName} onChange={(event) => setNewPlanName(event.target.value)}></input>
      <button onClick={() => onClick_handleChangeName(selectedPlan.id, newPlanName)}>CHANGE</button>
    </div>
  );
}

export default Plan;
