import styled from 'styled-components';
import { palheta } from '../components/palheta';
import * as Template from '../components/template';

export const Body = styled.div`
  background-color: ${() => palheta.background};
  padding: 20px;

  .Button {
    margin: 20px;
    padding: 5px;
  }

  .Habito {
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
    margin-bottom: 30px;
  }

  h1,
  h2 {
    text-align: center;
  }

  .Progresso {
    display: grid;
    place-items: center;
    margin: 30px 0;
  }
`;

export const Navbar = styled.nav`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 40px;
  justify-content: space-between;
`;

export const Img = styled.img`
  object-fit: cover;
  height: 100px;
  width: auto;
`;

function HomeLogado() {
  return (
    <Body className="container">
      <Navbar>
        <Template.Logo>1%</Template.Logo>
        <Template.Link>logout</Template.Link>
      </Navbar>
      <main>
        <Template.Header1 className="Headers">Hábitos de Hoje</Template.Header1>

        <section className="Habito">
          <h3>Correr</h3>
          <div className="Links">
            <Template.Link>histórico</Template.Link>
            <Template.Link>concluir</Template.Link>
            <Template.Link>edtiar</Template.Link>
          </div>
        </section>
        <section className="Habito">
          <h3>Ler</h3>
          <div className="Links">
            <Template.Link>histórico</Template.Link>
            <Template.Link>concluir</Template.Link>
            <Template.Link>edtiar</Template.Link>
          </div>
        </section>
        <section className="Habito">
          <h3>Estudar</h3>
          <div className="Links">
            <Template.Link>histórico</Template.Link>
            <Template.Link>concluir</Template.Link>
            <Template.Link>edtiar</Template.Link>
          </div>
        </section>

        <section className="Progresso">
          <Template.Header2 className="Headers">Avanço hoje</Template.Header2>
          <Template.BarraDeProgresso valor={70}></Template.BarraDeProgresso>
          <Template.Button className="Button">Adicionar Hábito</Template.Button>
        </section>
      </main>
    </Body>
  );
}

export default HomeLogado;
