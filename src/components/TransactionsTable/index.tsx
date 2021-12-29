import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionsTable() {
  useEffect(() => {
    api
      .get("/transactions")
      /*Requisições do tipo get, buscando informações no 
      transactions. A barra inicial é opcional. 
      Não precisa mais do JSON*/
      .then((response) => console.log(response.data));
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
          <tr>
            <td>Desenvolvimento de website</td>
            <td className="deposit">R$12.000,00</td>
            <td>Desenvolvimento</td>
            <td>20/02/2021</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="withdraw">- R$1.100,00</td>
            <td>Casa</td>
            <td>17/02/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
