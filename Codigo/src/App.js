import { useEffect, useState } from 'react';
import Test from './components/test';
import './App.css';
import { auth } from './config/firebase.config';
import { BarraDeProgresso, Button } from './components/template';
import Template from './components/template';
import CadastroHabito from './pages/cadastroHabito';
import HomeLogado from './pages/homeLogado';
import Home from './pages/home';

function App() {
  const [pagina, setPagina] = useState(0);
  const [user, setUser] = useState('');

  useEffect(() => {
    const unlisten = auth.onAuthStateChanged((authUser) => {
      authUser ? setUser(authUser) : setUser(null);
    });
    return () => {
      unlisten();
    };
  });

  console.log('user', user);

  return (
    <div className="App">
      <div class="dropdown">
        <button
          class="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Dropdown button
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li>
            <a class="dropdown-item" onClick={() => setPagina(0)} href="#">
              Home
            </a>
          </li>
          <li>
            <a class="dropdown-item" onClick={() => setPagina(1)} href="#">
              Home Logado
            </a>
          </li>

          <li>
            <a class="dropdown-item" onClick={() => setPagina(2)} href="#">
              Cadastro de Hábitos
            </a>
          </li>
          <li>
            <a class="dropdown-item" onClick={() => setPagina(3)} href="#">
              Template
            </a>
          </li>
        </ul>
      </div>
      {/* <Test /> */}
      {pagina == 0 && <Home />}
      {pagina == 1 && <HomeLogado />}
      {pagina == 2 && <CadastroHabito />}
      {pagina == 3 && <Template />}
      {/* <Button onClick={() => setPagina(pagina == 3 ? 0 : pagina + 1)}>
        Cadastrar {pagina}
      </Button> */}
    </div>
  );
}

export default App;
