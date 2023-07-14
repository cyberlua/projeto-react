import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Menu from './componentes/Menu'
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Portfolio from './pages/Portfolio'
import Contato from './pages/Contato'
import Footer from './componentes/Footer'

const Router = () => {
    return (
        <BrowserRouter>
            <Menu />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sobre" element={<Sobre />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/contato" element={<Contato />} />
            </Routes>
            <Footer content="Feito com 💜 por cyberlua - aluna reprograma front-end - projeto React JS" />
        </BrowserRouter>
    );
}

export default Router;