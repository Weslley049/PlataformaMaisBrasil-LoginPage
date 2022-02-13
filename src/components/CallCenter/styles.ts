import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 15vh;

  background-color: #0a6aa6;
  grid-area: rightAsidefooter;
`;

export const contentTitle = styled.p`
  color: #fff;
  font-family: "Open Sans";
  font-weight: 600;
  font-size: 16px;
`;

export const contentLinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const contentLink = styled.a`
  font-family: "Open Sans";
  font-size: 13px;
  color: #fff;
  font-weight: 400;
  letter-spacing: 0em;
  font-style: italic;
  text-decoration: underline;
`;
