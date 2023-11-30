import { ITranslations, dictionary } from "@/app/utils/dictionary";
import { TranslateItem } from "@/components/TranslateItem";
import "@/styles/DictionaryPage.scss";

export function DictionaryPage() {
  return (
    <div className="dictionary__container">
      <div className="dictionary__test">
        <h2 className="dictionary__title">Dictionary</h2>
        <button className="dictionary__button">Test</button>
      </div>
      <div className="dictionary__list">{dictionary?.length > 0 && dictionary.map((el: ITranslations, index: number) => <TranslateItem key={index} translateItem={el} />)}</div>
    </div>
  );
}
