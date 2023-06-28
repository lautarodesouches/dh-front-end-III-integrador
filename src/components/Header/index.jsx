import styles from './styles.module.css'
import { NavLink } from 'react-router-dom'

export default function Header() {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <ul className={styles.ul}>
                    <li className={styles.li}>
                        <NavLink className={styles.link} to={'/'}>Inicio</NavLink>
                    </li>
                    <li className={styles.li}>
                        <NavLink className={styles.link} to={'/favs'}>Destacados</NavLink>
                    </li>
                    <li className={styles.li}>
                        <NavLink className={styles.link} to={'/contact'}>Contacto</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
