import styled from 'styled-components';
import { palheta } from '../components/palheta';
import * as Template from '../components/template';

export const BodyPage = styled.div`
  background-color: ${() => palheta.background};
  padding: 30px;
  min-height: 100%;
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
    padding-right: 8px;
  }

  .Contador {
    margin: 2px;
  }

  .fa {
    margin: 0 10px;
    cursor: pointer;
  }

  .CheckButton {
    height: 32px;
    width: 32px;
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
    margin: 30px;
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

  @media (max-width: 440px) {
    padding: 20px;

    .Emoji {
      margin-left: 0px;
      margin-right: 5px;
    }

    .Contador txt {
      padding-right: 0px;
    }

    .fa {
      margin: 0 8px;
    }

    .CheckButton {
      margin-right: -4px;
    }
  }
`;

export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
`;

function HabitoLinha(props) {
  return (
    <section className="Habito">
      <Template.Emoji className="Emoji">{props.emoji}</Template.Emoji>
      <div className="NewInputs">
        <Template.TextoDestaque>
          <div className="Contador">
            <txt>{props.nome}</txt>
            <i className="fa fa-minus"></i>
            {props.valor} {props.unidade}
            <i className="fa fa-plus"></i>
            <i className="fa fa-history"></i>
            <i className="fa fa-trash"></i>
          </div>
        </Template.TextoDestaque>
      </div>
      <Template.Button className="CheckButton">
        <i className="fa fa-check" style={{ fontSize: '24px' }}></i>
      </Template.Button>
    </section>
  );
}

const Habitos = [
  { valor: 5, unidade: 'Km', nome: 'Correr', emoji: '🏃🏻‍♂️' },
  { valor: 20, unidade: 'Pg', nome: 'Ler', emoji: '📚' },
  { valor: 2, unidade: 'Hr', nome: 'Estudar', emoji: '📝' },
];

function HomeLogado() {
  return (
    <BodyPage className="container">
      <main>
        <Template.Header1 className="Headers">Hábitos de Hoje</Template.Header1>

        {Habitos.map((e, i) => (
          <HabitoLinha
            key={i}
            valor={e.valor}
            unidade={e.unidade}
            nome={e.nome}
            emoji={e.emoji}
          />
        ))}

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
    </BodyPage>
  );
}

export default HomeLogado;
