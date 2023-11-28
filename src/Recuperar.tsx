import { useNavigate } from "react-router-dom";
import { useState } from "react";
import logotipo from "./assets/logo.jpeg"
import "./estilos/recuperar.css";

const Recuperar = () => { 

    const navigate = useNavigate();

    const [correo, setCorreo] = useState ("");

    const onIngresar = async () => { 
            const url = "http://localhost:4000/usuarios/recuperar";
            const response = await fetch(url, {
                method: "POST",
                body: JSON.stringify ({ 
                    Correo: correo,
                }), 
                headers: { 
                    "Content-Type": "application/json"
                }
            });
            if(!response.ok){
                const mensaje = await response.text();
                console.log(mensaje);
                alert (mensaje);
            }
            else{
                alert ("Usuario registrado correctamente");
                navigate ("/");
            }
        }


return( 
    <div className="contenedor2">

    <div className="titulo2"> Recuperar contraseña</div>

    <div>
    <img src= {logotipo} className= "logo"/>
    </div>

    <div className="agrupador-correo2">
        <div>Correo Electrónico</div>
        <div>
            <input
            type="text"
            placeholder="Ingresa tu correo electrónico"
            className="caja-correo"
            value={correo}
            onChange={(e)=> setCorreo(e.target.value)}/>
        </div>
        </div>
                
            <div className="agrupador-boton2" >
                <button className="boton-ingresar" onClick={()=> onIngresar() }>Ingresar</button>
                </div>

                <div className="otros-botones2">
                    <a href="/" className="link-registro">Retroceder</a>
                </div>

            </div>
)
    }
    export default Recuperar