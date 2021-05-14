import { useEffect, useState } from "react";
import styled from "styled-components";
import Test from "./components/test";
import { auth } from "./config/firebase.config";
import Template from "./components/template";
import CadastroHabito from "./pages/cadastroHabito";
import HomeLogado from "./pages/homeLogado";
import Home from "./pages/home";
import BarraSuperior from "./pages/BarraSuperior";

const Telas = ["Home", "HomeLogado", "Cadastro de Hábitos", "Template"];
const dropdownTitulo = "Navegação pelas telas: ";

const AppDiv = styled.div`
  min-height: 100vh;
  background-color: #e5e5e5;
  display: grid;
  grid-template-rows: auto auto 1fr;
`;

function App() {
  const [pagina, setPagina] = useState(0);
  const [user, setUser] = useState("");
  const [navegacao, setNavegacao] = useState(dropdownTitulo);
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    const unlisten = auth.onAuthStateChanged((authUser) => {
      authUser ? setUser(authUser) : setUser(null);
    });
    return () => {
      unlisten();
    };
  });
  useEffect(() => setNavegacao(dropdownTitulo + Telas[pagina]), [pagina]);
  console.log("user", user);

  return (
    <AppDiv>
      <div class="dropdown">
        <button
          class="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {navegacao}
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          {Telas.map((e, i) => (
            <li key={i}>
              <a class="dropdown-item" onClick={() => setPagina(i)} href="#">
                {e}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <BarraSuperior
        showModal={showModal}
        setShowModal={setShowModal}
        user={user != null ? user.uid : null}
      />
      {/* <Test /> */}
      {pagina == 0 && <Home setShowModal={setShowModal} />}
      {pagina == 1 && <HomeLogado />}
      {pagina == 2 && <CadastroHabito />}
      {pagina == 3 && <Template />}
      {/* <Button onClick={() => setPagina(pagina == 3 ? 0 : pagina + 1)}>
        Cadastrar {pagina}
      </Button> */}
    </AppDiv>
  );
}

export default App;
