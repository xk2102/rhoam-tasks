import styles from "./BoxLeft.module.css";
import { list } from "../modules/types";
// --------------------------------------------------------------
// --TYPES-------------------------------------------------------
// --------------------------------------------------------------
type BoxLeftProps = {
  lists: list[];
  selectedList: list;
  setSelectedList: React.Dispatch<React.SetStateAction<list | null>>;
};
// --------------------------------------------------------------
// --RFC---------------------------------------------------------
// --------------------------------------------------------------
function BoxLeft({ lists, selectedList, setSelectedList }: BoxLeftProps) {
  // --------------------------------------------------------------
  // --RENDERS-----------------------------------------------------
  // --------------------------------------------------------------
  // --------------------------------------------------------------
  // --HANDLERS----------------------------------------------------
  // --------------------------------------------------------------
  function onClick_handleSelectedList(list: list) {
    if (selectedList === list) {
      setSelectedList(null);
    } else {
      setSelectedList(list);
    }
  }
  // --------------------------------------------------------------
  // --RETURN------------------------------------------------------
  // --------------------------------------------------------------
  return (
    <div className={styles.BoxLeft}>
      <div>🌎 LOCAL</div>
      {lists.map((list, index) => (
        <div className={styles.list} key={index} onClick={() => onClick_handleSelectedList(list)}>
          <div className={styles.listCircle} style={{ backgroundColor: list?.color }}></div>
          <div>{list?.name}</div>
        </div>
      ))}
      <div>🌌 ONLINE</div>
    </div>
  );
}
export default BoxLeft;
