import { createContext, useEffect, useState } from 'react'

export const OdontologosContext = createContext()

function OdontologosProvider({ children }) {
    const [odontologos, setOdontologos] = useState([])

    const getOdonotologos = async () => {
        const response = await fetch(
            'https://jsonplaceholder.typicode.com/users'
        )
        const data = await response.json()
        setOdontologos(data)
    }

    useEffect(() => {
        getOdonotologos()
    }, [])

    return (
        <OdontologosContext.Provider value={odontologos}>
            {children}
        </OdontologosContext.Provider>
    )
}

export default OdontologosProvider
