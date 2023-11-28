import { useNavigate } from "react-router-dom";
import { useState } from "react";
import logotipo from "./assets/logo.jpeg"
import "./estilos/registro.css";

const Registro = () => { 

    const navigate = useNavigate();

    const [correo, setCorreo] = useState ("");
    const [password, setPassword] = useState("");
    const [usuario, setUsuario] = useState("");

    const onIngresar = async () => { 
        const url = "http://localhost:4000/usuarios/registrar";
        const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify ({ 
                Nombre: usuario,
                Correo: correo,
                Password: password
            }), 
            headers: { 
                "Content-Type": "application/json"
            }
        });
        if(!response.ok){
            const mensaje = await response.json();
            console.log(mensaje);
            alert (mensaje);
        }
        else{
            alert ("Usuario registrado correctamente");
            navigate ("/");
        }
    }

return( 
    <div className="contenedor">

    <div className="titulo"></div>

    <div className="agrupador-correo3">
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
        
        <div className="agrupador-password3">
            <div>Contraseña</div>
            <div>
                <input
                type = "password"
                placeholder= "Password"
                className = "caja-password"
                value= {password}
                onChange={(e)=> setPassword(e.target.value)}
                />
                </div>
                </div>

        <div className="agrupador-usuario">
            <div>Nombre de usuario</div>
             <div>
            <input
            type="text"
            placeholder="Ingresa el nombre de Usuario"
            className="caja-correo"
            value={usuario}
            onChange={(e)=> setUsuario(e.target.value)}/>
        </div>
        </div>
                
            <div className="agrupador-boton" >
                <button className="boton-ingresar" onClick={()=> onIngresar() }>Ingresar</button>
                </div>

            <div>
            <img src= {logotipo} className= "logo"/>
            </div>

                <div className="otros-botones">
                    <a href="/" className="link-back">Retroceder</a>
                </div>

            </div>
)
}
export default Registro