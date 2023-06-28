import { useState } from 'react'
import styles from './styles.module.css'

export default function Contacto() {
    const [name, setName] = useState({ value: '', error: false })
    const [email, setEmail] = useState({ value: '', error: false })
    const [formOk, setFormOk] = useState(false)

    const handleNameChange = (e) => {
        const value = e.target.value.trim()
        let error = false
        if (value.length < 6) error = 'Tiene que tener mas de 6 caracteres'
        setName({ value: value, error })
    }

    const handleEmailChange = (e) => {
        const value = e.target.value
        let error = false
        if (!value.includes('@')) error = 'Tiene que tener un @'
        setEmail({ value: value, error })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        setFormOk(true)
    }

    return (
        <>
            {formOk ? (
                <h2 className={styles.title}>
                    Gracias {name.value}, te contactaremos a por {email.value}
                </h2>
            ) : (
                <form className={styles.form} onSubmit={handleSubmit}>
                    <h1 className={styles.title}>¡Contáctanos!</h1>
                    <div className={styles.div}>
                        <label className={styles.label} htmlFor="name">
                            Nombre
                        </label>
                        <input
                            className={styles.input}
                            type="text"
                            name="name"
                            placeholder="Juan"
                            id="name"
                            value={name.value}
                            onChange={(e) => handleNameChange(e)}
                        />
                        {name.error && <p className={styles.error}>{name.error}</p>}
                    </div>
                    <div className={styles.div}>
                        <label className={styles.label} htmlFor="email">
                            Email
                        </label>
                        <input
                            className={styles.input}
                            type="text"
                            name="email"
                            placeholder="juan@email.com"
                            id="email"
                            value={email.value}
                            onChange={(e) => handleEmailChange(e)}
                        />
                        {email.error && <p className={styles.error}>{email.error}</p>}
                    </div>
                    <button className={styles.button}>Enviar</button>
                </form>
            )}
        </>
    )
}
