import { Header } from './Header';
import { Footer } from './Footer';
import  plantel from './assets/ima/plantel.jpeg';
import imagenes from './assets/imagenes';

export function Home() {
    return <div>

        <header className="div-img-padre">
            <img src={plantel} alt="" className='img-padre' />
        </header>

        <Header />

        <div className="reseña">
            <div className="reseñahijo">
            <h2>Breve reseña histórica</h2>
                <p>Akatsuki F.C. es un cuadro armado por un grupo de amigos de la misma ciudad para competir en un torneo privado de fútbol 7 llamado "Seven League Durazno".</p>
                <p>En este torneo participan jugadores amateur, estos cuadros son armados por ellos mismos para competir (de forma divertida) en un campeonato de ciudad.</p>
                <p>Este campeonato se desarrolla en los 19 departamentos del Uruguay, los ganadores de cada campeonato competirán en uno Nacional.</p>
                <p>Empezando desde el pricipio, la historia de Akatsuki F.C. se centra en varios amigos cercanos que acostumbran a salir a tomar mates en diversos lugares de la ciudad. Cuando surgió la idea de participar en este campeonato todos pensaron un nombre original y particular para el cuadro, al llegar a un conclusión, decidieron un nombre en el cual tenían un gusto en común, ya se imaginarán cual es y así nació AKATSUKI F.C.</p>
            </div>
        </div>

        <div className="cont-insta">
            <div className="insta">
                <div className="img-insta">
                    <img src={imagenes.img20} alt="instagram de akatsukiFC" />
                </div>
                <div className="instagram">
                    <a href="https://www.instagram.com/akatsuki.fc_/?hl=es-la" target="_blank">akatsuki.fc_</a>
                </div>
            </div>
        </div>


        <Footer />
    </div>   
}