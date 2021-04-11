import React, {useState} from 'react'
import './style.css'

function Card(){

  const [ numeroAleatorio, setNumeroAleatorio] = useState(1)

  function gerarNumero(){
    const novoNumero = Math.floor(Math.random() * (100 - 1) + 1)
    setNumeroAleatorio(novoNumero)
  }

  return(
    <div className="card-container">
     <h3>Numero Aleatorio</h3>
     <h1>{numeroAleatorio}</h1>

     <div className="area-botao">
      <label htmlFor="">Click no botao abaixo para gerar um numero aleatorio</label>

      <button onClick={gerarNumero}>
        Gerar Numero
      </button>
     </div> 
    </div>
  )
}

export default Card;

