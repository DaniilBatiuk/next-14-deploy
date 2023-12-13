import { TranslateItem } from "@/components/TranslateItem";
import "@/styles/DictionaryPage.scss";
import { ITranslations, handleGetAllTranslations } from "@/functions/functions";

export async function DictLoading() {
  const res = await handleGetAllTranslations();

  return <div className="dictionary__list">{res?.length > 0 && res.map((el: ITranslations) => <TranslateItem key={el._id} translateItem={el} />)}</div>;
}
