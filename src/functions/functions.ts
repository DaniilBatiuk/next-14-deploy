"use server";

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
  const languageFrom = formData.get("languageFrom");
  const languageTo = formData.get("languageTo");

  console.log(languageFrom, languageTo);
  try {
    const responseTranslations: ITranslations = await reverso.getTranslation(word, languageFrom, languageTo);

    const responseSynonyms: ISynonyms = await reverso.getSynonyms(responseTranslations.translations[0], languageTo);

    const responseExamples: IExamples = await reverso.getContext(word, languageFrom, languageTo);

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
