import styled, { css } from "styled-components";

export const HeroContainer = styled.section`
  width: 100%;
  max-height: 900px;
  min-height: 750px;
  background-image: url("/images/landing/BG.png");
  background-size: cover;
  background-position: right center;
  display: flex;
  justify-content: center;
  padding: 2rem;
  padding-left: 8.625rem;
  flex-direction: column;
  position: relative;

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.laptop}) {
      padding-left: 2rem;
      min-height: 450px;
    }
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
  max-width: 468px;
`;

export const LogoWrapper = styled.div`
  position: absolute;
  top: 2rem;

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.tablet}) {
      top: 1rem;
      left: 1rem;
    }
  `}

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.mobile}) {
      top: 0.7rem;
      left: 0.5rem;
    }
  `}
`;

export const Logo = styled.img`
  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.tablet}) {
      width: 24px;
      height: 24px;
    }
  `}
`;

export const HeroHeading = styled.h1`
  font-size: 3rem;
  line-height: 1.2;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textDark};
  padding-bottom: 1.25rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 2.25rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.75rem;
    padding-top: 1.75rem;
  }
`;

export const HeroSubheading = styled.p`
  font-size: 1.125rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.textDark};
  padding-bottom: 2.25rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 1rem;
    width: 450px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 0.8rem;
    width: 170px;
  }
`;

export const CTAButton = styled.button`
  padding: 0.75rem 1.5rem;
  background-color: ${({ theme }) => theme.colors.buttonPrimary};
  color: #fff;
  font-size: 0.875rem;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.buttonHover};
  }
`;