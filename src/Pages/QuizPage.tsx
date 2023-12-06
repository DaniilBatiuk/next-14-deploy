"use client";
import { Quiz } from "@/components/Quiz";
import { useMultistepForm } from "@/components/useMultistepForm";
import { ITest } from "@/functions/functions";
import "@/styles/QuizPage.scss";
import { FormEvent } from "react";

type QuizPageProp = {
  res: ITest[];
};

export function QuizPage({ res }: QuizPageProp) {
  const quizElements = res.map((el: ITest, index) => <Quiz key={index} word={el.word} translations={el.translations} />);

  const { steps, currentStepIndex, step, isLastStep, next } = useMultistepForm(quizElements);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!isLastStep) {
      setTimeout(() => {
        next();
      }, 2000);
    } else {
      setTimeout(() => {
        alert("Successful Account Creation");
      }, 2000);
    }
  }

  return (
    <div className="quiz__container">
      <form onSubmit={onSubmit} className="quiz__form">
        <div style={{ position: "absolute", top: ".5rem", right: ".5rem" }}>
          {currentStepIndex + 1} / {steps.length}
        </div>
        {step}
      </form>
    </div>
  );
}
