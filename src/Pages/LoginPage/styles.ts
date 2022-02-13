import styled from "styled-components";

interface ListProps {
  isActive?: boolean;
}

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-areas:
    "main aside"
    "main aside"
    "main rightAsidefooter";
`;

export const LoginBackground = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  grid-area: main;
  height: 100vh;
  width: 65vw;
  margin: 0;
  padding: 0;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("https://idp.plataformamaisbrasil.gov.br/idp/resources/imagens/ImagemLoginPlataformaBrasil.png");

  .welcomeContainer {
    position: relative;

    bottom: 10px;
    height: 250px;
    width: 100%;
    background-color: white;
    opacity: 0.7;
    color: black;
    overflow-x: hidden;
    overflow-y: hidden;

    .header {
      display: flex;
      align-items: center;
      width: 100%;
      height: 20%;
      border-bottom: 1px solid #007bff;

      ul {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        margin: 0;
        padding-left: 0;
        margin-bottom: 0;
        list-style: none;
      }
    }
  }
`;

export const LisItem = styled.li<ListProps>`
  display: list-item;
  margin: 0 20px;

  a {
    border: none;
    color: ${(props) => (props.isActive ? "#007bff" : "#6c757d")};
    font-weight: 400;
    font-family: "Open Sans";
    font-size: 16px;
    letter-spacing: 0em;
    font-style: normal;
    text-decoration: none;
  }
`;

export const ContentContainer = styled.div`
  height: 100%;
  overflow: auto;
`;

export const ContentTitle = styled.div`
  padding: 0 20px;
  h2 {
    font-family: "Open Sans";
    font-weight: 300;
    font-size: 30px;
    margin: 0;
    color: #0a6aa6;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  overflow: auto;
  padding: 0 20px;

  .WelcomeSection {
    p {
      color: #2e2e2e;
      font-size: 14px;
      font-weight: 400;
      line-height: 1.5;
      font-family: "Open Sans";
    }
  }

  .ContentContainer {
    p {
      color: #2e2e2e;
      font-size: 14px;
      font-weight: 400;
      line-height: 1.5;
      font-family: "Open Sans";
      margin-bottom: 20px;
    }
  }

  .listVoluntary {
    ul {
      list-style: none;
    }

    ul li {
      margin-bottom: 20px;
      color: #2e2e2e;
      font-size: 14px;
      font-weight: 400;
      line-height: 1.5;
      font-family: "Open Sans";
    }

    .lastElement {
      padding-bottom: 50px;
    }
  }
`;
