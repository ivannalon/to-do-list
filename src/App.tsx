import { Header } from "./components/Header/Header"
import { NewTask } from "./components/NewTask/NewTask"
import { Task } from "./components/TaskList/TaskList"
import "./styles/global.css"

export default function App() {
  return (
    <>
      <Header/>
      <NewTask/>
      <Task/>
    </>
  )
}
