// TODO: Fix the question selection on the next step being highlighted when moving onto the next yes/no question it should stay highlighted when you move back to the previous question. Change image sizing for mobile and relevant breakpoints. Add manual logo for a home button to allow the user to exit the quiz at any time.
import React from "react";
import { Question, QuestionOption } from "../../types/quiz";
import {
  Wrapper,
  StepInfo,
  QuestionText,
  OptionsGrid,
  OptionButton,
  BackButton,
  Step,
} from "./QuestionStep.styles";

function parseOptionDisplay(display: string) {
  const altMatch = display.match(/alt="([^\"]+)"/);
  const srcMatch = display.match(/src="([^\"]+)"/);
  return {
    alt: altMatch?.[1] ?? display, // Fallback to display for plain text like "Yes"
    src: srcMatch?.[1] ?? "",
  };
}

type Props = {
  step: number;
  total: number;
  question: Question;
  onAnswer: (answer: QuestionOption) => void;
  onBack: () => void;
  selected?: string | boolean;
};

export default function QuestionStep({
  step,
  total,
  question,
  onAnswer,
  onBack,
  selected,
}: Props) {
  return (
    <Wrapper>
      <StepInfo>
        <Step>{`Step ${step} of ${total}`}</Step>
        <QuestionText>{question.question}</QuestionText>
      </StepInfo>

      <OptionsGrid>
        {question.options.map((opt) => {
          const { alt, src } = parseOptionDisplay(opt.display);
          const isSelected = selected === opt.value;

          return (
            <OptionButton
              key={String(opt.value)}
              onClick={() => onAnswer(opt)}
              className={isSelected ? "selected" : ""}
            >
              {src ? <img src={src} alt={alt} /> : <span>{alt}</span>}
            </OptionButton>
          );
        })}
      </OptionsGrid>

      {step > 1 && <BackButton onClick={onBack}>Back</BackButton>}
    </Wrapper>
  );
}
