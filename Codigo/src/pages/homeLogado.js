import { useEffect, useState, useRef } from "react"
import styled from "styled-components"
import { palheta } from "../components/palheta"
import * as Template from "../components/template"
import { readDocsUmaCondicao, removeDoc } from "../utils/utils"

export const BodyPage = styled.div`
  background-color: ${() => palheta.background};
  padding: 30px;
  min-height: calc(100vh - 96px);
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

  .Emoji {
    margin-left: 0px;
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
`

export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
`

function HabitoLinha(props) {
  const emojiRef = useRef(null)
  const [feito, setFeito] = useState(false)
  const [erros, setErros] = useState("")
  useEffect(() => {
    if (emojiRef.current) emojiRef.current.innerHTML = props.emoji
  }, [emojiRef])

  return (
    <section className="Habito">
      <Template.Emoji ref={emojiRef} className="Emoji">
        {props.emoji}
      </Template.Emoji>
      <div className="NewInputs">
        <Template.TextoDestaque>
          <div className="Contador">
            <txt>{props.nome}</txt>
            <i className="fa fa-minus"></i>
            {props.valor} {props.unidade}
            <i className="fa fa-plus"></i>
            <i
              className="fa fa-history"
              onClick={() => {
                props.setHabitoSelecionado({
                  nome: props.nome,
                  habitoId: props.habitoId,
                  emoji: props.emoji,
                  unidade: props.unidade
                })
                props.setPagina(4)
              }}
            ></i>
            <i onClick={() => { if (window.confirm("Você deseja remover este hábito?")) removeDoc("habitos", props.habitoId,props.setFeito, setErros) }} className="fa fa-trash"></i>
          </div>
        </Template.TextoDestaque>
      </div>
      <Template.Button className="CheckButton">
        <i className="fa fa-check" style={{ fontSize: "24px" }}></i>
      </Template.Button>
    </section>
  )
}

// const Habitos = [
//   { valor: 5, unidade: "Km", nome: "Correr", emoji: "🏃🏻‍♂️" },
//   { valor: 20, unidade: "Pg", nome: "Ler", emoji: "📚" },
//   { valor: 2, unidade: "Hr", nome: "Estudar", emoji: "📝" },
// ]

function HomeLogado(props) {
  const [feito, setFeito] = useState(false)
  const [feitoremover, setFeitoremover] = useState(false)
  const [, setErros] = useState([])
  const [habitos, setHabitos] = useState([])
  useEffect(() => {
    readDocsUmaCondicao(
      "habitos",
      "user",
      props.user,
      setHabitos,
      setFeito,
      setErros
    )
  }, [])
  useEffect(() => {
    if(feitoremover){readDocsUmaCondicao(
      "habitos",
      "user",
      props.user,
      setHabitos,
      setFeito,
      setErros
    )
    setFeitoremover(false)
    }
  }, [feitoremover])
  return (
    <BodyPage className="container">
      <main>
        <Template.Header1 className="Headers">Hábitos de Hoje</Template.Header1>

        {habitos.map((e, i) => (
          <HabitoLinha
            key={i}
            valor={e.meta}
            unidade={e.unidade}
            nome={e.nome}
            emoji={e.emoji}
            habitoId={e.docId}
            setHabitoSelecionado={props.setHabitoSelecionado}
            setPagina={props.setPagina}
            setFeito={setFeitoremover}
          />
        ))}

        {feito && habitos.length === 0 && (
          <Template.Body style={{ textAlign: "center" }}>
            Ainda não tem nenhum hábito cadastrado 🙄
          </Template.Body>
        )}

        {!feito && (
          <Template.Body style={{ textAlign: "center" }}>
            <div class="text-center">
              <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
          </Template.Body>
        )}

        <section className="End">
          <div className="Progresso" style={{ marginTop: "80px" }}>
            <h4 className="Headers">Hoje</h4>
            <Template.BarraDeProgresso valor={70}></Template.BarraDeProgresso>
          </div>
          <div className="Progresso">
            <h4 className="Headers">Semana</h4>
            <Template.BarraDeProgresso valor={30}></Template.BarraDeProgresso>
          </div>
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
      </main>
    </BodyPage>
  )
}

export default HomeLogado
