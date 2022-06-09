import { Trash } from "phosphor-react";
import styles from "./styles.module.css"

export function Task ({content, onDeleteTask}) {
  function handleDeleteTask(){
    onDeleteTask(content)
  }

  return (
    <ul>
      <li className={styles.taskList}>
        <label>
          <input type="checkbox"></input>
          <span></span>
        </label>
        <span>{content}</span>
        <button onClick={handleDeleteTask} className={styles.buttonDelete}><Trash size={24}/></button>
      </li>
    </ul>
  )
}