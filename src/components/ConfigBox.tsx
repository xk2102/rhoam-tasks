import React, { useState, useContext } from "react";
import { Global } from "../contexts/Global";
import styles from "./Plan.module.css";
import { plan } from "../modules/types";
// --------------------------------------------------------------
// --TYPES-------------------------------------------------------
// --------------------------------------------------------------
type ConfigBoxProps = {
  selectedPlan: plan;
};
export default function ConfigBox({ selectedPlan }: ConfigBoxProps) {
  // --------------------------------------------------------------
  // --STATE-------------------------------------------------------
  // --------------------------------------------------------------
  const _Global = useContext(Global);
  const [newPlanName, setNewPlanName] = useState<string>("");
  const COLORS = ["#3689e6", "#28bca3", "#68b723", "#f9c440", "#ffa154", "#ed5353", "#de3e80", "#a56de2", "#8a715e", "#667885"];
  // --------------------------------------------------------------
  // --HANDLERS----------------------------------------------------
  // --------------------------------------------------------------
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
