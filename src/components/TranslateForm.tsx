"use client";

import { Translate } from "@/functions/functions";
import { useFormState } from "react-dom";
import { TranslationsList } from "./TranslationsList";
import { SynonymsList } from "./SynonimsList";
import { ExampleList } from "./ExampleList";

const initialState = {
  translations: [],
  synonyms: [],
  examples: [],
};
export function TranslationForm() {
  const [state, formAction] = useFormState(Translate, initialState);
  console.log(state);
  return (
    <>
      <form action={formAction}>
        <input type="text" name="word" />
        <button type="submit">Add</button>
      </form>
      <TranslationsList translations={state.translations} />
      <SynonymsList synonyms={state.synonyms} />
      <ExampleList examples={state.examples} />
    </>
  );
}
