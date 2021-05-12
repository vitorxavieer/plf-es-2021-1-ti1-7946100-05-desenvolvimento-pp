import styled from 'styled-components';
import { palheta } from '../components/palheta';
import * as Template from '../components/template';

export const BodyPage = styled.div`
  background-color: ${() => palheta.background};
  color: ${() => palheta.text};
  padding: 20px;
  display: flex;
  padding: 0px 30px;
  max-width: 600px;
  width: 100%;
  margin: auto;
  min-height: 100%;
  display: flex;
  flex-flow: column;
  justify-content: flex-start;

  .Navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .Button {
    margin: 10px;
    padding: 5px 10px;
  }

  .Row {
    display: flex !important;
    justify-content: space-between;
    align-items: center;
  }

  .Label1 {
    display: flex;
    align-items: center;
  }

  .Submit {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

function CadastroHabito() {
  return (
    <BodyPage>
      <Template.Header1 style={{ textAlign: 'center' }}>
        Cadastro de hábito
      </Template.Header1>
      <div className="Row">
        <div className="Label1">
          <label>Nome do hábito*</label>
          <Template.Emoji style={{ marginLeft: '10px' }}>😉</Template.Emoji>
        </div>
        <Template.NewInputs
          placeholder="Ex: Correr"
          disabled=""
          readOnly="true"
        />
      </div>
      <div className="Row">
        <label>Ambiente</label>{' '}
        <Template.NewInputs
          placeholder="Ex: Ruas do bairro"
          disabled=""
          readOnly="true"
        />
      </div>
      <div className="Row">
        <label>Unidade</label>{' '}
        <Template.NewInputs
          placeholder="Ex: metros"
          disabled=""
          readOnly="true"
        />
      </div>
      <div className="Row">
        <label>Periodicidade</label>{' '}
        <Template.NewInputs
          placeholder="Ex: Diária"
          disabled=""
          readOnly="true"
        />
      </div>
      <div className="Row">
        <label>Horário</label>{' '}
        <Template.NewInputs
          placeholder="Ex: 18:30"
          disabled=""
          readOnly="true"
        />
      </div>
      <div className="Row">
        <label>Recompensa por hábito</label>{' '}
        <Template.NewInputs
          placeholder="Ex: Comer um chocolate"
          disabled=""
          readOnly="true"
        />
      </div>
      <div className="Submit">
        <Template.Button className="Button">Salvar hábito</Template.Button>

        <Template.Link>Mais informação</Template.Link>
      </div>
    </BodyPage>
  );
}

export default CadastroHabito;
