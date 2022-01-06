import { createContext, useEffect, useState, ReactNode } from "react";
import { api } from "./services/api";

interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}

interface TransactionsProviderProps {
  children: ReactNode;
}

export const TransactionsContext = createContext<Transaction[]>([]);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api
      .get("/transactions")
      /*Requisições do tipo get, buscando informações no 
      transactions. A barra inicial é opcional. 
      Não precisa mais do JSON*/
      .then((response) => setTransactions(response.data.transactions));
    /* Os dados não são específicos como antes, mostra tudo agora ==> .then(data => console.log(data)). 
    Então, para mostrar que dentro de data, estão os dados usa-se o response e especifica que campo quer apresentar */
  }, []);

  return (
    <TransactionsContext.Provider value={transactions}>
      {children}
    </TransactionsContext.Provider>
  );
}
