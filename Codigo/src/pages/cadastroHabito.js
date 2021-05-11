import styled from 'styled-components';
import { palheta } from '../components/palheta';
import * as Template from '../components/template';

export const Body = styled.div`
  background-color: ${() => palheta.background};
  color: ${() => palheta.text};
  padding: 20px;
  display: flex;
  max-width: 600px;
  margin: auto;

  .Navbar {
    display: flex;
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
    align-items: center;
  }

  .Label1 {
    display: flex;
  }

  .Submit {
    display: flex;
    flex-direction: column;
    align-items: center;
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
          <Template.Header1 style={{ textAlign: 'center' }}>
            Cadastro de hábito
          </Template.Header1>
          <div className="Row">
            <div className="Label1">
              <label>Nome do hábito*</label>
              <Template.Emoji style={{ marginLeft: '10px' }}>😉</Template.Emoji>
            </div>
            <Template.Input placeholder="Correr" disabled="" readOnly="true" />
          </div>
          <div className="Row">
            <label>Ambiente</label>{' '}
            <Template.Input
              placeholder="Ruas do bairro"
              disabled=""
              readOnly="true"
            />
          </div>
          <div className="Row">
            <label>Unidade</label>{' '}
            <Template.Input placeholder="metros" disabled="" readOnly="true" />
          </div>
          <div className="Row">
            <label>Periodicidade</label>{' '}
            <Template.Input placeholder="Diária" disabled="" readOnly="true" />
          </div>
          <div className="Row">
            <label>Horário</label>{' '}
            <Template.Input placeholder="18:30" disabled="" readOnly="true" />
          </div>
          <div className="Row">
            <label>Recompensa por hábito</label>{' '}
            <Template.Input
              placeholder="Comer um chocolate"
              disabled=""
              readOnly="true"
            />
          </div>
          <div className="Submit">
            <Template.Button className="Button">Salvar hábito</Template.Button>

            <Template.Link>Mais informação</Template.Link>
          </div>
        </main>
      </div>
    </Body>
  );
}

export default CadastroHabito;
