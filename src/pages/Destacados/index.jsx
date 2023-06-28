import { useContext, useEffect } from 'react'
import styles from './styles.module.css'
import { OdontologosContext } from '../../contexts/OdontologosContext'
import { Card } from '../../components'

export default function Destacados() {
    const { favoritos, getOdonotologos, removeFavourite } = useContext(OdontologosContext)
    const handleClick = (favorito) => removeFavourite(favorito)

    useEffect(() => {
        getOdonotologos()
    }, [])

    return (
        <>
            <h1 className={styles.title}>Estos son tus favoritos</h1>
            <div className={styles.container}>
                {favoritos.map((favorito) => (
                    <Card
                        key={favorito.id}
                        id={favorito.id}
                        name={favorito.name}
                        onclick={() => handleClick(favorito)}
                        username={favorito.username}
                    />
                ))}
            </div>
        </>
    )
}
