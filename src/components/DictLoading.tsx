import { TranslateItem } from "@/components/TranslateItem";
import "@/styles/DictionaryPage.scss";
import { ITranslations, handleGetAllTranslations } from "@/functions/functions";
import { useQuery } from "@tanstack/react-query";
import { DictionaryService } from "@/services/dictionary.service";

export const getTodos = async () => {
  try {
    const response = await fetch("https://next-14-deploy-git-main-daniilbatiuk.vercel.app/api/home", { cache: "no-store" });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    throw new Error("Error fetching data from API");
  }
};

export async function DictLoading() {
  const data = await getTodos();

  return <div className="dictionary__list">{data?.res.length > 0 && data?.res.map((el: ITranslations) => <TranslateItem key={el._id} translateItem={el} />)}</div>;
}
