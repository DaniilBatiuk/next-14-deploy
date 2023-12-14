import { QuizPage } from "@/Pages/QuizPage";
import { handleGetTestTwenty } from "@/functions/functions2";

export default async function QuizTwenty() {
  const res = await handleGetTestTwenty();

  return (
    <main>
      <QuizPage res={res} />
    </main>
  );
}
