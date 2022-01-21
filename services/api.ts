import axios, { AxiosError } from "axios";
import { parseCookies, setCookie } from "nookies";

let cookies = parseCookies();
let isRefreshing = false;
let failedRequestsQueue = []; // todas as requisições que aconteceram e deram falha

export const api = axios.create({
  baseURL: "http://localhost:3333",
  headers: {
    Authorization: `Bearer ${cookies["nextauth.token"]}`,
  },
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: AxiosError) => {
    if (error.response.status === 401) {
      if (error.response.data?.code === "token.expired") {
        // renovar o token
        cookies = parseCookies();

        const { "nextauth.refreshToken": refreshToken } = cookies;
        const originalConfig = error.config; // toda config da requisição feita pro back

        // refresh token apenas uma vez independente de quantas chamadas a api aconteçam
        if (!isRefreshing) {
          isRefreshing = true;
          api
            .post("/refresh", {
              refreshToken,
            })
            .then((response) => {
              const { token } = response.data;

              setCookie(undefined, "nextauth.token", token, {
                maxAge: 60 * 60 * 24 * 30,
                path: "/",
              });

              setCookie(
                undefined,
                "nextauth.refreshToken",
                response.data.refreshToken,
                {
                  maxAge: 60 * 60 * 24 * 30,
                }
              );

              //para atualizar o token da api:
              api.defaults.headers["Authorization"] = `Bearer ${token}`;

              /* Se a requisição do post tiver dado certo, vamos lá nas requisições falhadas e para cada uma delas 
              pega a req e executa o método de sucesso passando o token atualizado e depois deixa a lista em branco. */
              failedRequestsQueue.forEach((request) =>
                request.onSuccess(token)
              );
              failedRequestsQueue = [];
            })
            .catch((err) => {
              failedRequestsQueue.forEach((request) => request.onFailure(err));
              failedRequestsQueue = [];
            })
            .finally(() => {
              isRefreshing = false;
            });
        }

        /* O Axios não aceita trabalhar com async e await, a única forma de fazer ele esperar algo ser 
        executado é usando Promise e usa resolve e reject para as coisas que você quer que sejam aguardadas */

        return new Promise((resolve, reject) => {
          failedRequestsQueue.push({
            onSuccess: (token: string) => {
              // retentar aquela requisição
              originalConfig.headers["Authorization"] = `Bearer ${token}`;

              resolve(api(originalConfig));
            },
            onFailure: (err: AxiosError) => {
              reject(err);
            },
          });
        });
      } else {
        // deslogar o user
      }
    }
  }
);
