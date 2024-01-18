"use client";
import { TranslateItem } from "@/components/TranslateItem";
import "@/styles/DictionaryPage.scss";
import { ITranslations, handleGetAllTranslations } from "@/functions/functions";
import { useQuery } from "@tanstack/react-query";
import { DictionaryService } from "@/services/dictionary.service";

export const getTodos = async () => {
  try {
    const response = await fetch("/api/home");

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Error fetching data from API");
  }
};

export function DictLoading() {
  const { isLoading, data } = useQuery({
    queryKey: ["dictionary"],
    queryFn: DictionaryService.getDictionary,
  });

  if (isLoading) {
    return <div style={{ margin: "80px" }}>Loading...</div>;
  }

  return <div className="dictionary__list">{data?.res.length > 0 && data?.res.map((el: ITranslations) => <TranslateItem key={el._id} translateItem={el} />)}</div>;
}
