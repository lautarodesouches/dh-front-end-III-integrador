import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Contacto, Destacados, Detalle, Home, NotFound } from './pages'
import { Footer, Header } from './components'
import './styles.css'

function App() {
    return (
        <BrowserRouter>
            <Header />
            <main className="main">
                <Routes>
                    <Route path="/" Component={Home} />
                    <Route path="/contact" Component={Contacto} />
                    <Route path="/dentist/:id" Component={Detalle} />
                    <Route path="/favs" Component={Destacados} />
                    <Route path="*" Component={NotFound} />
                </Routes>
            </main>
            <Footer />
        </BrowserRouter>
    )
}

export default App
