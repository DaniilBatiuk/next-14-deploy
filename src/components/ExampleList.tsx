import { IExamples } from "@/functions/functions";

export function ExampleList({ examples }: IExamples) {
  return (
    <ul>
      {examples?.map((example, index) => (
        <li key={example.id}>
          {example.source} : {example.target}
        </li>
      ))}
    </ul>
  );
}
