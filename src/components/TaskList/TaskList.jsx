import { ClipboardText, PlusCircle } from "phosphor-react"
import { useState } from "react"
import { Task } from "../Task/Task"
import styles from "./styles.module.css"

export function TaskList() {
  const [tasks, setTasks] = useState([])

  const [newTaskText, setNewTaskText] = useState("")

  const tasksNum = tasks.length

  function handleCreateNewComment(){
    event?.preventDefault()

    setTasks([...tasks, newTaskText])
    setNewTaskText("")
  }

  function handleNewTaskTextChange() {
    setNewTaskText(event.target.value)
  }

  function deleteTask(taskToDelete) {
    const listTaskToDelete = tasks.filter(task => {
      return task != taskToDelete
    })

    setTasks(listTaskToDelete)
  }

  return (
    <>
      <div className={styles.newTask}>
        <form onSubmit={handleCreateNewComment}>
          <textarea 
            onChange={handleNewTaskTextChange} 
            name="task" 
            placeholder="Adicione uma nova tarefa"
            value={newTaskText}
          ></textarea>
          <button disabled={newTaskText.length === 0} className={styles.buttonSubmit} type="submit">
          <div><span>Criar</span>  <PlusCircle size={16}/></div>
          </button>
        </form>
      </div>

      <div className={styles.content}>
        <div className={styles.info}>
          <div className={styles.tasks}>
            <span className={styles.tasksCreatedText}>Tarefas Criadas</span>
            <span className={styles.counter}>{tasksNum}</span>
          </div>

          <div className={styles.tasks}>
            <span className={styles.tasksFinishedText}>Tarefas Concluídas</span>
            <span className={styles.counter}>0</span>
          </div>
        </div>

        <section className={styles.taskOff}>
          {tasks.map(task => {
            return <Task content={task} onDeleteTask={deleteTask}/>
          })}
 
          {tasksNum === 0 &&          
            <>
              <div className={styles.clipBoard}><ClipboardText size={56}/></div>
              <strong className={styles.taskOffStrong}>Você ainda não tem tarefas cadastradas</strong>
              <span className={styles.taskOffSpan}>Crie tarefas e organize seus itens a fazer</span>
            </>
          } 
        </section>
      </div>
    </>
  )
}