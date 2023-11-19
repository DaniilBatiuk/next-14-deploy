"use server";

import next from "next";

const Reverso = require("reverso-api");
const reverso = new Reverso();

export interface ITranslations {
  translations: string[];
}

export interface ISynonyms {
  synonyms: ISynonym[];
}

export interface ISynonym {
  id: number;
  synonym: string;
}

export interface IExamples {
  examples: IExample[];
}

export interface IExample {
  id: number;
  source: string;
  target: string;
}

export interface TranslationResult {
  translations: string[];
  synonyms: ISynonym[];
  examples: IExample[];
}

export async function Translate(prevState: any, formData: FormData): Promise<TranslationResult> {
  const word = formData.get("word");
  try {
    const responseTranslations: ITranslations = await reverso.getTranslation(word, "english", "russian");

    const responseSynonyms: ISynonyms = await reverso.getSynonyms(word, "english");

    const responseExamples: IExamples = await reverso.getContext(word, "english", "russian");

    console.log(responseTranslations, responseSynonyms, responseExamples);

    return {
      translations: responseTranslations.translations,
      synonyms: responseSynonyms.synonyms,
      examples: responseExamples.examples,
    };
  } catch (err) {
    console.error(err);
    return { translations: [], synonyms: [], examples: [] };
  }
}

// export const Syn = async (word: string) => {
//   await reverso.getSynonyms(word, "english"),
//   next:{
//     tags:["synonyms"]
//   }
// };
