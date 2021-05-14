import styled from "styled-components"
import { useEffect, useState, useRef } from "react"
import { palheta } from "../components/palheta"
import * as Template from "../components/template"
import React, { Component } from "react"
import { createDoc } from "../utils/utils"

/* function FormCadastroHabito(props) {
  return (
    <div className="Row">
      <div className="Label">
        <label>{props.label}</label>
      </div>
      <Template.NewInputs
        type={props.type}
        placeholder={props.placeholder}
        required={props.required}
      />
    </div>
  );
}

const FormHabitos = [
  {
    label: 'Meta ideal*',
    type: 'number',
    placeholder: '4 ',
    required: 'required',
  },
  { label: 'Unidade', type: 'number', placeholder: 'Km', required: '' },
  {
    label: 'Periodicidade*',
    type: 'text',
    placeholder: 'Diária',
    required: 'required',
  },
  {
    label: 'Horário*',
    type: 'time',
    placeholder: '18:30',
    required: 'required',
  },
  { label: 'Local', type: 'text', placeholder: 'Ruas do Bairro', required: '' },
  {
    label: 'Recompensa por hábito',
    type: 'text',
    placeholder: 'Comer um chocolate',
    required: '',
  },
]; */

const EmojiButtonStyled = styled.div`
  ul.dropdown-menu.show {
    max-height: 300px;
    overflow: auto;
    width: 220px;
  }
  li,
  a {
    display: inline-block;
  }

  #dropdownMenuButton1 {
    :active {
      box-shadow: 2px 2px 5px #c3cad0, -2px -2px 5px #ffffff;
    }
  }
`

const emojiRange = [
  [128513, 128591],
  [9986, 10160],
  [128640, 128704],
]

export function EmojiButton(props) {
  const [emoji, setEmoji] = useState(props.emoji || "&#128521")
  const ulRef = useRef(null)
  const divRef = useRef(null)

  let emojiRange2 = []

  for (var i = 0; i < emojiRange.length; i++) {
    var range = emojiRange[i]
    for (var x = range[0]; x < range[1]; x++) {
      emojiRange2.push(x)
    }
  }

  useEffect(() => {
    let res = {
      target: {
        name: "emoji",
        value: emoji,
      },
    }
    props.onChange(res)
  }, [emoji])

  useEffect(() => {
    if (ulRef.current) {
      emojiRange2.map((e, i) => {
        document.getElementById("emoji-" + i).innerHTML = "&#" + e
      })
    }
  }, [ulRef.current])

  useEffect(() => {
    if (divRef.current) divRef.current.innerHTML = emoji
  }, [emoji])

  return (
    <EmojiButtonStyled className="dropdown">
      <Template.Button
        className="dropdown-toggle EmojiButton"
        type="button"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        ref={divRef}
      >
        😉
        {/* // </EmojiButtonStyled> */}
      </Template.Button>
      <ul
        ref={ulRef}
        class="dropdown-menu"
        aria-labelledby="dropdownMenuButton1"
      >
        {emojiRange2.map((e, i) => (
          <li key={i}>
            <a
              class="dropdown-item"
              id={"emoji-" + i}
              onClick={() => {
                setEmoji("&#" + e)
              }}
              href="#"
            >
              {"&#" + e + ""}
            </a>
          </li>
        ))}
      </ul>
    </EmojiButtonStyled>
  )
}

export const BodyPage = styled.div`
  background-color: ${() => palheta.background};
  color: ${() => palheta.text};
  padding: 20px;
  display: flex;
  max-width: 600px;
  width: 100%;
  margin: auto;
  min-height: 100%;
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  box-shadow: ${() => palheta.bodyBoxShadow};

  .Navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .Row {
    display: flex !important;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
  }

  .Label1 {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .Label {
    display: flex;
    align-items: center;
  }

  .Submit {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .EmojiButton {
    padding: 8px;
  }
`

/* function CadastroHabito() {
  return (
    <BodyPage>
      <Template.Header1 style={{ textAlign: 'center' }}>
        Cadastro de hábito
      </Template.Header1>
      <div className="Row">
        <div className="Label">
          <label>Hábito/Emoji*</label>
        </div>
        <div className="Label1">
          <EmojiButton />
          <Template.NewInputs placeholder="Correr" type="text" />
        </div>
      </div>

      {FormHabitos.map((e, i) => (
        <FormCadastroHabito
          key={i}
          label={e.label}
          emoji={e.emoji}
          type={e.type}
          placeholder={e.placeholder}
          required={e.required}
        />
      ))}

      <div className="Submit">
        <Template.Button className="Button">Salvar hábito</Template.Button>

        <Template.Link>Mais informação</Template.Link>
      </div>
    </BodyPage>
  ); */

class CadastroHabito extends Component {
  constructor(props) {
    super(props)

    this.initialState = this.props.edit ?? {
      nome: "",
      ambiente: "",
      meta: "",
      unidade: "",
      periodicidade: "",
      horario: "",
      recompensa: "",
      emoji: "😉",
      user: this.props.user?.uid ?? "",
    }

    this.state = this.initialState
  }

  handleChange = event => {
    const { name, value } = event.target

    this.setState({
      [name]: value,
    })
  }

  onFormSubmit = event => {
    event.preventDefault()

    createDoc(
      "habitos",
      this.state,
      this.props.setHabitoCadastrado,
      () => {}
    ).then(() => {
      this.setState(this.initialState)
      this.props.setPagina(1)
    })
  }

  render() {
    let {
      nome,
      ambiente,
      meta,
      unidade,
      periodicidade,
      horario,
      recompensa,
    } = this.state

    return (
      <BodyPage>
        <Template.Header1 style={{ textAlign: "center" }}>
          Cadastro de hábito
        </Template.Header1>
        <form onSubmit={this.onFormSubmit}>
          <div className="Row">
            <div className="Label1">
              <label>Nome do hábito*</label>
            </div>
            <div className="Label1">
              <EmojiButton onChange={this.handleChange} />
              <Template.NewInputs
                placeholder="Correr"
                value={nome}
                onChange={this.handleChange}
                maxLength="100"
                name="nome"
                required
              />
            </div>
          </div>
          <div className="Row">
            <label>Ambiente*</label>{" "}
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
            <label>Meta Ideal*</label>{" "}
            <Template.NewInputs
              placeholder="metros"
              maxLength="50"
              type="text"
              value={meta}
              onChange={this.handleChange}
              name="meta"
              required
            />
          </div>
          <div className="Row">
            <label>Unidade*</label>{" "}
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
            <label>Horário*</label>{" "}
            <Template.NewInputs
              value={horario}
              onChange={this.handleChange}
              name="horario"
              type="time"
              required
            />
          </div>
          <div className="Row">
            <label>Recompensa por hábito</label>{" "}
            <Template.NewInputs
              placeholder="Comer um chocolate"
              maxLength="100"
              value={recompensa}
              onChange={this.handleChange}
              name="recompensa"
            />
          </div>
          <div className="Submit">
            <Template.Button type="submit" className="Button">
              Salvar hábito
            </Template.Button>
            <Template.Link onClick={() => this.props.setPagina(1)}>Cancelar</Template.Link>
            <Template.Link>Mais informação</Template.Link>
          </div>
        </form>
      </BodyPage>
    )
  }
}

export default CadastroHabito
