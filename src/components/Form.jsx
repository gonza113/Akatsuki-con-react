import { Header } from './Header'
import { Footer } from './Footer'

export function Formulariodeingreso() {
    return <div>

        <Header />
        
        <div className="formulario">
            <h2 id="ing" className="ingreso">FORMULARIO DE SOLICITUD DE INGRESO</h2>
    
            <form action="mailto:FabianBordagorri95@gmail.com" id="from-order" >
    
                <div className="name">
                    <p> 
                        <label for="name"><strong>Nombre (obligatirio)</strong></label>
                        <input type="text" name="name" id="name" placeholder="Juan Pérez"
                        autocmplete
                        required/>
                    </p>
                </div>
    
                <div className="phone">
                    <p>
                        <label for="phone"><strong>Teléfono</strong></label>
                        <input type="tel" name="phone" id="phone"
                        placeholder="096789542"
                        required />
                    </p>
                </div>
    
                <div className="edad">
                    <p>
                        <label for="numberexample"><strong>Edad</strong></label>
                        <input type="number" name="numberexample" id="numberexample"
                        placeholder="1" step="1"
                        required />
                    </p>
                </div>
    
                <div className="email">
                    <p>
                        <label for="email"><strong> Email </strong></label>
                        <input type="email" name="email" id="email" 
                        placeholder="ejemplo@gmail.com" />
                    </p>
                </div>
               
                <div className="enviar">
                    <input className="env" type="submit" value="Enviar" />
                </div>
            </form>
        </div>

        <Footer />

    </div>
}