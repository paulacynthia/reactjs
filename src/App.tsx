import { useState } from "react";

import Modal from "react-modal";

import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionsProvider } from "./TransactionsContext";

import { GlobalStyle } from "./styles/global";

Modal.setAppElement("#root");

export function App() {
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
    <TransactionsProvider>
      {/*Fragment: É um elemento que não tem nenhuma assinatura, é uma tag vazia. Basicamente, é uma div que não vai ser 
      repassada para o HTML da página. Dessa forma, não fazendo qualquer modificação no layout.*/}
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard /> {/* Summary está dentro do Dashboard */}
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
      <GlobalStyle />
    </TransactionsProvider>
  );
}
