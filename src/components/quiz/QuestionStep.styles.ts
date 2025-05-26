
import { theme } from "@/styles/theme";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
`;

export const StepInfo = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

export const Step = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  color: #093931;
`;

export const QuestionText = styled.p`
  font-size: 1rem;
  color: #093931;
`;

export const OptionsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
`;

export const OptionButton = styled.button`
  background: none;
  border: 2px solid transparent;
  padding: 0.5rem 1rem;
  cursor: pointer;
  max-width: 140px;
  border-radius: 6px;
  transition: border-color 0.3s ease;
  color: #093931;
  font-size: 1rem;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    display: block;
    width: 100%;
    height: auto;
    border-radius: 6px;
  }

  span {
    display: inline-block;
    width: 100%;
  }

  &:hover {
    border-color: #093931;
  }

  &.selected {
    border-color: #093931;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    max-width: 115px;
  }
`;

export const BackButton = styled.button`
  background: none;
  border: none;
  color: #093931;
  text-decoration: underline;
  cursor: pointer;
  font-size: 0.875rem;

  &:hover {
    text-decoration: none;
  }
`;
