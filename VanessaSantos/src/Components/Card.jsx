import React from 'react'

const Card = ({dados}) => {
return (
    <div className='cardRender'>
        <h4>Hello {dados.nome}!</h4>
        <h2>Seu programa favorito {dados.programaFavorito}</h2>
        <h5>Qual o ano {dados.ano}</h5>

    </div>
)
}

export default Card
