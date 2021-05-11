import styled from 'styled-components';
import { palheta } from '../components/palheta';
import * as Template from '../components/template';

export const Body = styled.div`
  background-color: ${() => palheta.background};
  padding: 20px;
  max-width: 600px;
  margin: auto;

  .Habito {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 30px;
    margin-bottom: 30px;
  }

  .NewInputs {
    margin: 5px;
  }

  .Contador txt {
    padding-right: 16px;
  }

  .Contador {
    margin: 2px;
  }

  .fa {
    margin: 0 10px;
  }

  .CheckButton {
    height: 26px;
    width: 24px;
    margin: 0;
    margin-left: 10px;
    padding: 4px;
  }

  .CheckButton .fa {
    margin: 0px;
  }

  .Headers {
    margin-top: 20px;
    text-align: center;
  }

  .End {
    margin: 40px;
  }

  .Progresso {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 30px 0;
  }

  .Progresso h3 {
    margin-right: 10px;
  }

  .Submit {
    display: grid;
    place-items: center;
  }
`;

export const Navbar = styled.nav`
  display: flex;
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
          <Template.Emoji>🏃🏻‍♂️</Template.Emoji>
          <div className="NewInputs">
            <Template.NewInputs>
              <div className="Contador">
                <txt>Correr</txt>
                <i className="fa fa-minus"></i>5 Km
                <i className="fa fa-plus"></i>
                <i className="fa fa-history"></i>
                <i className="fa fa-trash"></i>
              </div>
            </Template.NewInputs>
          </div>
          <Template.Button className="CheckButton">
            <i className="fa fa-check"></i>
          </Template.Button>
        </section>
        <section className="Habito">
          <Template.Emoji>📚</Template.Emoji>
          <div className="NewInputs">
            <Template.NewInputs>
              <div className="Contador">
                <txt>Ler</txt>
                <i className="fa fa-minus"></i>20 pg
                <i className="fa fa-plus"></i>
                <i className="fa fa-history"></i>
                <i className="fa fa-trash"></i>
              </div>
            </Template.NewInputs>
          </div>
          <Template.Button className="CheckButton">
            <i className="fa fa-check"></i>
          </Template.Button>
        </section>
        <section className="Habito">
          <Template.Emoji>📝</Template.Emoji>
          <div className="NewInputs">
            <Template.NewInputs>
              <div className="Contador">
                <txt>Estudar</txt>
                <i className="fa fa-minus"></i>2 hr
                <i className="fa fa-plus"></i>
                <i className="fa fa-history"></i>
                <i className="fa fa-trash"></i>
              </div>
            </Template.NewInputs>
          </div>
          <Template.Button className="CheckButton">
            <i className="fa fa-check"></i>
          </Template.Button>
        </section>
        <section className="End">
          <div className="Progresso" style={{ marginTop: '80px' }}>
            <h4 className="Headers">Hoje</h4>
            <Template.BarraDeProgresso valor={70}></Template.BarraDeProgresso>
          </div>
          <div className="Progresso">
            <h4 className="Headers">Semana</h4>
            <Template.BarraDeProgresso valor={30}></Template.BarraDeProgresso>
          </div>
          <div className="Submit">
            <Template.Button className="Button">
              Adicionar Hábito
            </Template.Button>
            <Template.Link>Acompanhamento</Template.Link>
            <Template.Link>Mais Informações</Template.Link>
          </div>
        </section>
      </main>
    </Body>
  );
}

export default HomeLogado;
