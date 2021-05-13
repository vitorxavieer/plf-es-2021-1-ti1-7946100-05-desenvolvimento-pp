import styled from 'styled-components';
import { palheta } from '../components/palheta';
import * as Template from '../components/template';
import React, {Component} from 'react';
import { createDoc } from '../utils/utils'

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

class CadastroHabito extends Component {
  constructor(props) {
    super(props);
    
    this.initialState = this.props.edit ?? {
      nome: '',
      ambiente: '',
      unidade: '',
      periodicidade: '',
      horario: '',
      recompensa: '',
      user: this.props.user
    };

    this.state = this.initialState;
  }

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
        [name] : value
    });
}

  onFormSubmit = (event) => {
      event.preventDefault();

      createDoc("habitos", this.state, () => {}, () => {});
      this.setState(this.initialState);
  }

  render() {
    let { nome, ambiente, unidade, periodicidade, horario, recompensa } = this.state;

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
            <form onSubmit={this.onFormSubmit}>
              <div className="Row">
                <div className="Label1">
                  <label>Nome do hábito*</label>
                  <Template.Emoji style={{ marginLeft: '10px' }}>😉</Template.Emoji>
                </div>
                <Template.Input 
                  placeholder="Correr" 
                  value={nome} 
                  onChange={this.handleChange}
                  maxLength="100"
                  name="nome"
                  required 
                />
              </div>
              <div className="Row">
                <label>Ambiente*</label>{' '}
                <Template.Input
                  placeholder="Ruas do bairro"
                  maxLength="200"
                  value={ambiente}
                  onChange={this.handleChange}
                  name="ambiente"
                  required
                />
              </div>
              <div className="Row">
                <label>Unidade*</label>{' '}
                <Template.Input 
                  placeholder="metros"
                  maxLength="50"
                  type="text"
                  value={unidade} 
                  onChange={this.handleChange}
                  name="unidade" 
                  required
                />
              </div>
              <div className="Row">
                <label>Periodicidade*</label>
                <Template.Input 
                  placeholder="Diária"
                  maxLength="50"
                  type="text"
                  value={periodicidade}
                  name="periodicidade" 
                  onChange={this.handleChange}
                  required 
                />
              </div>
              <div className="Row">
                <label>Horário*</label>{' '}
                <Template.Input 
                  value={horario} 
                  onChange={this.handleChange}
                  name="horario"
                  type="time"
                  required
                />
              </div>
              <div className="Row">
                <label>Recompensa por hábito</label>{' '}
                <Template.Input
                  placeholder="Comer um chocolate"
                  maxLength="200"
                  value={recompensa}
                  onChange={this.handleChange}
                  name="recompensa"
                />
              </div>
              <div className="Submit">
                <Template.Button type="submit" className="Button">Salvar hábito</Template.Button>
      
                <Template.Link>Mais informação</Template.Link>
              </div>
            </form>
          </main>
        </div>
      </Body>
    );
  }
}

export default CadastroHabito;
