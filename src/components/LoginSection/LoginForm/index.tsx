import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import { navigateToUrl } from "single-spa";
import { toast } from "react-toastify";

import { ValidateLogin } from "../../../utils/ValidateLogin";

import * as S from "./styles";

const supportSystems = [
  "Rede +Brasil",
  "Painéis",
  "Aplicativos",
  "Acesso livre",
];

interface LoginProps {
  labelLogin: string;
  labelLoginField: string;
  labelSenhaField: string;
  labelSenha: string;
  descriptionLogin: string;
  descriptionSenha: string;
}

export default function LoginForm({
  labelLogin,
  labelLoginField,
  labelSenha,
  labelSenhaField,
  descriptionLogin,
  descriptionSenha,
}: LoginProps) {
  const [loginData, setLoginData] = useState<string>("");
  const [passwordData, setPasswordData] = useState<string>("");

  const onValidate = async () => {
    try {
      if (await ValidateLogin(loginData, passwordData)) {
        navigateToUrl("http://localhost:9000/HomePage");
      }
    } catch (error) {
      console.log(error);
      toast.error(error);
    }
  };

  return (
    <S.Container>
      <S.Content>
        <S.TitleContainer>
          <S.TitleForm> ACESSO RESTRITO</S.TitleForm>
        </S.TitleContainer>

        <S.FormLogin>
          <S.SectionForm>
            <S.labelForm> {labelLogin}</S.labelForm>
            <TextField
              variant="outlined"
              fullWidth
              size="small"
              style={{
                backgroundColor: "#fff",
              }}
              label={labelLoginField}
              value={loginData}
              onChange={(e) => setLoginData(e.target.value)}
            />
            <S.labelDescription> {descriptionLogin}</S.labelDescription>
          </S.SectionForm>

          <S.SectionForm>
            <S.labelForm> {labelSenha}</S.labelForm>
            <TextField
              variant="outlined"
              fullWidth
              type="password"
              size="small"
              label={labelSenhaField}
              style={{
                backgroundColor: "#fff",
              }}
              value={passwordData}
              onChange={(e) => setPasswordData(e.target.value)}
            />
            <S.labelDescription> {descriptionSenha}</S.labelDescription>
            <S.ForgetPassword> Esqueceu sua senha?</S.ForgetPassword>
          </S.SectionForm>

          <Button
            variant="contained"
            disableElevation
            size="small"
            style={{
              borderRadius: 22,
              backgroundColor: "#0a6aa6",
              color: "#fff",
              textTransform: "capitalize",
            }}
            onClick={() => onValidate()}
          >
            {" "}
            Entrar{" "}
          </Button>
          <S.Diviver />
          <S.labelDescription> Sistemas de Apoio</S.labelDescription>
          <S.SystemsList>
            {supportSystems.map((elem, index) => (
              <React.Fragment key={index}>
                {" "}
                <S.ForgetPassword>{elem} </S.ForgetPassword>
              </React.Fragment>
            ))}
          </S.SystemsList>
        </S.FormLogin>
      </S.Content>
    </S.Container>
  );
}
