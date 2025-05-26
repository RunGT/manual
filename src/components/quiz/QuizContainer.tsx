import React, { useEffect, useState } from "react";
import styled from "styled-components";
import QuestionStep from "./QuestionStep";
import ResultStep from "./ResultStep";
import { Question, QuestionOption } from "@/types/quiz";
import { useRouter } from "next/router";

const API_URL = "/api/quiz";

export default function QuizContainer() {
  const [questions, setQuestions] = useState<Question[]>([]);
  // Tracks user answers; one slot per question, initialised as null
  const [answers, setAnswers] = useState<(QuestionOption | null)[]>([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [isRejected, setIsRejected] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        const res = await fetch(API_URL);
        const data = await res.json();
        setQuestions(data.questions);
        // Fill answer slots with nulls for tracking progress and revisits
        setAnswers(Array(data.questions.length).fill(null));
      } catch (err) {
        console.error("Failed to fetch quiz", err);
      }
    };
    fetchQuiz();
  }, []);

  const router = useRouter();
  const isQuizRoute = router.pathname === "/quiz";

  const handleAnswer = (answer: QuestionOption) => {
    // Save the selected answer for the current question
    const updatedAnswers = [...answers];
    updatedAnswers[currentStep] = answer;
    setAnswers(updatedAnswers);

    // If the answer is a rejection, mark quiz as complete
    if (answer.isRejection) {
      setIsRejected(true);
      setIsComplete(true);
      return;
    }

    setIsRejected(false);

    // If this was the last question, mark quiz as complete
    if (currentStep + 1 >= questions.length) {
      setIsComplete(true);
    } else {
      // Otherwise, move to the next question
      setCurrentStep((prev) => prev + 1);
    }
  };

  const goBack = () => {
    if (isComplete) {
      // Going back from results: reset to last question
      setIsComplete(false);
      setIsRejected(false);
      return;
    }

    if (currentStep > 0) {
      // Move back one question without clearing the previous answer
      setCurrentStep((prev) => prev - 1);
      setIsRejected(false);
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
        <ResultStep rejected={isRejected} onBack={goBack} />
      ) : (
        <QuestionStep
          step={currentStep + 1}
          total={questions.length}
          question={questions[currentStep]}
          onAnswer={handleAnswer}
          onBack={goBack}
          // Restore previous selection if available
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
  color: ${({ theme }) => theme.colors.primary};
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
