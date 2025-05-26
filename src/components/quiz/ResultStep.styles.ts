import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: white;
  color: ${({ theme }) => theme.colors.textDark};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  text-align: center;
`;

export const ResultText = styled.h2`
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

export const ResultLink = styled.a`
  color: ${({ theme }) => theme.colors.textDark};
  text-decoration: underline;
  font-weight: bold;

  &:hover {
    opacity: 0.8;
    text-decoration: none;
  }
`;
