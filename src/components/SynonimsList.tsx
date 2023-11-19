import { ISynonyms } from "@/functions/functions";

export function SynonymsList({ synonyms }: ISynonyms) {
  return (
    <ul>
      {synonyms?.map((synonym, index) => (
        <li key={synonym.id}>{synonym.synonym}</li>
      ))}
    </ul>
  );
}
