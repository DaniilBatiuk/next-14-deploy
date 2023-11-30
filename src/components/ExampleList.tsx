import { IExamples } from "@/functions/functions";
import "@/styles/ExampleList.scss";

export function ExampleList({ examples }: IExamples) {
  return (
    <div className={examples.length > 0 ? "example__list" : ""}>
      {examples?.map((example, index) => (
        <div className="example__item" key={"example_" + example.source + example.target}>
          <div key={"from_" + example.id + example.source} className="example__source">
            {example.source}
          </div>
          <div key={"to_" + example.id + example.target} className="example__target">
            {example.target}
          </div>
        </div>
      ))}
    </div>
  );
}
