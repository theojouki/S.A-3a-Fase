import React from 'react'
import Navbar from './components/Navbar'
import './Cadastro.css'

function Cadastro() {
  return (
    <div className='cadastro-container'>
        <Navbar />
        <h2 className='title-text'>Cadastro</h2>

        <label htmlFor="">Nome</label>
        <input type="text" />

        <label htmlFor="">CPF</label>
        <input type="number" />

        <label htmlFor="">Telefone</label>
        <input type="number" />

        <label htmlFor="">Email</label>
        <input type="text" />

        <label htmlFor="">Data de Nascimento</label>
        <input type="date" />

        <label htmlFor="">Senha</label>
        <input type="password" />

        <label htmlFor="">Confirmar senha</label>
        <input type="password" />

        <button className='btn-cadastrar'>Cadastrar</button>
    </div>
  )
}

export default Cadastro