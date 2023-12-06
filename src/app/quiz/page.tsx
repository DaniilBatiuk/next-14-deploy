import { QuizPage } from "@/Pages/QuizPage";
import { handleGetAllTranslations, handleGetTest } from "@/functions/functions";

export default async function Quiz() {
  const res = await handleGetTest();

  return (
    <main>
      <QuizPage res={res} />
    </main>
  );
}
