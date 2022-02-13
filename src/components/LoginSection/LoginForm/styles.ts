import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 80%;
  width: 100%;
  align-items: center;
`;

export const Content = styled.div`
  width: 60%;
`;

export const FormLogin = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SectionForm = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: flex-start;
`;

export const TitleForm = styled.label`
  font-family: "Open Sans";
  font-weight: 200;
  font-size: 21px;
  color: #666;
  letter-spacing: 0.08em;
`;

export const labelForm = styled.label`
  font-family: "Open Sans";
  font-weight: 400;
  font-size: 14px;
  color: #666;
  letter-spacing: 0.08em;
`;

export const labelDescription = styled.label`
  font-family: "Open Sans";
  font-weight: 400;
  font-size: 12px;
  color: #666;
  letter-spacing: 0.08em;
`;

export const ForgetPassword = styled.a`
  font-family: "Open Sans";
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0em;
  font-style: italic;
  text-decoration: underline;
  color: #007bff;
`;

export const Diviver = styled.div`
  height: 1px;
  margin-top: 20px;
  width: 100%;
  border-top: 2px solid #ddd;
`;

export const SystemsList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  padding: 10px;
  width: 80%;
`;
