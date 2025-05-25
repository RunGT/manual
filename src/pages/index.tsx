import Footer from "@/components/Footer";
import ErecetileDysfunctionSection from "@/components/helpsections/ErecetileDysfunctionSection";
import HairLoss from "@/components/helpsections/HairLoss";
import LandingHero from "@/components/LandingHero";
import QuizContainer from "@/components/quiz/QuizContainer";
import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [quizStarted, setQuizStarted] = useState(false);
  return (
    <>
      <Head>
        <title>Manual Case Study Quiz</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {quizStarted ? (
        <QuizContainer />
      ) : (
        <LandingHero onStartQuiz={() => setQuizStarted(true)} />
      )}
      <HairLoss />
      <ErecetileDysfunctionSection />
      <Footer />
    </>
  );
}
