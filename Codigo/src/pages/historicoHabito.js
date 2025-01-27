import React, { PureComponent } from "react"
import styled from "styled-components"
import { palheta } from "../components/palheta"
import * as Template from "../components/template"
import { readDocsDuasCondicoes, removeDoc, updateDoc } from "../utils/utils"
import { useEffect, useState, useRef } from "react"
import {
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"

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

  .grafico-historico {
    height: 300px;
    max-width: 440px;
    width: 100%;
    margin: 100px auto 50px;
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
  let day = dataToDate.getDate(),
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

function transformarData2(data) {
  let day = data.getDate(),
    month = data.getMonth() + 1

  return checkDigit(day) + "/" + checkDigit(month)
}

const orderData = (historico, valor) => {
  let historicoOrdenado = historico.sort(
    (a, b) => a.data.seconds - b.data.seconds
  )
  let historicoGrafico = []
  let inicio = new Date(historicoOrdenado[0].data.toDate()).setHours(0, 0, 0, 0)
  let amanha = new Date().setHours(24, 0, 0, 0)
  let i,
    j = 0,
    qtde = 0
  for (i = inicio; i < amanha; i += 86400000) {
    if (
      j < historicoOrdenado.length &&
      historicoOrdenado[j].data.toDate() > new Date(i) &&
      historicoOrdenado[j].data.toDate() < new Date(i).setHours(24, 0, 0, 0)
    ) {
      qtde += Number(historicoOrdenado[j].quantidade)
      historicoGrafico.push({
        name: transformarData2(new Date(i)),
        feito: Number(historicoOrdenado[j++].quantidade),
      })
    } else {
      historicoGrafico.push({
        name: transformarData2(new Date(i)),
        feito: 0,
      })
    }
  }
  let media = Math.round(qtde / historicoGrafico.length*10)/10
  historicoGrafico.map(e => {
    e.media = media
    e.meta = valor
  })
  return historicoGrafico
}

function HistoricoHabitos({ user, habito, setPagina }) {
  const [historico, setHistorico] = useState([])
  const [erros, setErros] = useState("")
  const [feito, setFeito] = useState(false)
  const [feitoRemover, setFeitoRemover] = useState(false)
  const [historicoGrafico, setHistoricoGrafico] = useState([])
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

  useEffect(() => {
    if (historico.length > 0)
      setHistoricoGrafico(orderData(historico, habito.valor))
  }, [JSON.stringify(historico)])

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

        {feito && historico.length > 0 && (
          <>
            <div className="lista-titulo">
              <span style={{ width: "120px", textAlign: "center" }}>Data</span>
              <span style={{ width: "70px" }}>Qtde ({habito.unidade})</span>
              <span style={{ width: "60px" }} />
            </div>
            <div className="lista-historico">
              {historico
                .sort((a, b) => b.data.seconds - a.data.seconds)
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
            <div className="grafico-historico">
              <Template.Header3
                style={{
                  textAlign: "center",
                  color: palheta.text,
                  fontSize: "22px",
                }}
              >
                Última semana
              </Template.Header3>
              <ResponsiveContainer width="99%">
                <ComposedChart
                  data={historicoGrafico}
                  margin={{
                    top: 5,
                    right: 20,
                    left: 20,
                    bottom: 15,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="feito" fill="#82ca9d" />
                  <Line type="monotone" dataKey="media" stroke="#ff7300" />
                  <Line type="monotone" dataKey="meta" />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
          </>
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
