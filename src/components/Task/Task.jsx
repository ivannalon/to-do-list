import { Trash } from "phosphor-react";
import styles from "./styles.module.css"

export function Task ({content, onDeleteTask}) {
  function handleDeleteTask(){
    onDeleteTask(content)
  }

  function handleChecked(){
    console.log(handleChecked)
  }

  return (
    <ul>
      <li className={styles.taskList}>
        <label>
          <input type="checkbox" onChangeCapture={handleChecked} ></input>
          <span></span>
        </label>
        <span>{content}</span>
        <button onClick={handleDeleteTask} className={styles.buttonDelete}><Trash size={24}/></button>
      </li>
    </ul>
  )
}