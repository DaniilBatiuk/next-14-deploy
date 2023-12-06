"use client";
import "@/styles/HomePage.scss";

import { ExampleList } from "@/components/ExampleList";
import { TranslationForm } from "@/components/TranslateForm";
import { TranslationsList } from "@/components/TranslationsList";
import { Translate } from "@/functions/functions";
import { useFormState } from "react-dom";

const initialState = {
  translations: [],
  synonyms: [],
  examples: [],
};

export function HomePage() {
  const [state, formAction] = useFormState(Translate, initialState);
  return (
    <div className="home__container">
      <TranslationForm formAction={formAction} state={state} />
      <TranslationsList translations={state.translations} />
      <ExampleList examples={state.examples} />
    </div>
  );
}
