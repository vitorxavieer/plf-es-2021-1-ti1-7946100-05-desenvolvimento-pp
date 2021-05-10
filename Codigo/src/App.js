import { useEffect, useState } from 'react';
import Test from './components/test';
import './App.css';
import { auth } from './config/firebase.config';

function App() {
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
      bla
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
