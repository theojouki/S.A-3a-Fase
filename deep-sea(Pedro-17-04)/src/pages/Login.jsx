import React from 'react'
import Navbar from './components/Navbar'
import './Login.css'

function Login() {
  return (
    <div className='login-container'>
        <Navbar />
        <h1>Login</h1>
 
        <label htmlFor="">Nome</label>
        <input type="text" />

        <label htmlFor="">Senha</label>
        <input type="password" />

        <button className='btn-entrar'>Entrar</button>

    </div>
  )
}

export default Login