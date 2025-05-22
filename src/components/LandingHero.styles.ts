import styled from "styled-components"

export const HeroContainer = styled.section`

  width: 100%;
  max-height: 900px;
  min-height: 700px;
  background-image: url("/images/landing/BG.png");
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1rem;
    min-height: 400px;
  }
`;