import React  from "react";
import { render } from "react-dom"
import '../index.css';

class FormApp extends React.Component{
    constructor(args){
        super(args)
        this.state ={
            username: "",
            name:"",
            languaje:"",
            email:""
    }
}
onChange(e){
    this.setState(
        {[e.target.name]: e.target.value}
    )

}

render() {
    return(
    <div>
        <label htmlFor="username">Nombre de usuario<br></br></label>
        <input 
        value={this.state.username} 
        onChange={this.onChange.bind(this)}
        name="username" id="username"type="text"/><br></br>

        <label htmlFor="name">Nombre<br></br></label>
        <input value={this.state.name}
        onChange={this.onChange.bind(this)}
         name="name" id="name"type="text"/><br></br>

<label htmlFor="email">email<br></br></label>
        <input 
        value={this.state.email} 
        onChange={this.onChange.bind(this)}
        name="email" id="email"type="text"/><br></br>


         <label htmlFor="languaje">idioma</label>
         <select id="languaje" name="languaje" 
         value={this.state.languaje}
         onChange={this.onChange.bind(this)}>

             <option value="">idioma</option>
             <option value="en">ingles</option>
             <option value="es">Español</option>
         </select>



    <p>{JSON.stringify(this.state)}</p>

   </div>
    )
}
}

export default FormApp