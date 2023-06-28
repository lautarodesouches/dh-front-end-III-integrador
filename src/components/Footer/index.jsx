import styles from './styles.module.css'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.div}>
                <p className={styles.text}>©2023</p>
            </div>
            <div className={styles.div}>
                <p className={styles.text}>Hecho con </p>
                <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                    <path
                        fillRule="evenodd"
                        d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                    />
                </svg>
                <a
                    className={styles.link}
                    href="https://lautarodesouches.com/#/home"
                    target="_blank"
                >
                    por Lautaro Desouches
                </a>
            </div>
        </footer>
    )
}
