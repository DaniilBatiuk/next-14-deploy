"use client";

import { ITest, ITrue } from "@/functions/functions";
import "@/styles/Quiz.scss";
import { useState } from "react";

export function Quiz({ word, translations }: ITest) {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [isClickedWord, setIsClickedWord] = useState<string>("");
  return (
    <>
      <div className="quiz__main__word">{word}</div>
      <div className="quiz__list">
        {translations &&
          translations.map((translation: ITrue, index) => (
            <button
              key={index}
              type="submit"
              className={!isClicked ? "quiz__variant" : translation.isTrue ? "quiz__variant-true" : isClickedWord !== translation.word ? "quiz__variant" : "quiz__variant-false"}
              onClick={() => {
                setIsClicked(true);
                setIsClickedWord(translation.word);
              }}
            >
              {translation.word}
            </button>
          ))}
      </div>
    </>
  );
}
