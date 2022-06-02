import React, { useState } from "react";
import Counter from "../Counter/Counter";
import styles from "./task.module.css";
import { RiDeleteBin6Line } from 'react-icons/ri'

const Task = ({item,onDelete}) => {
  const [mini,setIsDefine] = useState(item.iscomplete);
console.log(item.iscomplete)
  // NOTE: do not delete `data-cy` key value pair
  return (
    <li data-cy="task" className={styles.task}>
      <input className={styles.check} type="checkbox" data-cy="task-checkbox" 
      checked = {mini} 
       onChange = {(e)=>{setIsDefine(e.target.checked)}}  />
      <div data-cy="task-text" className={mini ? styles.striked : styles.nothing}>{item.value}</div>
      {/* Counter here */}
      <Counter/>
      <button className={styles.del}data-cy="task-remove-button" onClick={()=>{onDelete(item.id)}}><RiDeleteBin6Line/></button>
    </li>
  );
};

export default Task;
