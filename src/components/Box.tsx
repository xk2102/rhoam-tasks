import { useEffect, useState } from "react";
import styles from "./Box.module.css";
import BoxLeft from "./BoxLeft";
import BoxRight from "./BoxRight";
import { plan } from "../modules/types";
import { uid } from "uid";
// --------------------------------------------------------------
// --TYPES-------------------------------------------------------
// --------------------------------------------------------------

// --------------------------------------------------------------
// --RFC---------------------------------------------------------
// --------------------------------------------------------------
function Box() {
  // --------------------------------------------------------------
  // --STATE-------------------------------------------------------
  // --------------------------------------------------------------
  const [plans, setPlans] = useState<plan[]>([
    {
      name: "planA",
      color: "",
      tasks: [
        { id: "1", description: "do this..", due: "datetime" },
        { id: "2", description: "do that..", due: "datetime" },
      ],
    },
    {
      name: "planB",
      color: "",
      tasks: [
        { id: "3", description: "do that..", due: "datetime" },
        { id: "4", description: "do this..", due: "datetime" },
      ],
    },
    {
      name: "planC",
      color: "",
      tasks: [
        { id: "3", description: "do that..", due: "datetime" },
        { id: "4", description: "do this..", due: "datetime" },
      ],
    },
  ]);

  // ffaa00 fa1955 a3ab38
  const [selectedPlan, setSelectedPlan] = useState<plan>(null);
  // --------------------------------------------------------------
  // --USEEFFECT---------------------------------------------------
  // --------------------------------------------------------------
  useEffect(() => {
    selectedPlan === null ? console.log("selectedPlan is empty") : console.log(`selectedPlan: ${selectedPlan.name}`);
  }, [selectedPlan]);
  // --------------------------------------------------------------
  // --FUNCTIONS---------------------------------------------------
  // --------------------------------------------------------------
  function addTaskToAList(selectedListName: string, taskDescription: string): void {
    let _plans: plan[] = plans;
    _plans.forEach((obj) => {
      if (obj?.name === selectedListName) {
        obj.tasks.push({ id: uid(), description: taskDescription, due: "datetime" });
      }
    });
    setPlans([..._plans]);
  }
  // --------------------------------------------------------------
  // --RETURN------------------------------------------------------
  // --------------------------------------------------------------
  return (
    <div className={styles.Box}>
      <BoxLeft plans={plans} selectedPlan={selectedPlan} setSelectedPlan={setSelectedPlan} />
      <BoxRight selectedPlan={selectedPlan} addTaskToAPlan={addTaskToAList} />
    </div>
  );
}
export default Box;
