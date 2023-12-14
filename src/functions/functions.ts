"use server";

import Translation from "@/app/(models)/translate";
import { revalidatePath } from "next/cache";

const Reverso = require("reverso-api");
const reverso = new Reverso();

export interface ITranslations {
  _id: string;
  word: string;
  translations: string[];
}

export interface ITranslationsGet {
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

export interface IOneTranslation {
  word: string;
  translation: string;
}

export interface ITrue {
  word: string;
  isTrue: boolean;
}

export interface ITest {
  word: string;
  translations: ITrue[];
}

export async function Translate(prevState: any, formData: FormData): Promise<TranslationResult> {
  const word = formData.get("word")?.toString();
  const languageFrom = formData.get("languageFrom");
  const languageTo = formData.get("languageTo");

  console.log(languageFrom, languageTo);
  try {
    const responseTranslations: ITranslationsGet = await reverso.getTranslation(word, languageFrom, languageTo);

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

export const handleAddWord = async (word: string, translations: string[]) => {
  try {
    const translationData = { word, translations };

    if (await handleIsExistTranslations(word)) {
      console.log("Translation is already exist");
    } else {
      await Translation.create(translationData);
      console.log("Translation created");
      revalidatePath("/dictionary");
    }
  } catch (err) {
    console.log(err);
  }
};

export const handleGetAllTranslations = async (): Promise<ITranslations[]> => {
  try {
    const rawTranslationData = (await Translation.find()).reverse();

    const res = JSON.parse(JSON.stringify(rawTranslationData)) as ITranslations[];

    console.log("Translation got all");
    return res;
  } catch (err) {
    console.log(err);
    return [];
  }
};

export const handleDeleteById = async (id: string) => {
  try {
    await Translation.findByIdAndDelete(id);

    console.log("Translation has been deleted by Id");
    revalidatePath("/dictionary");
  } catch (err) {
    console.log(err);
  }
};

export const handleUpdateById = async (_id: string, word: string, translations: string[]) => {
  try {
    await Translation.updateOne(
      { _id: _id },
      {
        word: word,
        translations: translations,
      },
    );

    console.log("Translation has been updated by Id");
    revalidatePath("/dictionary");
  } catch (err) {
    console.log(err);
  }
};

export const handleIsExistTranslations = async (word: string): Promise<boolean> => {
  try {
    const rawTranslationData = await Translation.findOne({
      word: word,
    });

    console.log("Translation search by word");

    return rawTranslationData ? true : false;
  } catch (err) {
    console.log(err);
    return false;
  }
};
