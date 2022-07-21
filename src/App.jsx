import './App.css'

import Header from './Componentes/Header/Header';
import Apresentacao from './Componentes/Apresentacao/Apresentacao';
import Projetos from './Componentes/Projetos/Projetos';
import Repositorios from './Componentes/Repositorios/Repositorios';
import Footer from './Componentes/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <Apresentacao />
      <hr></hr>

      <div>
        <h1 className="paragrafo-principal">  4 projetos feitos na reprograma </h1>
        
      </div>
      <Projetos />
      <Repositorios />
      <Footer />
    </div>
  )
}

export default App
