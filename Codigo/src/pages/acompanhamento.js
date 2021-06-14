import styled from "styled-components"
import { palheta } from "../components/palheta"
import * as Template from "../components/template"

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

  .charts{
    max-height: 350px;
    text-align: center;
    margin: 40px 0px;
  }
  `


function Acompanhamento({ user, setPagina }) {
  return (
    <BodyPage>
      <main>
        <Template.Header1 className="Headers">Acompanhamento</Template.Header1>

        

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
