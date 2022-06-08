import styles from "./styles.module.css"
import {PlusCircle} from "phosphor-react"

export function NewTask() {
  return (
    <div className={styles.newTask}>
      <form>
        <textarea placeholder="Adicione uma nova tarefa"></textarea>
        <button className={styles.buttonSubmit} type="submit">
          <div><span>Criar</span>  <PlusCircle size={16}/></div>
        </button>
      </form>
    </div>
  )
}