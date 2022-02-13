import { Home } from './Home';
import { Integrantes } from "./Integrantes";
import { Formulariodeingreso } from './Form';
import { Fechas } from './Dates';
/*import { useState } from "react";*/
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
}m 