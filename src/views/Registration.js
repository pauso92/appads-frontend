import React from 'react'
import '../css/Registration.css'


class Registration extends React.Component {
    render() {
        return (
            <>
            <div className="wrap">
                <div>
                    <p></p>
                </div>
                <div className="wrapp_registration">
                    <div className="w_titulo">
                        <p className="titulo">Registrate</p>
                    </div>
                    <div className="wrapp_user">
                        <p className="user">Usuario</p>
                        <input className="input" placeholder="Ingresa usuario" type="name"></input>
                        <p className="user">Correo Electrónico</p>
                        <input className="input" placeholder="Ingresa tu correo" type="email"></input>
                        <p className="user">Teléfono</p>
                        <input className="input" placeholder="Ingresa tu numero teléfonico" type="name"></input>
                        <p className="user">Password</p>
                        <input className="input" placeholder="Ingresa pasword" type="password"></input>
                        <p className="user">Password</p>
                        <input className="input" placeholder="Confirma Password" type="password"></input>
                    </div>
                    <div className="checkbox">
                        <input type="checkbox"></input>
                        <label className="lebel">He leído términos y condiciones </label>
                    </div>
                    <div className="wrap_button">
                        <button className="button">Registrate</button>
                    </div>
                </div>
            </div>
            </>
        )
    }
}

export default Registration