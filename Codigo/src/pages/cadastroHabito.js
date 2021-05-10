import styled from 'styled-components';
import { palheta } from '../components/palheta';
import * as Template from '../components/template';

export const Body = styled.div`
  background-color: ${() => palheta.background};
  padding: 20px;
  display: flex;

  .Navbar {
    justify-content: space-between;
    align-items: center;
  }

  .Button {
    margin: 10px;
    padding: 5px 10px;
  }

  .Input::-webkit-input-placeholder {
    color: #000;
  }
  .Row {
    display: flex !important;
    justify-content: space-between;
  }
`;

function CadastroHabito() {
  return (
    <Body>
      <div className="container">
        <div className="Navbar">
          <Template.Logo>1%</Template.Logo>
          <Template.Link>logout</Template.Link>
        </div>
        <main>
          <h2>Cadastro de hábito</h2>
          <div className="Row">
            <Template.Label>Nome do hábito</Template.Label>{' '}
            <Template.Button>😉</Template.Button>
            <Template.Input placeholder="Correr" disabled="" readOnly="true" />
          </div>
          <div className="Row">
            <Template.Label>Ambiente</Template.Label>{' '}
            <Template.Input
              placeholder="Ruas do bairro"
              disabled=""
              readOnly="true"
            />
          </div>
          <div className="Row">
            <Template.Label>Unidade</Template.Label>{' '}
            <Template.Input placeholder="metros" disabled="" readOnly="true" />
          </div>
          <div className="Row">
            <Template.Label>Periodicidade</Template.Label>{' '}
            <Template.Input placeholder="Diária" disabled="" readOnly="true" />
          </div>
          <div className="Row">
            <Template.Label>Horário</Template.Label>{' '}
            <Template.Input placeholder="18:30" disabled="" readOnly="true" />
          </div>
          <div className="Row">
            <Template.Label>Recompensa por hábito</Template.Label>{' '}
            <Template.Input
              placeholder="Comer um chocolate"
              disabled=""
              readOnly="true"
            />
          </div>

          <Template.Button className="Button">Salvar hábito</Template.Button>
          <Template.Link>Mais informação</Template.Link>
        </main>
      </div>
    </Body>
  );
}

export default CadastroHabito;
