import axios from "@/axios";
import { QueryClient } from "@tanstack/react-query";

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

export interface IMessage {
  message: string;
}
