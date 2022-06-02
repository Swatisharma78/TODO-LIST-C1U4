import React, { useState } from "react";
import Task from "../Task/Task";
import styles from "./addTask.module.css";

import { IoMdAdd } from 'react-icons/io'

const AddTask = () => {
  const [main,setQuery] = useState("")
  const [todo,setTodo] = useState([])

  

  const onDelete = (id)=>{
       let newTodo = todo.filter(item => item.id !== id) 
       setTodo(newTodo)
  }
  // NOTE: do not delete `data-cy` key value pair
  return (
    <div className={styles.todoForm}>
      <input placeholder="Add Task..."data-cy="add-task-input" type="text" onChange={(e)=>setQuery(e.target.value)} className={styles.input}/>
      <button className={styles.add} data-cy="add-task-button" onClick={ ()=>{
        if(main){
             setTodo([...todo,{ id:Date.now() , value:main}]);
             setQuery("")} }} ><IoMdAdd/></button>

             {todo.map((item) =>(
                <Task  key={item.id} item={item} onDelete={onDelete}/>
             ))}
    </div>
  );
};

export default AddTask;
