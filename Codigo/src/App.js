import { useEffect, useState } from 'react';
// import * as firebase from "firebase"
import Test from './components/test';
import './App.css';
import { CONFIG } from './config';
import Template, { BarraDeProgresso, Button } from './components/template';
import Home from './pages/home';
import CadastroHabito from './pages/cadastroHabito';
import HomeLogado from './pages/homeLogado';

function App() {
  const [pagina, setPagina] = useState(0);
  /*   useEffect(() => {
    if (!firebase.apps.length) {
      firebase.initializeApp(CONFIG)
    }
  }, [])
  */

  return (
    <div className="App">
      {pagina == 0 && <Template />}
      <Home />
      <Test />
      <BarraDeProgresso valor={50} />
      {pagina == 2 && <CadastroHabito />}
      {pagina == 3 && <HomeLogado />}
      <Button onClick={() => setPagina(pagina == 3 ? 0 : pagina + 1)}>
        Cadastrar {pagina}
      </Button>
    </div>
  );
}

export default App;
