import { RepositoryItem } from "./RepositoryItem";

import "../styles/repositories.scss";
import { useState, useEffect } from "react";

const repository = {
  name: "unform",
  description: "Forms in React",
  link: "https://github.com/unform/unform",
};

export function RepositoryList() {
  const [repositories, setRepositories] = useState([]);

  /* Dentro do useEffect foi feito um fetch na api do github para buscar os 
  repositórios, quando esse fetch devolver uma resposta, ela será convertida 
  para JSON. E quando a resposta para JSON terminar de ser convertida, 
  teremos os dados do repositório. O próximo passo foi pegar o data e 
  salvar ele dentro do setRepositories. */

  useEffect(() => {
    fetch("https://api.github.com/orgs/rocketseat/repos")
      .then((response) => response.json())
      .then((data) => setRepositories(data));
  }, []);

  return (
    <section className="repository-list">
      <h1>Lista de Repositórios:</h1>

      <ul>
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
      </ul>
    </section>
  );
}
