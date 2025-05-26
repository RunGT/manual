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
  const altMatch = display.match(/alt="([^"]+)"/);
  const srcMatch = display.match(/src="([^"]+)"/);
  return {
    label: altMatch?.[1] ?? display, // Fallback to display plain text responses "Yes/No"
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
          const { label, src } = parseOptionDisplay(opt.display);
          const isSelected = selected === opt.value;

          return (
            <OptionButton
              key={`${step}-${String(opt.value)}`} // Include the question step in the React key so each option is treated as a distinct element across steps
              onClick={() => onAnswer(opt)}
              className={isSelected ? "selected" : ""}
            >
              {src ? <img src={src} alt={label} /> : <span>{label}</span>}
            </OptionButton>
          );
        })}
      </OptionsGrid>

      {step > 1 && <BackButton onClick={onBack}>Back</BackButton>}
    </Wrapper>
  );
}
