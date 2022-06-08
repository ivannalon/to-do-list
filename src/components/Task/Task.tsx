import { Trash } from "phosphor-react";
import styles from "./styles.module.css"

export function Task () {
  return (
    <ul>
      <li className={styles.taskList}>
        <label>
          <input type="checkbox"></input>
          <span></span>
        </label>
        <span>Lorem ipsum dolor olor sitolor olor sit amet c amet consectetur adipisicing elit. Comm sit amet consectetur adipisicing elit. Comm</span>
        <button className={styles.buttonDelete}><Trash size={24}/></button>
      </li>
    </ul>
  )
}