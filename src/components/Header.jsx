import { Link } from "react-router-dom";

export function Header() {
    return <div>
        <h1 className="Img-title">Akatsuki F.C.</h1>

        <div className="contenedor">
            <nav className="nav">
                <ul className="nav-ul">
                    <li className="nav-link">
                        <Link className="link-to" to="/">INICIO</Link>
                    </li>
                    <li className="nav-link">
                        <Link className="link-to" to="/Integrantes">INTEGRANTES</Link>
                    </li>
                    <li className="nav-link">
                        <Link className="link-to" to="/Formulariodeingreso">FORMULARIO DE INGRESO</Link>
                    </li>
                    <li className="nav-link">
                        <Link className="link-to" to="/Fechas">FECHAS</Link>
                    </li>
                </ul>
            </nav>
        </div>

    </div>
}