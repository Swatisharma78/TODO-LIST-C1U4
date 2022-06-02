import React, { useState } from "react";
import styles from "./counter.module.css";

const Counter = () => {
  const [count,setCount] = useState(0)
  // sample value to be replaced
  // let count = 0;
  // NOTE: do not delete `data-cy` key value pair
  return (
    <div className={styles.count}>
      <button className={styles.plus} data-cy="task-counter-increment-button" onClick={()=>{setCount(count+1)}} style={{backgroundColor:"cornflowerblue"}}>+</button>
      <span className={styles.num} data-cy="task-counter-value">        {count}        </span>
      <button className={styles.plus} data-cy="task-counter-decrement-button" onClick={()=>{
        if(count>0){setCount(count-1)}}} style={{backgroundColor:"cornflowerblue"}}>-</button>
    </div>
  );
};

export default Counter;
