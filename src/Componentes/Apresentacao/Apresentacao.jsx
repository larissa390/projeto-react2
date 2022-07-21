import'./apresentacao.css'
import imagemPerfil from "../Apresentacao/foto.jpg"

function Apresentacao() {
    return(
      <div className="apresentacao">
        
     
     <img src={imagemPerfil} alt="imagem larissa" className='imagem'></img>

       <div className='texto-apresentacao'>
       <h1>Prazer, me chamo Larissa</h1>
        <p>Olá, Prazer! Eu sou a Larissa Santana, tenho 24 anos, atualmente sou da área de Recursos Humanos e estou batalhando para ingressar na Área da Tecnologia, inicialmente como Front-End. A tecnologia me fascina desde pequena, o poder de compartilhar informações, de facilitar e otimizar processos é sensacional e fazem meus olhos brilharem, poder contribuir com isso deve ser sem dúvidas muito gratificante e atualmente é um dos meus sonhos.</p>

       </div>


      </div>
      

    )
  }
  
  export default Apresentacao