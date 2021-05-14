import React, { useState, useEffect } from "react";
import * as Template from "../components/template";
import styled from "styled-components";
import { login, logout } from "../utils/utils";
import { palheta } from "../components/palheta";
import { Modal } from "../components/Modal";
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
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const opcoes = ["Esqueci a senha", "Alterar minha senha"];

function BarraSuperior(props) {
  const [erros, setErros] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [show, setShow] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  console.log(erros);
  useEffect(() => {
    if (erros !== "") {
      let erros2;
      if (erros === "Password should be at least 6 characters")
        erros2 = "A senha deve conter no mínimo 6 caracteres";
      if (erros === "The email address is already in use by another account.")
        erros2 = "Email já cadastrado.";
      if (erros === "The email address is badly formatted.")
        erros2 = "Formato de email inválido.";
      if (
        erros ===
        "There is no user record corresponding to this identifier. The user may have been deleted."
      )
        erros2 = "Email não cadastrado.";
      if (
        erros ===
        "The password is invalid or the user does not have a password."
      )
        erros2 = "Senha inválida.";
      if (
        erros ===
        "Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later."
      )
        erros2 =
          "Sua conta foi temporariamente desabilitada devido a diversas tentativas falhas de login.";

      alert(erros2);
    }
  }, [erros]);

  return (
    <Navbar>
      <Template.Logo className="logo">1%</Template.Logo>
      {!props.user && (
        <div>
          <Template.Input
            className={"input-header"}
            placeholder="email"
            type="email"
          />
          <Template.Input
            className={"input-header"}
            placeholder="senha"
            type="password"
          />
          <Template.Link
            onClick={() => login(email, senha, setErros)}
            className={"link-header"}
          >
            Login
          </Template.Link>
          <Template.Link onClick={openModal}>Cadastrar</Template.Link>
          <Modal showModal={showModal} setShowModal={setShowModal} />
          <div class="dropdown" id="div-dropdown-opcoesLogin">
            <Template.Button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownOpcoesLogin"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              ?
            </Template.Button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              {opcoes.map((e, i) => (
                <li key={i}>
                  <a
                    class="dropdown-item"
                    onClick={() => console.log("a")}
                    href="#"
                  >
                    {e}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
      {props.user && (
        <Template.Link onClick={() => logout()} className={"link-header"}>
          logout
        </Template.Link>
      )}
    </Navbar>
  );
}
export default BarraSuperior;
