import React, { useState, ReactNode, useEffect } from "react";
import { find } from "lodash";

import LoginSection from "../../components/LoginSection";
import CallCenter from "../../components/CallCenter";

import * as S from "./styles";

interface HeaderSectionsProps {
  headerTitle: string;
  contentTitle: string;
  content: ReactNode;
  isActive: boolean;
}

export default function LoginPage() {
  const [headerSections, setHeaderSections] = useState<HeaderSectionsProps[]>([
    {
      headerTitle: "Plataforma +Brasil",
      contentTitle: "Bem-vindo à Plataforma +Brasil",
      isActive: false,
      content: (
        <div className="WelcomeSection">
          <p>
            {" "}
            A Plataforma +Brasil constitui ferramenta integrada e centralizada,
            com dados abertos, destinada à informatização e à operacionalização
            das transferências de recursos oriundos do Orçamento Fiscal e da
            Seguridade Social da União a órgão ou entidade da administração
            pública estadual, distrital, municipal, direta ou indireta,
            consórcios públicos e entidades privadas sem fins lucrativos.
          </p>
        </div>
      ),
    },
    {
      headerTitle: "Voluntárias",
      contentTitle: "Módulo Transferências Voluntárias",
      isActive: true,
      content: (
        <div className="ContentContainer">
          <p>
            {" "}
            Este módulo da Plataforma +Brasil opera Convênios, Contratos de
            Repasse, Termo de formento e Termo de colaboração.
          </p>
          <div className="listVoluntary">
            <ul>
              <li>
                {" "}
                <strong>Convênio:</strong> instrumento que disciplina a
                transferência de recursos financeiros visando à execução de
                programa, projeto ou atividade de interesse recíproco, em regime
                de mútua cooperação entre entidades da administração pública
                federal e demais entes da federação, consórcios públicos,
                entidades privadas sem fins lucrativos ou serviços sociais
                autônomos.
              </li>
              <li>
                {" "}
                <strong>Contrato de repasse: </strong> instrumento
                administrativo, de interesse recíproco, por meio do qual a
                transferência dos recursos financeiros se processa por
                intermédio de instituição ou agente financeiro público federal,
                que atua como mandatário da União.
              </li>
              <li>
                {" "}
                <strong>Termo de fomento: </strong> instrumento pelo qual são
                formalizadas as parcerias estabelecidas pela administração
                pública com organizações da sociedade civil para a consecução de
                finalidades de interesse público e recíproco propostas pelas
                organizações da sociedade civil, que envolvam a transferência de
                recursos financeiros.
              </li>
              <li>
                <strong>Termo de colaboração:</strong>
                instrumento pelo qual são formalizadas as parcerias
                estabelecidas pela administração pública com organizações da
                sociedade civil para a consecução de finalidades de interesse
                público e recíproco propostas pela administração pública, que
                envolvam a transferência de recursos financeiros.
              </li>
              <li className="lastElement">
                <strong>Termo de parceria:</strong>
                instrumento para transferência de recursos da administração
                pública para entidades qualificadas como Organização da
                Sociedade Civil de Interesse Público – OSCIP.
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      headerTitle: "Fundo a Fundo",
      contentTitle: "Módulo Transferências Fundo a Fundo",
      isActive: false,
      content: (
        <div className="">
          <p>
            Este módulo da Plataforma +Brasil opera transferências fundo a fundo
            e ainda encontra-se em construção.
          </p>

          <p>
            As transferências fundo a fundo caracterizam-se pelo repasse, por
            meio da descentralização, de recursos diretamente de fundos da
            esfera federal para fundos da esfera estadual, municipal e do
            Distrito Federal, dispensando a celebração de convênios.
          </p>
        </div>
      ),
    },
  ]);

  const findSection = (data: any) => {
    return data.isActive === true;
  };

  const onChangeSection = (index: number) => {
    setHeaderSections((old) => {
      const data = old;

      const ActivedSectionIndex = data.findIndex(findSection);

      data[ActivedSectionIndex].isActive = false;
      data[index].isActive = true;
      return data;
    });
  };

  return (
    <S.Container>
      <S.LoginBackground>
        <div className="welcomeContainer">
          <header className="header">
            <ul>
              {headerSections.map((section, index) => {
                return (
                  <React.Fragment key={index}>
                    <S.LisItem isActive={section.isActive}>
                      <a href="#" onClick={() => onChangeSection(index)}>
                        {" "}
                        {section.headerTitle}
                      </a>
                    </S.LisItem>
                  </React.Fragment>
                );
              })}
            </ul>
          </header>
          <S.ContentContainer>
            <S.ContentTitle>
              <h2>
                {
                  headerSections.find((section) => section.isActive)
                    .contentTitle
                }
              </h2>
            </S.ContentTitle>
            <S.Content>
              {headerSections.find((section) => section.isActive).content}
            </S.Content>
          </S.ContentContainer>
        </div>
      </S.LoginBackground>
      <LoginSection />
      <CallCenter />
    </S.Container>
  );
}
