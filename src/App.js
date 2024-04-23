import { useState } from 'react';
import Banner from './Componentes/Banner';
import CampoTexto from './Componentes/CampoTexto';
import Formulario from './Formulario';

function App() {

  const [colaboladores, setColaboladores] = useState([])

  const aonovoColaboradorAdicionado = (colabolador) =>{
    console.log(colabolador)
  }

  return (
    <div className="App">
      <Banner/>
      <Formulario aoColaboradorCadastrado={colaborador => {aonovoColaboradorAdicionado(colaborador)}}/>
    </div>
  );
}

export default App;
