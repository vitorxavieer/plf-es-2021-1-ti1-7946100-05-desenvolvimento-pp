import styled from 'styled-components';
import { useEffect, useState, useRef } from 'react';
import { palheta } from '../components/palheta';
import * as Template from '../components/template';

function FormCadastroHabito(props) {
  return (
    <div className="Row">
      <div className="Label">
        <label>{props.label}</label>
      </div>
      <Template.NewInputs placeholder={props.placeholder} />
    </div>
  );
}

const FormHabitos = [
  { label: 'Nome do hábito*', placeholder: 'Correr' },
  { label: 'Ambiente', placeholder: 'Rua do Bairro' },
  { label: 'Unidade', placeholder: 'Metros' },
  { label: 'Periodicidade', placeholder: 'Diária' },
  { label: 'Horário', placeholder: '18:30' },
  {
    label: 'Recompensa por hábito',
    placeholder: 'Comer um chocolate',
  },
];

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
`;

const emojiRange = [
  [128513, 128591],
  [9986, 10160],
  [128640, 128704],
];

export function EmojiButton(props) {
  const [emoji, setEmoji] = useState(props.emoji || '&#128521');
  const ulRef = useRef(null);
  const divRef = useRef(null);

  let emojiRange2 = [];

  for (var i = 0; i < emojiRange.length; i++) {
    var range = emojiRange[i];
    for (var x = range[0]; x < range[1]; x++) {
      emojiRange2.push(x);
    }
  }

  useEffect(() => {
    if (ulRef.current) {
      emojiRange2.map((e, i) => {
        document.getElementById('emoji-' + i).innerHTML = '&#' + e;
      });
    }
  }, [ulRef.current]);

  useEffect(() => {
    if (divRef.current) divRef.current.innerHTML = emoji;
  }, [emoji]);

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
              id={'emoji-' + i}
              onClick={() => {
                setEmoji('&#' + e);
              }}
              href="#"
            >
              {'&#' + e + ''}
            </a>
          </li>
        ))}
      </ul>
    </EmojiButtonStyled>
  );
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
`;

function CadastroHabito() {
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
          <Template.NewInputs placeholder="Correr" />
        </div>
      </div>

      {FormHabitos.map((e, i) => (
        <FormCadastroHabito
          key={i}
          label={e.label}
          emoji={e.emoji}
          placeholder={e.placeholder}
        />
      ))}

      <div className="Submit">
        <Template.Button className="Button">Salvar hábito</Template.Button>

        <Template.Link>Mais informação</Template.Link>
      </div>
    </BodyPage>
  );
}

export default CadastroHabito;
