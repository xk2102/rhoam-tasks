import React, { useState, createContext } from "react";
import { plan } from "../modules/types";
import { uid } from "uid";

type GlobalProviderProps = {
  children: React.ReactNode;
};
type GlobalType = {
  plans: plan[];
  setPlans: React.Dispatch<React.SetStateAction<plan[]>>;
  selectedPlan: plan | null;
  setSelectedPlan: React.Dispatch<React.SetStateAction<plan | null>>;
  addTaskToAPlan: (selectedPlanId: string, taskDescription: string) => void;
  toggleTaskCompleted: (planId: string, taskId: string) => void;
  addPlan: (planName: string, planColor: string) => void;
};

export const Global = createContext<GlobalType | null>(null);

export const GlobalProvider = ({ children }: GlobalProviderProps) => {
  // ---------------------------------------------
  // --STATE--------------------------------------
  // ---------------------------------------------
  const [plans, setPlans] = useState<plan[]>([
    {
      name: "Daily Household Chores",
      id: "g1f23cgf12",
      color: "",
      tasks: [
        { id: "3k4j5", description: "Put away belongings.", due: "datetime", completed: false },
        { id: "lk2j34", description: "Do the laundry.", due: "datetime", completed: true },
        { id: "k324", description: "Fold and put away clean clothes.", due: "datetime", completed: false },
        { id: "98v7cbiud", description: "Vacuum.", due: "datetime", completed: true },
      ],
    },
  ]);
  const [selectedPlan, setSelectedPlan] = useState<plan | null>(null);
  // ---------------------------------------------
  // --FUNCTIONS----------------------------------
  // ---------------------------------------------
  function addTaskToAPlan(selectedPlanId: string, taskDescription: string): void {
    let _plans: plan[] = plans;
    _plans.forEach((obj) => {
      if (obj.id === selectedPlanId) {
        obj.tasks.push({ id: uid(), description: taskDescription, due: "datetime", completed: false });
      }
    });
    setPlans([..._plans]);
  }
  function addPlan(planName: string, planColor: string): void {
    let _plans: plan[] = plans;
    _plans.push({
      name: planName,
      id: uid(),
      color: planColor,
      tasks: [],
    });
    setPlans([..._plans]);
  }
  function toggleTaskCompleted(planId: string, taskId: string): void {
    let _plans: plan[] = plans;
    _plans.forEach((obj) => {
      if (obj.id === planId) {
        obj.tasks.forEach((task, index) => {
          if (task.id === taskId) {
            obj.tasks[index].completed = !obj.tasks[index].completed;
          }
        });
      }
    });
    setPlans([..._plans]);
  }

  return <Global.Provider value={{ plans, setPlans, selectedPlan, setSelectedPlan, addTaskToAPlan, toggleTaskCompleted, addPlan }}>{children}</Global.Provider>;
};
