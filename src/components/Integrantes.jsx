import { Header } from './Header';
import { Footer } from './Footer';
import imagenes from '../assets/imagenes';
import { Jugador } from './Jugador'


export function Integrantes() {
    return <div>
        <Header />

        <div className="integ">
            <h2 id="int">INTEGRANTES</h2>
        </div>

        <div className="integrantes">
            <Jugador nombre="Anibal Pintos" imagen={imagenes.img1} alt="Foto de Anibal" edad="23 Años" numero="Número 8"/>
            <Jugador nombre="Bautista Viera" imagen={imagenes.img2} alt="Foto de Bautista" edad="- Años" numero="Número -"/>
            <Jugador nombre="Diego González" imagen={imagenes.img3} alt="Foto de Diego" edad="- Años" numero="Número -"/>
            <Jugador nombre="Fabian Bordagorri" imagen={imagenes.img4} alt="Foto de Fabian" edad="26 Años" numero="Número 7"/>
            <Jugador nombre="Facundo Bessonart" imagen={imagenes.img19} alt="Foto de Facundo" edad="- Años" numero="Número -"/>
            <Jugador nombre="Felipe Monzón" imagen={imagenes.img5} alt="Foto de Felipe" edad="- Años" numero="Número -"/>
            <Jugador nombre="Francisco Gomez" imagen={imagenes.img19} alt="Foto de Francisco" edad="- Años" numero="Número -"/>
            <Jugador nombre="German Tomasco" imagen={imagenes.img6} alt="Foto de German" edad="24 Años" numero="Número 13"/>
            <Jugador nombre="Javier Fernández" imagen={imagenes.img8} alt="Foto de Javier" edad="26 Años" numero="Número -"/>
            <Jugador nombre="Joaquin Ualde" imagen={imagenes.img18} alt="Foto de Joaquin" edad="- Años" numero="Número -"/>
            <Jugador nombre="Johann Purtscher" imagen={imagenes.img10} alt="Foto de Jhoann" edad="- Años" numero="Número -"/>
            <Jugador nombre="Juan González" imagen={imagenes.img9} alt="Foto de Juan" edad="- Años" numero="Número -"/>
            <Jugador nombre="Leonel Pajarez" imagen={imagenes.img12} alt="Foto de Leo" edad="- Años" numero="Número -"/>
            <Jugador nombre="Mateo Cammaron" imagen={imagenes.img14} alt="Foto de Mateo" edad="- Años" numero="Número -"/>
            <Jugador nombre="Mathias Hernández" imagen={imagenes.img7} alt="Foto de Hernández" edad="27 Años" numero="Número 22 (Capitán)"/>
            <Jugador nombre="Matias Fernández" imagen={imagenes.img19} alt="Foto de Fernández" edad="- Años" numero="Número -"/>
            <Jugador nombre="Matias Banega" imagen={imagenes.img13} alt="Foto de Banega" edad="- Años" numero="Número -"/>
            <Jugador nombre="Matias Acosta" imagen={imagenes.img19} alt="Foto de Acosta" edad="- Años" numero="Número -"/>
            <Jugador nombre="Santiago Godoy" imagen={imagenes.img15} alt="Foto de Santiago" edad="24 Años" numero="Número 17"/>
            <Jugador nombre="Sebastian González" imagen={imagenes.img16} alt="Foto de Sebastian" edad="- Años" numero="Número -"/>
            <Jugador nombre="Thiago Cardozo" imagen={imagenes.img17} alt="Foto de Thiago" edad="- Años" numero="Número -"/>
            <Jugador nombre="Federico Lemos" imagen={imagenes.img11} alt="Foto de Federico" edad="- Años" numero="Número -"/>
        </div>

        <Footer />

    </div>
}