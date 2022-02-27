import { useEffect, useState } from "react";
import styles from "./Box.module.css";
import BoxLeft from "./BoxLeft";
import BoxRight from "./BoxRight";
import { list } from "../modules/types";
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
  const [lists, setLists] = useState<list[]>([
    {
      name: "listA",
      tasks: [
        { id: "1", description: "do this..", due: "datetime" },
        { id: "2", description: "do that..", due: "datetime" },
      ],
    },
    {
      name: "listB",
      tasks: [
        { id: "3", description: "do that..", due: "datetime" },
        { id: "4", description: "do this..", due: "datetime" },
      ],
    },
  ]);
  const [selectedList, setSelectedList] = useState<list>(null);
  // --------------------------------------------------------------
  // --USEEFFECT---------------------------------------------------
  // --------------------------------------------------------------
  useEffect(() => {
    selectedList === null ? console.log("selectedList is empty") : console.log(`selectedList: ${selectedList.name}`);
  }, [selectedList]);
  // --------------------------------------------------------------
  // --FUNCTIONS---------------------------------------------------
  // --------------------------------------------------------------
  function addTaskToAList(selectedListName: string, taskDescription: string): void {
    let _lists: list[] = lists;
    _lists.forEach((obj) => {
      if (obj?.name === selectedListName) {
        obj.tasks.push({ id: uid(), description: taskDescription, due: "datetime" });
      }
    });
    setLists([..._lists]);
  }
  // --------------------------------------------------------------
  // --RETURN------------------------------------------------------
  // --------------------------------------------------------------
  return (
    <div className={styles.Box}>
      <BoxLeft lists={lists} selectedList={selectedList} setSelectedList={setSelectedList} />
      <BoxRight selectedList={selectedList} addTaskToAList={addTaskToAList} />
    </div>
  );
}
export default Box;
