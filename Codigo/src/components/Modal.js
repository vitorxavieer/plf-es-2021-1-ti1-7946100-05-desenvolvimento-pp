import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { signUp } from "../utils/utils";
import Template from "./template";

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
  position: fixed;
  width: 550px;
  height: 600px;

  z-index: 10;
  border-radius: 10px;
  color: black;
  background: #f5f5f5;
  background-color:green;
  padding: 0;
  top: 12.5%;
  left: 37.5%
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  justify-content: center;
`;
const ModalContent = styled.div`
  width: 540px;
  height: 590px;
  
  margin: 10px;
  background: red;
  width: 100%;
  
  .modal-header{
    background-color: blue;
    width: 100%;
    display: flex-box;
    align-items: center;
    justify-content: center;
    color: #001F3F;
    
}
    .inpt {
      
      background-color: purple;
      justify-self: center;
      display: flex-box;
      align-items: center;
      justify-content: center;
    }
    .modal-body{
        width: 100%;
        display:flex;
        flex-direction: column;
        flex-direction: column;
        justify-content: space-between;
        padding: 0 25%;
        height:  300px;
        margin-top: 40px;
        .inpt{
            display:flex;
            align-items: center;
            justify-content: space-between;
        }
    }
    input{
        border: 1px solid #F5F5F5;
        box-shadow: 2px 2px 10px #D0D0D0, -10px -10px 10px #FFFFFF;
    }

    }
    #btnEnviarCadastro{
      margin-left: 50%;
      border: 0px;
      background-color: rgba(248, 236, 220, 0.8);
    }
  }
`;

export const Modal = ({ showModal, setShowModal }) => {
  const [nomeCadastro, setNomeCadastro] = useState("");
  const [emailCadastro, setEmailCadastro] = useState("");
  const [senhaCadastro, setSenhaCadastro] = useState("");
  const [confirmaSenhaCadastro, setConfirmaSenhaCadastro] = useState("");
  const [erros, setErros] = useState("");
  return (
    <>
      {showModal ? (
        <Background>
          <ModalWrapper showModal={showModal}>
            <ModalContent>
              <div className="modal-header">
                <h3 className="modal-title">Cadastro</h3>
              </div>
              <div className="modal-body">
                <div className="nome">
                  <div className="inpt">
                    <label className="label">Nome: </label>
                    <input type="text" placeholder="Nome completo"></input>
                  </div>
                </div>
                <div className="email">
                  <div className="inpt">
                    <label className="label">Email: </label>
                    <input type="email" placeholder="Email"></input>
                  </div>
                </div>

                <div className="senha">
                  <div className="inpt">
                    <label className="label">Senha: </label>
                    <input type="password" placeholder="Senha"></input>
                  </div>
                </div>

                <div className="confirma-senha">
                  <div className="inpt">
                    <label className="label">Confirme a senha: </label>
                    <input
                      type="password"
                      placeholder="Confirme a senha"
                    ></input>
                  </div>
                </div>

                <div className="btnSubmit">
                  <div className="inpt">
                    <button
                      //onClick={() => signUp(nome, email, senha, setErros)}
                      onClick={() =>
                        signUp(emailCadastro, senhaCadastro, setErros)
                      }
                      id="btnEnviarCadastro"
                    >
                      Enviar
                    </button>
                  </div>
                </div>
              </div>
            </ModalContent>
          </ModalWrapper>
        </Background>
      ) : null}
    </>
  );
};
