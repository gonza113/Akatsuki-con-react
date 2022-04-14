import { Home } from './components/Home';
import { Integrantes } from "./components/Integrantes";
import { Formulariodeingreso } from './components/Form';
import { Fechas } from './components/Dates';
import { Route, Routes } from "react-router-dom";


export function App() {
    return <div>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="Integrantes" element={<Integrantes />} />
            <Route path="Formulariodeingreso" element={<Formulariodeingreso />} />
            <Route path="Fechas" element={<Fechas />} />
        </Routes>
    </div>
}