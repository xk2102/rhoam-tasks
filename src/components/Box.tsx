import { useEffect, useState, useContext } from "react";
import { Global } from "../contexts/Global";
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
  const _Global = useContext(Global);
  // sconsole.log(_Global?.varA);
  const [plans, setPlans] = useState<plan[]>([
    {
      name: "local planA",
      id: "g1f23cgf12",
      color: "",
      tasks: [
        { id: "3k4j5", description: "do this..", due: "datetime", completed: false },
        { id: "lk2j34", description: "do that..", due: "datetime", completed: true },
        { id: "k324", description: "do this..", due: "datetime", completed: false },
        { id: "98v7cbiud", description: "do that..", due: "datetime", completed: true },
        { id: "lksfhd78", description: "do this..", due: "datetime", completed: false },
        { id: "fdoipg7", description: "do that..", due: "datetime", completed: false },
      ],
    },
    {
      name: "local planB",
      id: "uyh12g3uy12g",
      color: "",
      tasks: [
        { id: "kjh4i7", description: "do that..", due: "datetime", completed: false },
        { id: "df8og0", description: "do this..", due: "datetime", completed: false },
      ],
    },
    {
      name: "local planC",
      id: "mn123bnm12b",
      color: "",
      tasks: [
        { id: "kj32h4k", description: "do that..", due: "datetime", completed: false },
        { id: "ljk234h", description: "do this..", due: "datetime", completed: false },
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
  function addTaskToAPlan(selectedListName: string, taskDescription: string): void {
    let _plans: plan[] = plans;
    _plans.forEach((obj) => {
      if (obj?.name === selectedListName) {
        obj.tasks.push({ id: uid(), description: taskDescription, due: "datetime", completed: false });
      }
    });
    setPlans([..._plans]);
  }
  function toggleTaskCompleted(planId: string, taskId: string): void {
    let _plans: plan[] = plans;
    _plans.forEach((obj) => {
      if (obj?.id === planId) {
        obj.tasks.forEach((task, index) => {
          if (task.id === taskId) {
            obj.tasks[index].completed = !obj.tasks[index].completed;
          }
        });
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
      <BoxRight selectedPlan={selectedPlan} addTaskToAPlan={addTaskToAPlan} toggleTaskCompleted={toggleTaskCompleted} />
    </div>
  );
}
export default Box;
