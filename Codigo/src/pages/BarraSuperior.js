import { useState } from 'react';
import * as Template from '../components/template';
import styled from 'styled-components';
import { login, logout } from '../utils/utils';
import { palheta } from '../components/palheta';
const Navbar = styled.nav`
  padding: 20px;
  max-width: 600px;
  width: 100%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  background: ${() => palheta.background};
  padding-bottom: 5px;
  .logo {
    margin-left: 10px;
  }
  .link-header {
    padding: 0px 0px;
  }
  .input-header {
    max-width: 100px;
  }
`;

function BarraSuperior(props) {
  const [erros, setErros] = useState('');
  return (
    <Navbar>
      <Template.Logo className="logo">1%</Template.Logo>
      {!props.user && (
        <div>
          <Template.Input
            className={'input-header'}
            placeholder="email"
            type="email"
          />
          <Template.Input
            className={'input-header'}
            placeholder="senha"
            type="password"
          />
          <Template.Link className={'link-header'}>Login</Template.Link>
          <Template.Link className={'link-header'}>Cadastro</Template.Link>
        </div>
      )}
      {props.user && (
        <Template.Link onClick={() => logout()} className={'link-header'}>
          logout
        </Template.Link>
      )}
    </Navbar>
  );
}
export default BarraSuperior;
