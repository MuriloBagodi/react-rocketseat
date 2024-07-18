import styles from './Header.module.css'
import logo from '../assets/Ignite simbol.png'

export const Header = () => {
  return (
    <header className={styles.header}>
      <img src={logo} alt="Logo do ignite" />
    </header>
  )
}
