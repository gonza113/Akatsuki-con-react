import { Header } from './Header';
import { Footer } from './Footer';
import imagenes from '../assets/imagenes';
import { Jugador } from './Jugador'
import { api } from "../api/api"

export function Integrantes() {
    return <div>
        <Header />

        <div className="integ">
            <h2 id="int">INTEGRANTES</h2>
        </div>

        <div className="integrantes">
            <Jugador nombre="Anibal Pintos" imagen={imagenes.img1} alt="Anibal" edad="23" numero="8"/>
            <Jugador nombre="Bautista Viera" imagen={imagenes.img2} alt="Bautista" edad="-" numero="-"/>
            <Jugador nombre="Diego González" imagen={imagenes.img3} alt="Diego" edad="-" numero="-"/>
            <Jugador nombre="Fabian Bordagorri" imagen={imagenes.img4} alt="Fabian" edad="26" numero="7"/>
            <Jugador nombre="Facundo Bessonart" imagen={imagenes.img19} alt="Facundo" edad="-" numero="-"/>
            <Jugador nombre="Felipe Monzón" imagen={imagenes.img5} alt="Felipe" edad="-" numero="-"/>
            <Jugador nombre="Francisco Gomez" imagen={imagenes.img19} alt="Francisco" edad="-" numero="-"/>
            <Jugador nombre="German Tomasco" imagen={imagenes.img6} alt="German" edad="24" numero="13"/>
            <Jugador nombre="Javier Fernández" imagen={imagenes.img8} alt="Javier" edad="26" numero="-"/>
            <Jugador nombre="Joaquin Ualde" imagen={imagenes.img18} alt="Joaquin" edad="-" numero="-"/>
            <Jugador nombre="Johann Purtscher" imagen={imagenes.img10} alt="Jhoann" edad="-" numero="-"/>
            <Jugador nombre="Juan González" imagen={imagenes.img9} alt="Juan" edad="-" numero="-"/>
            <Jugador nombre="Leonel Pajarez" imagen={imagenes.img12} alt="Leo" edad="-" numero="-"/>
            <Jugador nombre="Mateo Cammaron" imagen={imagenes.img14} alt="Mateo" edad="-" numero="-"/>
            <Jugador nombre="Mathias Hernández" imagen={imagenes.img7} alt="Hernández" edad="27" numero="22 (Capitán)"/>
            <Jugador nombre="Matias Fernández" imagen={imagenes.img19} alt="Fernández" edad="-" numero="-"/>
            <Jugador nombre="Matias Banega" imagen={imagenes.img13} alt="Banega" edad="-" numero="-"/>
            <Jugador nombre="Matias Acosta" imagen={imagenes.img19} alt="Acosta" edad="-" numero="-"/>
            <Jugador nombre="Santiago Godoy" imagen={imagenes.img15} alt="Santiago" edad="24" numero="17"/>
            <Jugador nombre="Sebastian González" imagen={imagenes.img16} alt="Sebastian" edad="-" numero="-"/>
            <Jugador nombre="Thiago Cardozo" imagen={imagenes.img17} alt="Thiago" edad="-" numero="-"/>
            <Jugador nombre="Federico Lemos" imagen={imagenes.img11} alt="Federico" edad="-" numero="-"/>
        </div>

        <Footer />

    </div>
}