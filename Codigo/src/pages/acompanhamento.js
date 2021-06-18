import { useEffect,useState } from "react"
import { readDocsUmaCondicao, readDocsDuasCondicoesData } from "../utils/utils"
import styled from "styled-components"
import { palheta } from "../components/palheta"
import * as Template from "../components/template"
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
const BodyPage = styled.div`
  background-color: ${() => palheta.background};
  padding: 30px;
  min-height: calc(100vh - 96px);
  max-width: 600px;
  height: 100%;
  width: 100%
  margin: auto;
  box-shadow: ${() => palheta.bodyBoxShadow};
  
  main {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }

  .End{
    display: grid;
    place-items: center; 
  }

  .charts,.grafico-historico{
    max-height: 350px;
    text-align: center;
    margin: 40px 0px;
  }
  `
function preencherSemana(habitosSemana,habitos){
  let historicoSemana = [] 
  let data = new Date()
  let amanha = new Date().setHours(24,0,0,0)
  let total = 0 , i , habitosFeitos
  let semanaPassada = new Date(data.getFullYear(),data.getMonth(),data.getDate()-7,0,0,0)
  for (i = semanaPassada;i<amanha;i+=86400000){
    console.log(new Date(i),new Date(amanha))
    habitosFeitos = habitosSemana.filter(e=>e.data.toDate() > i && e.data.toDate()<i+86400000).length
    total += habitosFeitos
    historicoSemana.push({
      habitos_feitos: habitosFeitos / habitos.length * 100,
      name: new Date (i),
      meta: 100
    })
  }
  console.log(historicoSemana)
  return historicoSemana
}

function Acompanhamento({ user, setPagina }) {
  const[habitosSemana, setHabitosSemana] = useState([])
  const[feitoLerSemana, setFeitoLerSemana] = useState(false)
  const[,setErroSemana] = useState("")
  const[habitos, setHabitos] = useState([])
  const[feitoLer, setFeitoLer] = useState(false)
  const[,setErro] = useState("")
  useEffect(()=>{
    readDocsUmaCondicao("habitos","user",user,setHabitos,setFeitoLer,setErro)
  },[])
  console.log(habitos,feitoLer)
  useEffect(()=>{
    let data = new Date()
    let semanaPassada = new Date(data.getFullYear(),data.getMonth(),data.getDate()-7,0,0,0)
    console.log(data,semanaPassada)
    readDocsDuasCondicoesData("historico_habito","user",user,"data",semanaPassada,setHabitosSemana,setFeitoLerSemana,setErroSemana)
  },[habitos])
  return (
    <BodyPage>
      <main>
        <Template.Header1 className="Headers">Acompanhamento</Template.Header1>
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
                  data={preencherSemana(habitosSemana,habitos)}
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
                  <Bar dataKey="habito_feito" fill="#82ca9d" />
                  <Line type="monotone" dataKey="media" stroke="#ff7300" />
                  <Line type="monotone" dataKey="meta" />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
        

        <section className="End">
          <Template.Button className="Button" onClick={() => setPagina(2)}>
            Adicionar Hábito
          </Template.Button>
          <Template.Link onClick={() => setPagina(1)}>Voltar</Template.Link>
        </section>
      </main>
    </BodyPage>
  )
}

export default Acompanhamento