import React, { useState } from "react";
import styled from "styled-components";
import { signUp } from "../utils/utils";
import * as Template from "./template";

const Background = styled.div`
    width = 100%;
    height = 100%;
    background = rgba(0, 0, 0, 0.8);
    position = fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;

`;
const ModalWrapper = styled.div`
  display: flex;
  flex-orientation: column;

  width: 400px;
  height: 600px;

  z-index: 10;
  border-radius: 10px;
  color: black;
  background: #f5f5f5;

  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  justify-content: flex-start;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const ModalContent = styled.div`

  form{
  
  width: 400px;
  height: 590px;
  position: relative;
  align=self: flex-start;
  }
  
  .modal-header{
    align-self: flex-start;
    width: 100%;
    display: flex-box;
    align-items: center;
    justify-content: center;
    color: #001F3F;
    
    
}
    .inpt {
      justify-self: center;
      display: flex-box;
      align-items: center;
      justify-content: center;
    }
    .modal-body{
      position: relative;

        width: 100%;
        display:flex;
        flex-direction: column;
        align-self: center;
        justify-content: space-between;
        height:  400px;
        
        .inpt{
          margin-left: 10px;
          margin-bottom: 20px;
            display:flex;
            align-items: center;
            justify-content: space-between;
        }
    }
    input{
        border: 1px solid #F5F5F5;
        box-shadow: 2px 2px 10px #D0D0D0, -10px -10px 10px #FFFFFF;
        margin-left: 20px;

    }
    .modal-title{
      position: relative;
      left: 35px;
    }
    }
    #btnEnviarCadastro{
      padding: 10px;
      color: #001F3F;
      font-weight: bold;
      font-size: 16px;
      border: 0px;

    }
    .closeButton{
      color: black;
      padding: 10px;
      position: relative;
      left: 100px;
    }
  }
`;

const ModalBackgroundES = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  background-color: black;
  z-index: 10;
`;

const ModalBackgroundAS = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  background-color: blue;
  z-index: 10;
`;

const ModalWrapperAS = styled.div`
  justify-content: flex-start;
  display: flex-box;
  flex-orientation: column;
  width: 400px;
  height: 300px;

  z-index: 20;
  border-radius: 10px;
  color: black;
  background: #f5f5f5;

  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  div {
    width: 400px;
  }
  .headerAlteraSenha {
    align-self: flex-start;
    justify-content: center;
    margin-bottom: 010px;
  }
  form {
    align-self: center;
    div {
      width: 400px;
      align-items: center;
      justify-content: center;
      margin-bottom: 10px;
    }
    .btnEnviarAS {
      padding: 10px;
      font-size: 15px;
    }
    .closeButton {
      color: black;
      padding: 10px;
      position: relative;
      left: 100px;
    }
  }
  #closeBtnAS,
  #closeBtnES {
    padding: 10px;
    color: black;
    position: absolute;
    right: 2px;
    top: -13px;
  }
`;

export const ModalAS = ({
  showModalAlterarSenha,
  setShowModalAlterarSenha,
}) => {
  const [emailCadastro, setEmailCadastro] = useState("");
  const [senhaCadastro, setSenhaCadastro] = useState("");
  // const [confirmaSenhaCadastro, setConfirmaSenhaCadastro] = useState("");
  const [, setErros] = useState("");
  return (
    <>
      {showModalAlterarSenha ? (
        <ModalBackgroundAS className="bgAS">
          <ModalWrapperAS
            showModalAlterarSenha={showModalAlterarSenha}
            className="wrapper"
          >
            <div className="headerAlteraSenha">
              <h4>Alterar Senha</h4>
              <Template.Button
                onClick={() => {
                  setShowModalAlterarSenha();
                }}
                className="closeButton"
                id="closeBtnAS"
              >
                X
              </Template.Button>
            </div>

            <form>
              <div className="emailAlterarSenha">
                <Template.Label>Digite seu email: </Template.Label>
                <Template.Input
                  type="email"
                  placeholder="Email"
                ></Template.Input>
              </div>
              <div className="senhaAtualAlterarSenha">
                <Template.Label>Digite sua senha atual: </Template.Label>
                <Template.Input
                  type="password"
                  placeholder="Senha Atual"
                  autocomplete="off"
                ></Template.Input>
              </div>
              <div className="novaSenhaAlterarSenha">
                <Template.Label>Digite sua nova senha: </Template.Label>
                <Template.Input
                  type="password"
                  placeholder="Nova Senha"
                  autocomplete="off"
                ></Template.Input>
              </div>

              <div>
                <Template.Button className="btnEnviarAS">
                  Enviar
                </Template.Button>
              </div>
            </form>
          </ModalWrapperAS>
        </ModalBackgroundAS>
      ) : null}
    </>
  );
};
