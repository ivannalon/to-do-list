import { ClipboardText } from "phosphor-react"
import styles from "./styles.module.css"

export function Task() {
  return (
    <div className={styles.content}>
      <div className={styles.info}>
        <div className={styles.tasks}>
          <span className={styles.tasksCreatedText}>Tarefas Criadas</span>
          <span className={styles.counter}>0</span>
        </div>

        <div className={styles.tasks}>
          <span className={styles.tasksFinishedText}>Tarefas Concluídas</span>
          <span className={styles.counter}>0</span>
        </div>
      </div>

      <section className={styles.taskOff}>
        <div><ClipboardText size={56}/></div>
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <span>Crie tarefas e organize seus itens a fazer</span>
      </section>
    </div>
  )
}