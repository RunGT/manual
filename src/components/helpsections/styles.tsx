import styled from "styled-components";

export const HelpSectionWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4.375rem 2rem 5.625rem;
  gap: 3rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    padding: 2rem 1rem;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 370px;
  height: 445px;
  flex-shrink: 0;
  z-index: 2;

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    width: 300px;
    height: 360px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 250px;
    height: 300px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 200px;
    height: 250px;
  }
`;

export const SubHeading = styled.h2`
  display: flex;
  justify-content: center;
  font-size: 2.5rem;
  padding-top: 4.375rem;
  color: ${({ theme }) => theme.colors.textDark};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 2rem;
    padding-top: 2.5rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.7rem;
    padding-top: 2rem;
  }
`;

export const TextContent = styled.div`
  position: relative;
  max-width: 400px;
`;

export const NumberOverlay = styled.span<{ $left?: string }>`
  position: absolute;
  font-size: 28.125rem; /* 450px */
  font-weight: 400;
  color: ${({ theme }) => theme.colors.backgroundMuted};
  top: -148px;
  left: ${(props) => props.$left || "-90px"};
  line-height: 1;
  z-index: -10;
  pointer-events: none;
  user-select: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    font-size: 15rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 10rem;
    left: 1rem;
    top: 0.5rem;
  }
`;

export const Label = styled.span`
  font-size: 0.625rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.colors.textMuted};
`;

export const Heading = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
  padding: 0.5rem 0;
`;

export const BodyCopy = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.textDark};
  line-height: 1.6;
`;
