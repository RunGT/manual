import { Question, QuestionOption } from "@/types/quiz";
import React from "react";


type Props = {
  step: number;
  total: number;
  question: Question;
  onAnswer: (answer: QuestionOption) => void;
  onBack: () => void;
  selected: string | boolean;
};

export default function QuestionStep({ step, total, question, onAnswer }: Props) {
  return (
    <div>
      <h2>
        Step {step} of {total}
      </h2>
      <p>{question.question}</p>
      {question.options.map((opt) => (
  <button
    key={String(opt.value)}
    onClick={() => onAnswer(opt)}
    // TODO: Fix before submitting. Do not use this even though it's comming from a trusted source
    dangerouslySetInnerHTML={{ __html: opt.display }}
  />
))}

    </div>
  );
}
