import { Header } from "./components/Header/Header"
import { NewTask } from "./components/NewTask/NewTask"
import { TaskList } from "./components/TaskList/TaskList"
import "./styles/global.css"

export default function App() {
  return (
    <>
      <Header/>
      <NewTask/>
      <TaskList/>
    </>
  )
}
