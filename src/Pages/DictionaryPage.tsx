import { TranslateItem } from "@/components/TranslateItem";
import "@/styles/DictionaryPage.scss";
import { ITranslations, handleGetAllTranslations } from "@/functions/functions";
import Link from "next/link";

export async function DictionaryPage() {
  const res = await handleGetAllTranslations();

  return (
    <div className="dictionary__container">
      <div className="dictionary__test">
        <h2 className="dictionary__title">Dictionary</h2>
        <Link href="/quiz" className="dictionary__button">
          Test
        </Link>
        <Link href="/quizTwenty" className="dictionary__button">
          Test 20
        </Link>
      </div>
      <div className="dictionary__list">{res?.length > 0 && res.map((el: ITranslations) => <TranslateItem key={el._id} translateItem={el} />)}</div>
    </div>
  );
}
