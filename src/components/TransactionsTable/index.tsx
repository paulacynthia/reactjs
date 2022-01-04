import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";
interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}

export function TransactionsTable() {
  // O meu useState armazena um array de Transaction
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
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.type}>
                {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(transaction.amount)}
              </td>
              <td>{transaction.category}</td>
              <td>
                {new Intl.DateTimeFormat("pt-BR").format(
                  new Date(transaction.createdAt)
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}
