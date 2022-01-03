import { useState } from "react";
import Modal from "react-modal";
import logoImg from "../../assets/logo.svg";

import { Container, Content } from "./styles";

export function Header() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);
  /* Se isNewTransactionModalOpen estiver aberto, isso ficará como true 
  setisNewTransactionModalOpen é para mudar o estado de isNewTransactionModalOpen

  O valor do useState está como falso porque o Modal inicia-se fechado.
  */

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <Container>
      {/*Lembrete: logoImg está entre chaves porque é 
      assim que representamos um arquivo JS no HTML!*/}

      <Content>
        <img src={logoImg} alt="dt money" />
        <button type="button" onClick={handleOpenNewTransactionModal}>
          Nova transação
        </button>

        <Modal
          isOpen={isNewTransactionModalOpen}
          onRequestClose={handleCloseNewTransactionModal}
        >
          <h2>Cadastrar transação!</h2>
        </Modal>
      </Content>
    </Container>
  );
}
