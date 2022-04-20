import { Header } from './Header'
import { Footer } from './Footer'
import { useState } from "react"
import { api } from "../api/api"

export function Formulariodeingreso() {

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);


    //El formulario se manda
    const handleSubmit = (event) => {
        event.preventDefault();

      //  const data = {
      //      name: name,
      //      phone: phone,
       //     age: age,
       //     email:email,
      //  }

        //creamos un form data (uso formData para enviar esto porue me parece mejor aunque no haya fotos
        // me parece mas completo y a su vez preveo para el futuro agregar en el formulario un archivo de imagenes)
        const formData = new FormData()
        formData.append("name", name);
        formData.append("phone", phone);
        formData.append("age", age);
        formData.append("email", email);

        //Cambia el estado a loading a true
        setLoading(true);
        
        //Llamar un POST con axios a /formularios-api y mandar la info en el etado actual
        api.post('/integrantes-api', formData).then((response) => {
                console.log(response)

                //Cambia el estado a loading a false
                setLoading(false);
            },
            () => {
                //Cambia el estado a loading a false
                setLoading(false);
            });
            
            

        
        //Borro los estados
        setName("");
        setPhone("");
        setAge("");
        setEmail("");
    };

    const handleNameChange = (event) => {
        setName(event.target.value);
    }
    const handlePhoneChange = (event) => {
        setPhone(event.target.value);
    }
    const handleAgeChange = (event) => {
        setAge(event.target.value);
    }
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    return <div>

        <Header />
        
        <div className="formulario">
            <h2 id="ing" className="ingreso">FORMULARIO DE SOLICITUD DE INGRESO</h2>
    
            <form onSubmit={handleSubmit}>
    
                <div className="name">
                    <p> 
                        <label for="name"><strong>Nombre (obligatirio)</strong></label>
                        <input value={name} onChange={handleNameChange} type="text" name="name" id="name" placeholder="Juan Pérez"
                        autocmplete
                        required/>
                    </p>
                </div>
    
                <div className="phone">
                    <p>
                        <label for="phone"><strong>Teléfono</strong></label>
                        <input value={phone} onChange={handlePhoneChange} type="tel" name="phone" id="phone"
                        placeholder="096789542"
                        required />
                    </p>
                </div>
    
                <div className="edad">
                    <p>
                        <label for="age"><strong>Edad</strong></label>
                        <input value={age} onChange={handleAgeChange} type="number" name="age" id="age"
                        placeholder="1" step="1"
                        required />
                    </p>
                </div>
    
                <div className="email">
                    <p>
                        <label for="email"><strong> Email </strong></label>
                        <input value={email} onChange={handleEmailChange} type="email" name="email" id="email" 
                        placeholder="ejemplo@gmail.com" />
                    </p>
                </div>
               
                <div className="enviar">
                    <input className="env" type="submit" value={loading ? "Cargando..." : "Enviar"} />
                </div>
            </form>
        </div>

        <Footer />

    </div>
}