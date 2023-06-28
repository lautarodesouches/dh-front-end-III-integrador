import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Contacto, Destacados, Detalle, Home, NotFound } from './pages'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" Component={Home} />
                <Route path="/contacto" Component={Contacto} />
                <Route path="/detalle/:id" Component={Detalle} />
                <Route path="/destacados" Component={Destacados} />
                <Route path="*" Component={NotFound} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
