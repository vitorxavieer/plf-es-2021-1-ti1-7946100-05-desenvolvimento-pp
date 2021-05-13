import { useState } from 'react';
import styled from 'styled-components';
import 'firebase/firestore';
import { createDoc, login, logout } from '../utils/utils';

const TestStyled = styled.div`
  background-color: red;
  height: 20px;
  width: 20px;
`;

function Test() {
  const [test, setTest] = useState(0);
  const [, setTestInput] = useState('');
  const [feito, setFeito] = useState(false);
  const [erros, setErros] = useState('');

  const valores = { unidades: 'metros' };

  return (
    <div>
      <div onClick={() => setTest(test + 1)}>Test {test}</div>
      <input
        type="test"
        placeholder="Type something..."
        /* onChange={(e) => setTestInput(e.eventPhase.target)} */
      />
      <button onClick={() => createDoc('habitos', valores, setFeito, setErros)}>
        Save doc
      </button>
      <TestStyled />
    </div>
  );
}

export default Test;
