import styles from "./BoxRight.module.css";
import { list } from "../modules/types";
import React, { useState } from "react";
// --------------------------------------------------------------
// --TYPES-------------------------------------------------------
// --------------------------------------------------------------
type BoxRightProps = {
  selectedList: list;
  addTaskToAList: (selectedListName: string, taskDescription: string) => void;
};
// --------------------------------------------------------------
// --RFC---------------------------------------------------------
// --------------------------------------------------------------
function BoxRight({ selectedList, addTaskToAList }: BoxRightProps) {
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
    addTaskToAList(selectedListName, taskDescription);
    setInput("");
  }
  // --------------------------------------------------------------
  // --RENDERS-----------------------------------------------------
  // --------------------------------------------------------------
  function renderSelectedListTasks(selectedList: list): JSX.Element[] | null {
    if (selectedList) {
      return selectedList?.tasks.map((task, index) => <div key={index}>{task.description}</div>);
    } else {
      return null;
    }
  }
  // --------------------------------------------------------------
  // --RETURN------------------------------------------------------
  // --------------------------------------------------------------
  return (
    <div className={styles.BoxRight}>
      <div>{selectedList?.name}</div>
      {renderSelectedListTasks(selectedList)}
      {selectedList && (
        <form>
          <input value={input} onChange={(event) => onChange_handleInput(event)}></input>
          <button type="submit" onClick={(event) => onClick_handleSubmit(event, selectedList.name, input)}>
            add
          </button>
        </form>
      )}
    </div>
  );
}
export default BoxRight;
