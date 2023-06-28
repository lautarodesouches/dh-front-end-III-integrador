import styles from './styles.module.css'

export default function Card({ name, username, id, onclick }) {
    const handleFavourite = () => {}

    return (
        <article className={styles.card}>
            <span className={styles.span}>{id}</span>
            <h2 className={styles.title}>{name}</h2>
            <h3 className={styles.subtitle}>{username}</h3>
            <div className={styles.buttons}>
                <button className={styles.button} onClick={onclick}>
                    Detalle
                </button>
                <button
                    className={styles.button}
                    onClick={() => handleFavourite()}
                >
                    Favorito
                </button>
            </div>
        </article>
    )
}
