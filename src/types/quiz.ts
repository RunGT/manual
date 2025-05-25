export type QuestionOption = {
  display: string; 
  value: string | boolean;
  isRejection?: boolean;
};


export type Question = {
  question: string;
  type: "ChoiceType";
  options: QuestionOption[];
};