"use client";
import { TranslateItem } from "@/components/TranslateItem";
import "@/styles/DictionaryPage.scss";
import { ITranslations, handleGetAllTranslations } from "@/functions/functions";
import { useQuery } from "@tanstack/react-query";

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
  const { status, data, error } = useQuery({ queryKey: ["todos"], queryFn: getTodos });

  if (status === "pending") {
    return <p>Loading...</p>;
  }

  if (status === "error") {
    return <p>Error: {error.message}</p>;
  }

  return <div className="dictionary__list">{data.res?.length > 0 && data.res.map((el: ITranslations) => <TranslateItem key={el._id} translateItem={el} />)}</div>;
}
