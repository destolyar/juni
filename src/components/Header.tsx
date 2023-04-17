import { FC } from "react"
import styles from "@/styles/components/Header.module.scss"
import { Logo } from "./Logo"

export const Header: FC = () => {
  return(
    <header className={styles.container}>
      <Logo/>
    </header>
  )
}