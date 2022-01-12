import { NextApiRequest, NextApiResponse } from "next";

export default (request: NextApiRequest, response: NextApiResponse) => {
  console.log(request.query);
  const users = [
    { id: 1, name: "Paula" },
    { id: 2, name: "João" },
    { id: 3, name: "Gabris" },
  ];

  return response.json(users);
};
