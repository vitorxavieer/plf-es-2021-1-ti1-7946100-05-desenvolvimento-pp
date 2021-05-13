import styled from 'styled-components';
import { palheta } from '../components/palheta';
import * as Template from '../components/template';
import React, { Component } from 'react';
import { createDoc } from '../utils/utils'

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
      user: this.props.user?.uid ?? ''
    };

    this.state = this.initialState;
  }

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  }

  onFormSubmit = (event) => {
    event.preventDefault();

    createDoc("habitos", this.state, () => { }, () => { });
    this.setState(this.initialState);
  }

  render() {
    let { nome, ambiente, unidade, periodicidade, horario, recompensa } = this.state;

    return (
      <BodyPage>
        <Template.Header1 style={{ textAlign: 'center' }}>
          Cadastro de hábito
            </Template.Header1>
        <form onSubmit={this.onFormSubmit}>
          <div className="Row">
            <div className="Label1">
              <label>Nome do hábito*</label>
              <Template.Emoji style={{ marginLeft: '10px' }}>😉</Template.Emoji>
            </div>
            <Template.NewInputs
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
            <Template.NewInputs
              placeholder="Ruas do bairro"
              maxLength="100"
              value={ambiente}
              onChange={this.handleChange}
              name="ambiente"
              required
            />
          </div>
          <div className="Row">
            <label>Unidade*</label>{' '}
            <Template.NewInputs
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
            <Template.NewInputs
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
            <Template.NewInputs
              value={horario}
              onChange={this.handleChange}
              name="horario"
              type="number"
              required
            />
          </div>
          <div className="Row">
            <label>Recompensa por hábito</label>{' '}
            <Template.NewInputs
              placeholder="Comer um chocolate"
              maxLength="100"
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
      </BodyPage>
    );
  }
}

export default CadastroHabito;
