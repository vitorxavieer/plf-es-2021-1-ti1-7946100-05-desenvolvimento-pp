import styled from "styled-components"
import { palheta } from "../components/palheta"
import * as Template from "../components/template"
import { readDocsDuasCondicoes, removeDoc, updateDoc } from "../utils/utils"
import { useEffect, useState, useRef } from "react"

const Container = styled.div`
  background-color: ${() => palheta.background};
  padding: 30px;
  min-height: calc(100vh - 97px);
  width: 100%;
  max-width: 600px;
  margin: auto;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  box-shadow: ${() => palheta.bodyBoxShadow};

  .lista-titulo {
    max-width: 400px;
    width: 100%;
    margin: auto;
    flex-direction: row;
    justify-content: space-around;
    display: flex;
  }

  h2 {
    .Emoji {
      display: inline-grid;
      margin: 0px;
      margin-right: 10px;
      padding-top: 0px;
    }
    line-height: 36px;
    vertical-align: middle;
  }

  .navegacao {
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    text-align: center;

    button {
      margin: auto;
      width: min-content;
      margin-bottom: 20px;
      white-space: nowrap;
    }
  }
`

const HistoricoLinha = styled.div`
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
  display: flex;
  max-width: 400px;

  i {
    margin-right: 15px;
    cursor: pointer;
  }
  input {
    border: none;
    max-width: 60px;
    text-align: center;
    margin: -5px 0px -5px 10px;
  }
`

function checkDigit(number) {
  return number < 10 ? "0" + number : number
}

function transformarData(data) {
  let dataToDate = data.toDate()
  let day = dataToDate.getDay(),
    month = dataToDate.getMonth() + 1,
    year = dataToDate.getYear() - 100,
    hour = dataToDate.getHours(),
    minute = dataToDate.getMinutes()

  return (
    checkDigit(day) +
    "/" +
    checkDigit(month) +
    "/" +
    year +
    " " +
    checkDigit(hour) +
    ":" +
    checkDigit(minute)
  )
}

function CadaHistorico({
  data,
  quantidade,
  historicoHabitoId,
  setFeitoRemover,
}) {
  const [erros, setErros] = useState("")
  const [novaQtde, setNovaQtde] = useState(quantidade)
  const [editar, setEditar] = useState(false)
  const [feito, setFeito] = useState(false)

  useEffect(() => {
    if (feito) {
      setEditar(false)
      setFeito(false)
    }
  }, [feito])

  return (
    <Template.TextoDestaque
      style={{ maxWidth: "400px", margin: "auto", margin: "15px auto" }}
    >
      <HistoricoLinha>
        <span>{transformarData(data)}</span>{" "}
        <span>
          <input
            type="number"
            value={novaQtde}
            onChange={e => setNovaQtde(e.target.value)}
            disabled={!editar ? "disabled" : ""}
          />
        </span>{" "}
        <span>
          {editar && (
            <>
              <i
                className={"fas fa-check-square"}
                onClick={() =>
                  updateDoc(
                    "historico_habito",
                    { quantidade: novaQtde },
                    historicoHabitoId,
                    setFeito,
                    setErros
                  )
                }
              />
              <i
                className="fas fa-window-close"
                onClick={() => {
                  setEditar(false)
                  setNovaQtde(quantidade)
                }}
              />
            </>
          )}
          {!editar && (
            <>
              <i className={"fa fa-edit"} onClick={() => setEditar(!editar)} />
              <i
                className="fa fa-trash"
                onClick={() =>
                  removeDoc(
                    "historico_habito",
                    historicoHabitoId,
                    setFeitoRemover,
                    setErros
                  )
                }
              />
            </>
          )}
        </span>
      </HistoricoLinha>
    </Template.TextoDestaque>
  )
}

function HistoricoHabitos({ user, habito, setPagina }) {
  const [historico, setHistorico] = useState([])
  const [erros, setErros] = useState("")
  const [feito, setFeito] = useState(false)
  const [feitoRemover, setFeitoRemover] = useState(false)
  const emojiRef = useRef(null)

  useEffect(() => {
    if (emojiRef.current) emojiRef.current.innerHTML = habito.emoji
  }, [emojiRef])

  useEffect(() => {
    if (user !== null && habito !== "") {
      readDocsDuasCondicoes(
        "historico_habito",
        "user",
        user,
        "habito",
        habito.habitoId,
        setHistorico,
        setFeito,
        setErros
      )
    }
  }, [])

  useEffect(() => {
    if (feitoRemover) {
      readDocsDuasCondicoes(
        "historico_habito",
        "user",
        user,
        "habito",
        habito.habitoId,
        setHistorico,
        setFeito,
        setErros
      )
      setFeitoRemover(false)
    }
  }, [feitoRemover])

  useEffect(() => {
    if (erros !== "") console.log("erros no fetch historico de habitos", erros)
  }, [erros])

  return (
    <Container>
      <div>
        <Template.Header1 className="Headers">
          Historico de Hábitos
        </Template.Header1>
        <Template.Header2 style={{ textAlign: "center" }}>
          <Template.Emoji ref={emojiRef} className="Emoji">
            {habito.emoji}
          </Template.Emoji>
          {habito.nome}
        </Template.Header2>
        <div className="lista-titulo">
          <span style={{ width: "110px", textAlign: "center" }}>Data</span>
          <span style={{ width: "40px" }}>Qtde</span>
          <span style={{ width: "60px" }} />
        </div>

        {feito && historico.length > 0 && (
          <div className="lista-historico">
            {historico
              .sort((a, b) => a - b)
              .map((e, i) => (
                <CadaHistorico
                  key={i}
                  data={e.data}
                  quantidade={e.quantidade}
                  historicoHabitoId={e.docId}
                  setFeitoRemover={setFeitoRemover}
                />
              ))}
          </div>
        )}
      </div>
      {!feito && (
        <Template.Body style={{ textAlign: "center" }}>
          <div class="text-center">
            <div class="spinner-border" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        </Template.Body>
      )}
      {feito && historico.length === 0 && (
        <Template.Body style={{ textAlign: "center" }}>
          Esse hábito ainda não foi concluído 🙄
        </Template.Body>
      )}

      <div className="navegacao">
        <Template.Button className="Button" onClick={() => setPagina(2)}>
          Adicionar Hábito
        </Template.Button>
        <Template.Link onClick={() => setPagina(1)}>Voltar</Template.Link>
      </div>
    </Container>
  )
}

export default HistoricoHabitos
