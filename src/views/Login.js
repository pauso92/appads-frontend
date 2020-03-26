import React from 'react'
import './login.css'
import { Link } from 'react-router-dom'

class Login extends React.Component {
    render() {
        return (
            <>
                <div className="wrapp">
                    <div className="w_titulo">
                        <p className="titulo">Inicia Sesión</p>
                    </div>
                    <div className="wrapp_user">
                        <p className="user">Usuario</p>
                        <input className="input" placeholder="Ingresa usuario" type="name"></input>
                        <p className="user">Password</p>
                        <input className="input" placeholder="Ingresa pasword" type="password"></input>
                    </div>
                    <div className="div_register">
                        <Link className="user_registrer" to="/Registration">Registrate</Link>
                    </div>
                    <div className="wrap_button">
                        <button className="button">Ingresa</button>
                    </div>
                </div>
            </>
        )
    }
}

export default Login