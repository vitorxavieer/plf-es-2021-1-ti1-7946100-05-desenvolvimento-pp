import { useState } from 'react';
import styled from 'styled-components';
import { palheta } from '../components/palheta';
import * as Template from '../components/template';
import { login } from '../utils/utils';

export const Body = styled.div`
  background-color: ${() => palheta.background};
  padding: 30px;
  max-width: 600px;
  margin: auto;

  .BlocoConteudo {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
  }

  .Button {
    margin: 10px;
    padding: 5px;
  }

  .NewInputs {
    margin: 10px;
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
  align-items: center;
`;

export const Img = styled.img`
  object-fit: cover;
  height: 100px;
  width: auto;
`;

function Home() {
  const [erros, setErros] = useState('');

  return (
    <Body className="container">
      <Navbar className="row">
        <Template.Logo className="col-xs-12 col-sm-1 col-md-1">
          1%
        </Template.Logo>
        <div className="col-xs-12 col-sm-11 col-md-11">
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
          <Template.Button
            style={{ maxWidth: '160px', minWidth: '110px', width: '25%' }}
            onClick={() =>
              login('octavio.rocha@sga.pucminas.br', '123456', setErros)
            }
            className="col-md-4"
          >
            Login/Cadastro
          </Template.Button>
        </div>
      </Navbar>
      <main>
        <Template.Header1 style={{ textAlign: 'center' }}>
          Como funciona?
        </Template.Header1>
        <Template.Header2>1 - Cadastre um hábito</Template.Header2>

        <p>
          Cadastre hábitos pequenos, que se tornarão em precessos, e vão
          construir uma nova identidade
        </p>
        <div className="BlocoConteudo">
          <Template.Emoji className="Button">😉</Template.Emoji>
          <div className="NewInputs">
            <Template.NewInputs>Correr</Template.NewInputs>
          </div>
        </div>
        <Template.Header2>2 - Acompanhe os hábitos</Template.Header2>
        <p>
          Veja uma lista atualizada diariamente com os hábitos a serem feitos
        </p>
        <div className="BlocoConteudo">
          <div className="NewInputs">
            <Template.NewInputs>
              Correr 5km 2 vezes por semana
            </Template.NewInputs>
          </div>
          <div className="NewInputs">
            <Template.NewInputs>Ler 10 páginas por dia</Template.NewInputs>
          </div>
        </div>
        <Template.Header2>3 - Veja o seu progresso</Template.Header2>
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
        </div>
        <div className="BlocoConteudo">
          <Template.Button>Quero me Cadastrar!</Template.Button>
        </div>
      </main>
    </Body>
  );
}

export default Home;
