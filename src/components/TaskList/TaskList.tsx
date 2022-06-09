import { ClipboardText, PlusCircle } from "phosphor-react"
import { useState } from "react"
import { Task } from "../Task/Task"
import styles from "./styles.module.css"

export function TaskList() {
  const [tasks, setTaks] = useState([
    1,
    2
  ])

  function handleCreateNewComment(){
    event?.preventDefault()

    
  }

  return (
    <>
      <div className={styles.newTask}>
        <form onSubmit={handleCreateNewComment}>
          <textarea placeholder="Adicione uma nova tarefa"></textarea>
          <button className={styles.buttonSubmit} type="submit">
          <div><span>Criar</span>  <PlusCircle size={16}/></div>
          </button>
        </form>
      </div>

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
          {tasks.map(task => {
            return <Task/>
          })}

          <div className={styles.clipBoard}><ClipboardText size={56}/></div>
          <strong className={styles.taskOffStrong}>Você ainda não tem tarefas cadastradas</strong>
          <span className={styles.taskOffSpan}>Crie tarefas e organize seus itens a fazer</span>
        </section>
      </div>
    </>

  )
}