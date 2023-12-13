import "@/styles/DictionaryPage.scss";

import Link from "next/link";
import { Suspense } from "react";
import Loading from "@/app/dictionary/loading";
import { DictLoading } from "@/components/DictLoading";

export function DictionaryPage() {
  return (
    <div className="dictionary__container">
      <div className="dictionary__test">
        <h2 className="dictionary__title">List</h2>
        <div className="dictionary__links">
          <Link href="/quiz" className="dictionary__button">
            Test
          </Link>
          <Link href="/quizTwenty" className="dictionary__button">
            Test 20
          </Link>
        </div>
      </div>
      <Suspense fallback={<Loading />}>
        <DictLoading />
      </Suspense>
    </div>
  );
}
