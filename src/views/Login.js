import React from 'react'
import '../css/login.css'
import { render } from "react-dom"
import { Link } from 'react-router-dom'
import logo from "../img/negocio.jpg"

class Login extends React.Component {
    constructor(args){
        super(args)
        this.state ={
            username: "",
            password:"",
            
            email:"",
    }
}

    onChange(e){
        this.setState(
            {[e.target.name]: e.target.value}
        )}
    render() {
        return (
            <>
           <div>
            <img className="logoimg" src={logo}></img>
            <label><h2>LLeva tu negocio al <br/>
                siguiente nivel </h2></label>
            </div>
       
                <div className="wrapp">
                    <div className="w_titulo">
                        <p className="titulo">Contactanos</p>
                    </div>
                    
                        
                    
                    <div className="wrapp_user">
                        <label htmlFor="username" className="user">Usuario<br></br></label>
                        <input value={this.state.username} onChange={this.onChange.bind(this)} id="username"
                              name="username"className="input" placeholder="Usuario" type="text"></input><br></br>

                        <label htmlFor="password"className="user">Password<br></br></label>
                        <input value={this.state.password}  onChange={this.onChange.bind(this)}
                        name="password" id="password"className="input" placeholder="Ingresa pasword" type="text"></input><br></br>

                        <label className="user" htmlFor="email">email<br></br></label>
                        <input value={this.state.email}  onChange={this.onChange.bind(this)}
                        name="email"id="email"className="input" placeholder="tucorreo@dominio.com" type="text"></input>

                    </div>
                    <div className="div_register">
                        <Link className="user_registrer" to="/Registration">Registrate</Link>
                    </div>
                    <div className="wrap_button">
                        <button className="button">Ingresa</button>
                    </div>
                    
                </div>
                <p>{JSON.stringify(this.state)}</p>
            </>
        )
        
    }
}

export default Login