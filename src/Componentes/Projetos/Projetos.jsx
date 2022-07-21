
import './projetos.css'
import DadosJason from './dados.js'


function Cards() {
  
  return(
    
  
    <div className="cartao-container">
      
    <div className="cards">
      {DadosJason.map(item => {
        return(
          <div key={item.id}>
            <h1>{item.nome}</h1>
            <img src={item.gif}/>
            <p>{item.paragrafo}</p>
            <hr/>
           
          </div>
        )
      }
    )}
    </div>
    </div>
  )
}

export default Cards