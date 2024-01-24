import { TranslateItem } from "@/components/TranslateItem";
import "@/styles/DictionaryPage.scss";
import { ITranslations, handleGetAllTranslations } from "@/functions/functions";
import { useQuery } from "@tanstack/react-query";
import { DictionaryService } from "@/services/dictionary.service";

export async function DictLoading() {
  const res = await handleGetAllTranslations().then(await new Promise(resolve => setTimeout(resolve, 3000)));

  return <div className="dictionary__list">{res?.length > 0 && res.map((el: ITranslations) => <TranslateItem key={el._id} translateItem={el} />)}</div>;
}
