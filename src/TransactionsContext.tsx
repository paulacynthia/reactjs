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

/*
interface TransactionInput {
  title: string;
  amount: number;
  type: string;
  category: string;
}
*/

// type TransactionInput = Pick<Transaction, 'title' | 'amount' | 'type' | 'category'>;

type TransactionInput = Omit<Transaction, "id" | "createdAt">;

interface TransactionsProviderProps {
  children: ReactNode;
}

interface TransactionsContextData {
  transactions: Transaction[]; // array de transaction
  createTransaction: (transaction: TransactionInput) => void;
  /* Uma função que recebe por parâmetro uma transaction do tipo transactionInput que 
  devolve void (vazio) */
}

export const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData
); // passa um objeto vazio e força o TS a aceitar que o void tem sim o formato que queremos

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

  function createTransaction(transaction: TransactionInput) {
    /* Para o transaction não podemos passar a interface Transaction porque ele esperaria receber o id e a data
    e quem é responsável por passar isso é o Mirage.JS não o user. Nisso, foi criado outra interface. 
    */
    // chamada a api
    api.post("/transactions", transaction);
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {/* O Contexto não pode só retornar a lista de transactions, ele tem que retornar também a 
      função de criação. Agora, para acessá-las será necessário fazer uma desestruturação */}
      {children}
    </TransactionsContext.Provider>
  );
}
