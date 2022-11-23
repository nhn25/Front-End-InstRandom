import { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { login } from '../../actions/auth'
import './Login.css'
const Login = ({login, isAuthenticated}) => {
    
    const [formData, setFormData] = useState({
        dni: "",
        contrasena: ""
    })

    const {dni, contrasena} = formData

    const handleChange = e => setFormData({...formData, [e.target.name] : e.target.value})

    const handleOnSubmit = async (e) => { 
        e.preventDefault()
        console.log(formData)
        login(dni, contrasena)
    }
    
    //redirect if logged in
    if(isAuthenticated) return <Redirect to='/home' />

        
    return (
      <>
      <div className="container">
      <div className="containerLogin">
            <div className="info">
                <h1 className="h1Titulo">INSTITUTO TECNOLOGICO</h1>
            </div>
            </div>
            <div className="formlogin">
            <div className="thumbnail"><img className="imgLogin" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/hat.svg"/></div>
            <form className="login-form" onSubmit={(e)=>{handleOnSubmit(e)}}>
            <input type="text" 
                className="inputLogin"
                    placeholder="DNI" 
                    name="dni"
                    value={dni}
                    onChange={e => handleChange(e)}
                />
               <input type="password" 
                    className="inputLogin"
                    placeholder="contraseña"
                    name="contrasena"
                    minLength="6"
                    onChange={e => handleChange(e)}
                />
                <button  type="submit" className="buttomLogin"><i className="fa fa-lock"></i> Iniciar Sesion</button>
                <p className="message">Cual es tu contraseña? <a href="#">Fue enviado al correo electronico</a></p>
            </form>
            
            </div>
      </div>
      </>
  ) 
};<ion-icon name="code-slash-outline"></ion-icon>

//<ion-icon name="code-slash-sharp"></ion-icon>

Login.propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { login })(Login);
