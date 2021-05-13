import { useState } from 'react';
import * as Template from '../components/template';
import styled from 'styled-components';
import { login, logout } from '../utils/utils';
import { palheta } from '../components/palheta';
import LogoTIAW from '../assets/LogoTIAW.png';

const Navbar = styled.nav`
  padding: 20px;
  max-width: 600px;
  width: 100%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: ${() => palheta.background};
  box-shadow: ${() => palheta.bodyBoxShadow};

  padding-bottom: 5px;
  .Logo {
    height: 72px;
    width: 72px;
    object-fit: cover;
    margin-left: 16px;
    cursor: pointer;
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
      <img className="Logo" src={LogoTIAW} onClick={() => props.setPagina(0)} />
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
