import styles from "./Plan.module.css";
import { plan } from "../modules/types";
import { Global } from "../contexts/Global";
import React, { useState, useContext } from "react";
// --------------------------------------------------------------
// --TYPES-------------------------------------------------------
// --------------------------------------------------------------
type ColorProps = {
  selectedPlan: plan;
  color: string;
};
export default function Color({ selectedPlan, color }: ColorProps) {
  const _Global = useContext(Global);
  return (
    <div
      className={color === selectedPlan.color ? `${styles.color} ${styles.selected}` : `${styles.color}`}
      style={{ backgroundColor: color }}
      onClick={() => _Global!.changePlanColor(selectedPlan.id, color)}></div>
  );
}
