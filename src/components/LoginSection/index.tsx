import React from "react";

import * as S from "./styles";

import DynamicImage from "../DynamicImage";
import LoginForm from "./LoginForm";

export default function LoginSection() {
  return (
    <S.Container>
      <S.LogoContainer>
        <DynamicImage
          srcPath="https://idp.plataformamaisbrasil.gov.br/idp/resources/imagens/producao/logo_portal.png"
          alt="logo_portal"
          height="60%"
          width="60%"
        />
      </S.LogoContainer>

      <LoginForm
        labelLogin="CPF"
        labelLoginField="Informe seu CPF"
        descriptionLogin="Informe CPF no formato 99999999999"
        labelSenha="Senha"
        labelSenhaField="Informe sua senha"
        descriptionSenha="Senha de acesso"
      />
    </S.Container>
  );
}
