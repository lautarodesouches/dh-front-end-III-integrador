import { createContext, useEffect, useState } from 'react'

export const OdontologosContext = createContext()

function OdontologosProvider({ children }) {
    const [isDarkTheme, setIsDarkTheme] = useState(false)

    const [odontologos, setOdontologos] = useState([])
    const [favoritos, setFavoritos] = useState([])

    const getOdonotologos = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
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
        const nuevos = favoritos.filter((favorito) => favorito.id !== odontologo.id)
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

    const changeTheme = () => {
        setIsDarkTheme((prev) => !prev)

        const colorsLight = ['#F3F7F0', '#e1ebd9', '#000', '#98C1D9', '#000', '#A29C9B', '#ce2020']
        const colorsDark = ['#1F487E', '#e1ebd9', '#e1e1e1', '#1D3461', '#e1e1e1', '#A29C9B', '#ffffff']

        let selectedColors = []

        if (isDarkTheme) {
            selectedColors = colorsDark
        } else {
            selectedColors = colorsLight
        }

        document.documentElement.style.setProperty('--primary-bg', selectedColors[0])
        document.documentElement.style.setProperty('--primary-bg-hover', selectedColors[1])
        document.documentElement.style.setProperty('--primary-text', selectedColors[2])
        document.documentElement.style.setProperty('--secondary-bg', selectedColors[3])
        document.documentElement.style.setProperty('--secondary-text', selectedColors[4])
        document.documentElement.style.setProperty('--background', selectedColors[5])
        document.documentElement.style.setProperty('--error', selectedColors[6])
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
                removeFavourite,
                changeTheme,
                isDarkTheme
            }}
        >
            {children}
        </OdontologosContext.Provider>
    )
}

export default OdontologosProvider
