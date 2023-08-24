import { useState } from 'react'
import './App.css'
import Card from './Components/Card'
import Form from './Components/Form'
function App() {
  
  const [dados, setDados] = useState({
    nome: '',
    programaFavorito: '',
    ano: 0
  })

  const [show, setShow] = useState(false)

  const [error, setError] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()

    if((dados.nome.length > 3 
      && !dados.nome.startsWith(' ') 
      && (dados.programaFavorito.length > 6) 
      && (dados.ano > 1920))){
      
      setShow(true)
      setError(false)
  
    } 

    if((dados.nome.length < 3 
      || dados.nome.startsWith(' ') 
      || (dados.programaFavorito.length < 6) 
      || (dados.ano < 1920))){
      
      setError(true)
  
    } 
  }



  return (
    <>
      <div className='form'>
        <Form dados={dados} setDados={setDados} handleSubmit={handleSubmit}/>

      </div>
      
        
      {show && <Card dados={dados}/>}
      {error && <p>Por favor, verifique os dados inseridos no formulário</p>}
      
      
    </>
  )
}

export default App
