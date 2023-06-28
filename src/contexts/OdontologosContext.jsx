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

    const removeFavourite = (odontologo) => {
        const nuevos = favoritos.filter(
            (favorito) => favorito.id !== odontologo.id
        )
        updateFavourites(nuevos)
    }

    const addFavourite = (odontologo) => {
        const nuevos = [...favoritos, odontologo]
        updateFavourites(nuevos)
    }

    const updateFavourites = (favourites) => {
        localStorage.setItem('favoritos', JSON.stringify(favourites))
        setFavoritos(favourites)
    }

    const handleFavouriteClick = (odontologo) => {
        if (isFavourite(odontologo.id)) removeFavourite(odontologo)
        else addFavourite(odontologo)
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
                removeFavourite
            }}
        >
            {children}
        </OdontologosContext.Provider>
    )
}

export default OdontologosProvider
