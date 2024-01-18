import Translation from "@/app/(models)/translate";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const rawTranslationData = (await Translation.find()).reverse();

    const res = JSON.parse(JSON.stringify(rawTranslationData)) as ITranslations[];

    console.log("Translation got all");
    return NextResponse.json({ res: res });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ res: [] });
  }
}

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

function createTestArray(originalArray: IOneTranslation[]): ITest[] {
  return originalArray.map(obj => {
    const correctTranslation: ITrue = {
      word: obj.translation,
      isTrue: true,
    };

    const otherTranslations = originalArray
      .filter(o => o.word !== obj.word)
      .map(o => ({
        word: o.translation,
        isTrue: false,
      }));

    const randomOptions = shuffleArray(otherTranslations).slice(0, 3);

    const allOptions = shuffleArray([correctTranslation, ...randomOptions]);

    return {
      word: obj.word,
      translations: allOptions,
    };
  });
}

function shuffleArray<T>(array: T[]): T[] {
  const shuffledArray = [...array];

  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }

  return shuffledArray;
}
