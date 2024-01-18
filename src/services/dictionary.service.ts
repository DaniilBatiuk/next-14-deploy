import axios from "@/axios";
import { QueryClient } from "@tanstack/react-query";

export const DictionaryService = {
  async getDictionary() {
    const { data } = await axios.get<ITranslations[]>("/api/home");
    const queryClient = new QueryClient();
    await queryClient.refetchQueries({ queryKey: ["dictionary"], type: "active" });
    return data;
  },
  async patchDictionary({ _id, word, translations }: { _id: string; word: string; translations: string[] }) {
    const { data } = await axios.patch<IMessage>("/api/dictionary", { _id, word, translations });
    return data;
  },
  async deleteDictionary({ _id }: { _id: string }) {
    const response = await fetch(`/api/dictionary`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ _id: _id }),
    });
  },
  async addDictionary({ word, translations }: { word: string; translations: string[] }) {
    const { data } = await axios.post<IMessage>("/api/home", { word, translations });
  },
  async isExistInDictionary(word: string) {
    const { data } = await axios.post<IMessage>("/api/dictionary", { word });
    if (data.message === "Ok") {
      return true;
    } else {
      return false;
    }
  },
};

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
