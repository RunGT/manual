import styled from "styled-components";

export const HelpSectionWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
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

export const TextContent = styled.div`
  position: relative;
  max-width: 400px;
  z-index: 2;
`;

export const NumberOverlay = styled.span`
  position: absolute;
  font-size: 8rem;
  font-weight: 600;
  color: rgba(9, 57, 49, 0.05);
  top: -2.5rem;
  left: -2rem;
  pointer-events: none;
  user-select: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 5rem;
    top: -1.5rem;
    left: 0;
  }
`;

export const Label = styled.span`
  font-size: 0.625rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #09393199;
`;

export const Heading = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: #093931;
  padding: 0.5rem 0;
`;

export const BodyCopy = styled.p`
  font-size: 0.875rem;
  color: #093931cc;
  line-height: 1.6;
`;
