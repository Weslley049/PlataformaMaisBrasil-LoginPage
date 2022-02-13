import { find } from "lodash";
import { v4 as uuidv4 } from "uuid";

import { ValidLogins } from "./constants";

export async function ValidateLogin(login: string, senha: string) {
  if (find(ValidLogins, { login, senha })) {
    return generateToken();
  }

  throw "Usuário ou senha incorretos";
}

function generateToken() {
  const token = uuidv4();
  localStorage.setItem("@token", token);

  return true;
}
