import Image from "next/image"
import styles from "@/styles/components/Logo.module.scss"

export const Logo = () => {
  return (
    <div className={styles.container}>
      <Image src="/logo.png" fill alt="Juni" />
    </div>
  )
}