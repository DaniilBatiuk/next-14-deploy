import { IExamples } from "@/functions/functions";
import "@/styles/ExampleList.scss";

export function ExampleList({ examples }: IExamples) {
  return (
    <div className="example__list">
      {examples?.map((example, index) => (
        <div className="example__item">
          <div key={example.id} className="example__source">
            {example.source}
          </div>
          <div key={example.id} className="example__target">
            {example.target}
          </div>
        </div>
      ))}
    </div>
  );
}
