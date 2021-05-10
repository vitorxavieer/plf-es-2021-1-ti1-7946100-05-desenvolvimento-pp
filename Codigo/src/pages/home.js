import styled from 'styled-components';
import { palheta } from '../components/palheta';
import * as Template from '../components/template';

export const Body = styled.div`
  background-color: ${() => palheta.background};
  padding: 30px;
  max-width: 600px;
  margin: auto;

  .BlocoConteudo {
    display: flex;
    justify-content: center;
  }

  .Button {
    margin: 10px;
    padding: 5px;
  }

  .Input::-webkit-input-placeholder {
    color: #000;
  }

  .ImgButton {
    height: 80px;
    width: auto;
    object-fit: fill;
  }
`;

export const Navbar = styled.nav`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 40px;
  justify-content: center;
`;

export const Img = styled.img`
  object-fit: cover;
  height: 100px;
  width: auto;
`;

function Home() {
  return (
    <Body className="container">
      <Navbar className="row">
        <Template.Logo className="col-md-1">1%</Template.Logo>
        <div className="col-md-11">
          <Template.Input
            style={{ maxWidth: '120px' }}
            className="col-md-4"
            placeholder="email"
            type="email"
          />
          <Template.Input
            style={{ maxWidth: '120px' }}
            className="col-md-4"
            placeholder="senha"
            type="password"
          />
          <Template.Button className="col-md-4">Login/Cadastro</Template.Button>
        </div>
      </Navbar>
      <main>
        <h1>Como funciona?</h1>
        <h2>1 - Cadastre um hábito</h2>

        <p>
          Cadastre hábitos pequenos, que se tornarão em precessos, e vão
          construir uma nova identidade
        </p>
        <div className="BlocoConteudo">
          <Template.Button className="Button">😉</Template.Button>{' '}
          <Template.Input
            className="Input"
            placeholder="Correr"
            disabled=""
            readOnly="true"
          />
        </div>
        <h2>2 - Acompanhe os hábitos</h2>
        <p>
          Veja uma lista atualizada diariamente com os hábitos a serem feitos
        </p>
        <div className="BlocoConteudo">
          <Template.Input
            className="Input"
            placeholder="Correr 5km 2 vezes por semana"
            disabled=""
            readOnly="true"
          />
          <Template.Input
            className="Input"
            placeholder="Ler 10 páginas por dia"
            disabled=""
            readOnly="true"
          />
        </div>
        <h2>3 - Veja o seu progresso</h2>
        <p>
          Tenha o seu desenvolvimento registrado e acessível a qualquer momento
        </p>
        <div className="BlocoConteudo">
          <Template.Card>
            <img
              className="ImgButton"
              src="https://www.flaticon.com/svg/vstatic/svg/558/558385.svg?token=exp=1620653177~hmac=684530842beb0aa92e2c21d0ad190215"
            />
          </Template.Card>
          <Template.Button>Adicionar Hábito</Template.Button>
        </div>
      </main>
    </Body>
  );
}

export default Home;
