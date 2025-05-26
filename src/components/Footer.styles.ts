import styled, { css } from "styled-components";

export const FooterWrapper = styled.footer`
  background-color: ${({ theme }) => theme.colors.footerBackground};
  padding: 4rem 2rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.tablet}) {
      padding: 3rem 1.5rem 1rem;
    }
  `}
`;

export const FooterTop = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 2rem;

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.tablet}) {
      flex-direction: column;
      align-items: center;
    }
  `}
`;

export const FooterLogo = styled.img`
  width: 75px;
  height: 75px;
  flex-shrink: 0;

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.tablet}) {
      width: 40px;
      height: 40px;
    }
  `}
`;

export const FooterColumns = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.tablet}) {
      flex-direction: column;
      align-items: center;
      text-align: center;
      gap: 2rem;
    }
  `}
`;

export const FooterColumn = styled.div`
  min-width: 160px;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.tablet}) {
      align-items: center;
    }
  `}
`;

export const FooterHeading = styled.h4`
  font-size: 0.625rem;
  color: ${({ theme }) => theme.colors.primary};
  text-transform: uppercase;
  margin-bottom: 0.5rem;
`;

export const FooterLink = styled.a`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.primaryLight};
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: flex-start;

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.tablet}) {
      justify-content: center;
    }
  `}
`;

export const SocialIcon = styled.img`
  width: 16px;
  height: 16px;
  cursor: pointer;
  transition: opacity 0.3s ease;

  a:visited & {
    opacity: 1;
  }

  a:focus &,
  a:active & {
    opacity: 1;
  }

  &:hover {
    opacity: 0.75;
  }
`;

export const FooterDivider = styled.hr`
  width: 100%;
  max-width: 1164px;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.borderLight};
  border: none;
`;

export const FooterBottom = styled.div`
  width: 100%;
  max-width: 1164px;
  padding-bottom: 1rem;
  display: flex;
  justify-content: center;
`;

export const FooterNote = styled.p`
  font-size: 0.625rem;
  color: #09393199;
  text-align: center;
`;
