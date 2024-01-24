"use client";
import { TranslateItem } from "@/components/TranslateItem";
import "@/styles/DictionaryPage.scss";
import { ITranslations, handleGetAllTranslations } from "@/functions/functions";
import { QueryClient, useQuery } from "@tanstack/react-query";
import { revalidateTag } from "next/cache";
import { useState, useEffect } from "react";
import axios from "@/axios";

type Res = {
  res: ITranslations[];
};
const fetchData = async () => {
  try {
    const { data } = await axios.get<Res>("/api/home");
    console.log(data);

    return data.res;
  } catch (error) {
    console.error(error);
    throw new Error("Error fetching data from API");
  }
};

export function DictLoading() {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["dictionary"],
    queryFn: fetchData,
  });

  if (isPending) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  const handleRevalidate = () => {
    const queryClient = new QueryClient();
    console.log("revalidate 1");
    queryClient.invalidateQueries({ queryKey: ["dictionary"] });
  };

  return (
    <>
      <button onClick={handleRevalidate} style={{ cursor: "pointer" }}>
        Revalidate
      </button>
      <div className="dictionary__list">{data.length > 0 && data.map((el: ITranslations) => <TranslateItem key={el._id} translateItem={el} />)}</div>
    </>
  );
}
