
import Cart from '../Cart'
import styles from './AppHeader.module.css'

function AppHeader() {
  return (
    <header className={styles.header}>
      <h3>Logo</h3>
      <Cart />
    </header>
  )
}

export default AppHeader