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

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 500px;
  gap: 1.5rem;
`;

export const Logo = styled.img`
  width: 32px;
  height: auto;
`;

export const HeroHeading = styled.h1`
  font-size: 3rem;
  line-height: 1.2;
  font-weight: 700;
  color: #093931;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 2.25rem;
  }
`;

export const HeroSubheading = styled.p`
  font-size: 1.125rem;
  line-height: 1.6;
  color: #093931cc;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 1rem;
  }
`;

export const CTAButton = styled.button`
  padding: 0.75rem 1.5rem;
  background-color: #811c26;
  color: #fff;
  font-size: 0.875rem;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background-color: #6a141d;
  }
`;