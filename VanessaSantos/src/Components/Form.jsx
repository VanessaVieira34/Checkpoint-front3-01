import React from 'react'

const Form = ({dados, setDados, handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            
            <label>Coloque seu nome</label>
            <input type="text" onChange = {(event) => setDados({...dados, nome: event.target.value })}/>

            <label>Qual o seu programa favorito?</label>
            <input type="text" onChange = {(event) => setDados(({...dados, programaFavorito: event.target.value }))}/>

            <label>Qual o ano?</label>
            <input type="number" onChange = {(event) => setDados(({...dados, ano: event.target.value }))}/>

            <button>Enviar</button>
        </form>
    )
}

export default Form
