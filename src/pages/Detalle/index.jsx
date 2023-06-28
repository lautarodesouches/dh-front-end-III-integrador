import { useParams } from 'react-router-dom'
import styles from './styles.module.css'
import { useEffect, useState } from 'react'

export default function Detalle() {
    const { id } = useParams()

    const [odontologo, setOdontologo] = useState({})

    const getOdontologo = async () => {
        try {
            const response = await fetch(
                `https://jsonplaceholder.typicode.com/users/${id}`
            )
            if (response.status !== 200) throw new Error('Not found')
            const data = await response.json()
            setOdontologo(data)
        } catch (error) {
            setOdontologo(null)
        }
    }

    useEffect(() => {
        getOdontologo()
    }, [])

    return (
        <>
            {odontologo ? (
                <article className={styles.container}>
                    <h2 className={styles.title}>{odontologo.name}</h2>
                    <p className={styles.text}>Email: {odontologo.email}</p>
                    <p className={styles.text}>Teléfono: {odontologo.phone}</p>
                    <p className={styles.text}>Sitio web: {odontologo.website}</p>
                </article>
            ) : (
                <h2 className={styles.title}>
                    Odontologo con id {id} no encontrado
                </h2>
            )}
        </>
    )
}
