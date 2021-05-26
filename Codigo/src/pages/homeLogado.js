import { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { palheta } from '../components/palheta';
import * as Template from '../components/template';
import { readDocsUmaCondicao, createDoc } from '../utils/utils';

export const BodyPage = styled.div`
  background-color: ${() => palheta.background};
  padding: 30px;
  min-height: 100%;
  max-width: 600px;
  margin: auto;
  box-shadow: ${() => palheta.bodyBoxShadow};

  .Habito {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 30px;
    margin-bottom: 30px;
  }
  //Concluir Hábito -> Deixar transparente
  .HabitoConcluido {
    opacity: 0.3;
    transition-duration: 0.5s;
  }

  .EmojiHorario {
    margin-bottom: -10px;
    display: flex;
    align-items: center;
  }

  .Emoji {
    margin-left: 0px;
  }

  .Horario {
    font-size: 24px;
    font-weight: normal;
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

  .ProgressoCard {
    padding: 40px;
    margin: 60px 0;
  }

  .Progresso {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .Progresso h3 {
    margin-right: 10px;
  }

  .EmojisConcluidos {
    margin-top: -20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .Submit {
    display: grid;
    place-items: center;
  }

  @media (max-width: 440px) {
    padding: 20px;

    .Emoji {
      margin-right: 5px;
    }

    .Contador txt {
      padding-right: 0px;
    }

    .fa {
      margin: 0 8px;
    }

    .CheckButton {
      margin-right: 0px;
      margin-left: 4px;
    }
  }
`;

export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
`;

function concluirHabito(habito) {
  let btn = document.getElementById('btnCheck');
  let habitoDiv = btn.parentNode;

  btn
    .onClick
    // [X]Fazer Efeito de Transparência:
    //habitoDiv.addClass('HabitoConcluido');
    // [ ] Passar ele pro último lugar da lista:
    // [ ] Criar Div de Hábitos Geral (que da um appendChild)
    // [ ] Criar uma função de posicao dos habitos na pagina
    //habitoDiv.setPosicao(totalHabitos.);
    //Passar emoji para lista de concluídos (embaixo da barra de progresso)

    //Alterar parâmetro de progresso da Barra
    ();
}

function HabitoLinha(props) {
  const emojiRef = useRef(null);
  const [concluido, setConcluido] = useState(false);
  const [valor, setValor] = useState(parseInt(props.valor));
  const [feito, setFeito] = useState(false);
  const [erros, setErros] = useState('');
  useEffect(() => {
    if (emojiRef.current) emojiRef.current.innerHTML = props.emoji;
  }, [emojiRef]);

  return (
    <section className={'Habito' + (concluido ? ' HabitoConcluido' : '')}>
      <div className="EmojiHorario">
        <Template.Emoji ref={emojiRef} className="Emoji">
          {props.emoji}
        </Template.Emoji>
        <Template.TextoDestaque>
          <span className="Horario">{/* {props.horario} */}09:00</span>
        </Template.TextoDestaque>
      </div>
      <div className="NewInputs">
        <Template.TextoDestaque>
          <div className="Contador">
            <txt>{props.nome}</txt>
            <i className="fa fa-minus" onClick={() => setValor(valor - 1)}></i>
            {valor} {props.unidade}
            <i className="fa fa-plus" onClick={() => setValor(valor + 1)}></i>
            <i className="fa fa-history"></i>
            <i className="fa fa-trash"></i>
          </div>
        </Template.TextoDestaque>
      </div>
      <Template.Button
        className="CheckButton"
        id="btnCheck"
        onClick={() => {
          props.setHabitoConcluido(props.habitoId);
          setConcluido(!concluido);
          let doc = {
            data: new Date(),
            habito: props.habitoId,
            quantidade: valor,
            user: props.user,
          };
          createDoc('historico_habito', doc, setFeito, setErros);
        }}
      >
        <i className="fa fa-check" style={{ fontSize: '24px' }}></i>
      </Template.Button>
    </section>
  );
}

// const Habitos = [
//   { valor: 5, unidade: "Km", nome: "Correr", emoji: "🏃🏻‍♂️" },
//   { valor: 20, unidade: "Pg", nome: "Ler", emoji: "📚" },
//   { valor: 2, unidade: "Hr", nome: "Estudar", emoji: "📝" },
// ]

function HomeLogado(props) {
  const [, setFeito] = useState([]);
  const [, setErros] = useState([]);
  const [habitoConcluido, setHabitoConcluido] = useState('');
  const [habitos, setHabitos] = useState([]);
  const [emojisConcluidos, setEmojisConcluidos] = useState([]);
  useEffect(() => {
    readDocsUmaCondicao(
      'habitos',
      'user',
      props.user,
      setHabitos,
      setFeito,
      setErros
    );
  }, []);

  useEffect(() => {
    if (habitoConcluido !== '') {
      let EmojisArray = emojisConcluidos;
      habitos.map((e) => {
        if (e.docId === habitoConcluido) {
          e.concluido = true;
          EmojisArray.push(e.emoji);
        }
      });
      setEmojisConcluidos(EmojisArray);
    }
  }, [habitoConcluido]);
  console.log(habitos);

  return (
    <BodyPage className="container">
      <main>
        <Template.Header1 className="Headers">Hábitos de Hoje</Template.Header1>
        <div className="Habitos">
          {habitos
            .sort((a, b) => (a.concluido ? -1 : +1))
            .map((e, i) => (
              <HabitoLinha
                habitoConcluido={habitoConcluido}
                setHabitoConcluido={setHabitoConcluido}
                habitoId={e.docId}
                user={props.user}
                key={i}
                valor={e.meta}
                unidade={e.unidade}
                nome={e.nome}
                emoji={e.emoji}
              />
            ))}

          <section className="End">
            <Template.Card className="ProgressoCard">
              <div className="Progresso">
                <h4 className="Headers">Hoje</h4>
                <Template.BarraDeProgresso
                  valor={70}
                ></Template.BarraDeProgresso>
                <span>70 %</span>
              </div>
              <div className="EmojisConcluidos">
                {emojisConcluidos.map((e, i) => (
                  <Template.Emoji key={i}>{e}</Template.Emoji>
                ))}
              </div>
            </Template.Card>
            <div className="Submit">
              <Template.Button
                className="Button"
                onClick={() => props.setPagina(2)}
              >
                Adicionar Hábito
              </Template.Button>
              <Template.Link>Acompanhamento</Template.Link>
              <Template.Link>Mais Informações</Template.Link>
            </div>
          </section>
        </div>
      </main>
    </BodyPage>
  );
}

export default HomeLogado;
