import React, { useEffect, useState } from "react";
import styled from "styled-components";
import QuestionStep from "./QuestionStep";
import ResultStep from "./ResultStep";
import { Question, QuestionOption } from "@/types/quiz";
import { useRouter } from "next/router";

const API_URL = "/api/quiz";

export default function QuizContainer() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<QuestionOption[]>([]);
  const [isRejected, setIsRejected] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        const res = await fetch(API_URL);
        const data = await res.json();
        setQuestions(data.questions);
      } catch (err) {
        console.error("Failed to fetch quiz", err);
      }
    };
    fetchQuiz();
  }, []);

  const router = useRouter();
  const { pathname } = router;

  const isQuizRoute = pathname === "/quiz";

  const handleAnswer = (answer: QuestionOption) => {
    const nextAnswers = [...answers, answer];
    setAnswers(nextAnswers);
    if (answer.isRejection) {
      setIsRejected(true);
      setIsComplete(true);
    } else if (currentStep + 1 >= questions.length) {
      setIsComplete(true);
    } else {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const goBack = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
      setAnswers((prev) => prev.slice(0, -1));
    }
  };

  if (!questions.length) return <FullScreen>Loading...</FullScreen>;

  return (
    <FullScreen>
      {isQuizRoute && !isComplete && (
        <ExitLogo href="/">
          <img src="/logos/manual/symbol.svg" alt="Manual home" />
        </ExitLogo>
      )}

      {isComplete ? (
        <ResultStep rejected={isRejected} />
      ) : (
        <QuestionStep
          step={currentStep + 1}
          total={questions.length}
          question={questions[currentStep]}
          onAnswer={handleAnswer}
          onBack={goBack}
          selected={answers[currentStep]?.value}
        />
      )}
    </FullScreen>
  );
}

const FullScreen = styled.div`
  width: 100vw;
  height: 100vh;
  background: white;
  color: #093931;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

const ExitLogo = styled.a`
  position: absolute;
  top: 1rem;
  left: 1rem;
  z-index: 10;

  img {
    width: 40px;
    height: 40px;
  }
`;
