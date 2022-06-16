import { ClipboardText, PlusCircle, Trash } from "phosphor-react"
import { useState } from "react"
import { uid } from "uid"
import styles from "./styles.module.css"

interface Task {
  id: string;
  title: string;
  isComplete: boolean;
}

export function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [counterChecked, setcounterChecked] = useState(0)
  const [newTaskText, setNewTaskText] = useState("")

  const tasksNum = tasks.length

  function handleCreateNewTask(){
    event?.preventDefault()

    const Task= {
      id: uid(),
      title: newTaskText,
      isComplete: false
    }
    
    setTasks(prevState => [...prevState, Task])
    setNewTaskText("")
  }

  function handleToggleTaskCompletion(id: string) {
    const newTasks = tasks.map((task) => {
      if(task.id === id){
        task.isComplete = !task.isComplete
        task.isComplete == true ? setcounterChecked(counterChecked + 1) : setcounterChecked(counterChecked - 1) 
      }
      return task
    });

    setTasks(newTasks)
  }

  function handleDeleteTask(id: string) {
    const listTaskToDelete = tasks.filter(task => task.id != id)

    setTasks(listTaskToDelete)
  }

  return (
    <>
      <div className={styles.newTask}>
        <form onSubmit={handleCreateNewTask}>
          <textarea 
            onChange={(e) => setNewTaskText(e.target.value)}
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
            <span className={styles.counter}>{counterChecked}</span>
          </div>
        </div>

        <section className={styles.taskOff}>
          {tasks.map(task => (
              <li key={task.id} className={styles.taskList}>
                <div className={task.isComplete ? styles.completed : ''} data-testid="task" >
                  <label>
                    <input 
                      type="checkbox"
                      readOnly
                      checked={task.isComplete}
                      onClick={() => handleToggleTaskCompletion(task.id)}
                    />
                    <span></span>
                  </label>
                </div>
                <span className={styles.taskText}>{task.title}</span>

                <button onClick={() => handleDeleteTask(task.id)} data-testid="remove-task-button" className={styles.buttonDelete}><Trash size={24}/></button>
              </li>
            )
          )}
 
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