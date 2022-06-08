import styles from "./styles.module.css"

import logo from "../../assets/logo.svg"

export function Header () {
  return (
    <header className={styles.header}>
      <img src={logo}/>
      <div>
        <strong className={styles.to}>to</strong>
        <strong className={styles.do}>do</strong>
      </div>
    </header>
  )
}