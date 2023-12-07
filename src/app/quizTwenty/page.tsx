import { QuizPage } from "@/Pages/QuizPage";
import { handleGetTestTwenty } from "@/functions/functions";

export default async function QuizTwenty() {
  const res = await handleGetTestTwenty();

  return (
    <main>
      <QuizPage res={res} />
    </main>
  );
}
