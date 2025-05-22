import styled, { css } from "styled-components";

export const HeroContainer = styled.section`
  width: 100%;
  max-height: 900px;
  min-height: 700px;
  background-image: url("/images/landing/BG.png");
  background-size: cover;
  background-position: right center;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.tablet}) {
      padding: 1rem;
      min-height: 400px;
    }

    @media (max-width: ${theme.breakpoints.mobile}) {
      padding: 0.5rem;
      min-height: 300px;
    }
  `}
`;
