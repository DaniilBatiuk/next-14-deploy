"use client";
import "@/styles/HomePage.scss";

import { ExampleList } from "@/components/ExampleList";
import { SynonymsList } from "@/components/SynonimsList";
import { TranslationForm } from "@/components/TranslateForm";
import { TranslationsList } from "@/components/TranslationsList";
import { Translate, TranslationResult } from "@/functions/functions";
import { useFormState } from "react-dom";

const initialState = {
  translations: [],
  synonyms: [],
  examples: [],
};

export function HomePage() {
  const [state, formAction] = useFormState(Translate, initialState);
  console.log(state);
  return (
    <div className="home__container">
      <TranslationForm formAction={formAction} />
      <TranslationsList translations={state.translations} />
      <ExampleList examples={state.examples} />
    </div>
  );
}
