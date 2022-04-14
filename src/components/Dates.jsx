import { Header } from './Header'
import { Footer } from './Footer'
import { Partido } from './Fecha'


export function Fechas() {
    return (
        <div>
            <Header />

            <h2 className="todaslasfechas">FECHAS</h2>
            <div className="fechas">
                <Partido clase="fecha1" fecha="1" cuadros="4 Boca 4 - 3 Akatsuki F.C." />
                <Partido clase="fecha2" fecha="2" cuadros="Fernetbache 6 - 1 Akatsuki F.C." />
                <Partido clase="fecha3" fecha="3" cuadros="Piratas 2 - 2 Akatsuki F.C." />
                <Partido clase="fecha4" fecha="4" cuadros="Arsenal 2 - 4 Akatsuki F.C." />
                <Partido clase="fecha5" fecha="5" cuadros="Rejunte 4 - 3 Akatsuki F.C." />
                <Partido clase="fecha6" fecha="6" cuadros="La Resaka 2 - 4 Akatsuki F.C." />
                <Partido clase="fecha7" fecha="7" cuadros="Los Ticos 8 - 3  Akatsuki F.C." />
            </div>

            <div>
                <h2 className="tabla">TABLA DE RESULTADO</h2>
                <div className='div-tabla'>
                </div>
            </div>

            <Footer />

        </div>
    )
}