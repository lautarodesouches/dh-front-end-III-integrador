import { useContext, useEffect } from 'react'
import styles from './styles.module.css'
import { OdontologosContext } from '../../contexts/OdontologosContext'
import { Card } from '../../components'

export default function Home() {
    const { odontologos, getOdonotologos, handleFavouriteClick } = useContext(OdontologosContext)

    const handleClick = (odontologo) => {
        handleFavouriteClick(odontologo)
    }

    useEffect(() => {
        getOdonotologos()
    }, [])

    return (
        <>
            <h1 className={styles.title}>Nuestro equipo</h1>
            <div className={styles.container}>
                {odontologos.map((odontologo) => (
                    <Card
                        key={odontologo.id}
                        id={odontologo.id}
                        name={odontologo.name}
                        username={odontologo.username}
                        onclick={() => handleClick(odontologo)}
                    />
                ))}
            </div>
        </>
    )
}
