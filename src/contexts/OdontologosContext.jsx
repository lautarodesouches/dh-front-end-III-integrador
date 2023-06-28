import { createContext, useEffect, useState } from 'react'

export const OdontologosContext = createContext()

function OdontologosProvider({ children }) {
    const [odontologos, setOdontologos] = useState([])
    const [favoritos, setFavoritos] = useState([])

    const getOdonotologos = async () => {
        const response = await fetch(
            'https://jsonplaceholder.typicode.com/users'
        )
        const data = await response.json()
        setOdontologos(data)
    }

    const getFavoritos = () => {
        const localFavs = localStorage.getItem('favoritos')
        const parsedFavs = localFavs ? JSON.parse(localFavs) : []
        setFavoritos(parsedFavs)
    }

    const isFavourite = (id) => favoritos.some((favorito) => favorito.id === id)

    const handleFavouriteClick = (odontologo) => {
        let nuevosFavoritos = []

        if (isFavourite(odontologo.id))
            nuevosFavoritos = favoritos.filter(
                (favorito) => favorito.id !== odontologo.id
            )
        else nuevosFavoritos = [...favoritos, odontologo]

        localStorage.setItem('favoritos', JSON.stringify(nuevosFavoritos))
        setFavoritos(nuevosFavoritos)
    }

    useEffect(() => {
        getFavoritos()
    }, [])

    return (
        <OdontologosContext.Provider
            value={{
                odontologos,
                favoritos,
                getOdonotologos,
                getFavoritos,
                handleFavouriteClick,
            }}
        >
            {children}
        </OdontologosContext.Provider>
    )
}

export default OdontologosProvider
