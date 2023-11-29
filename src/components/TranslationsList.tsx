import "@/styles/TranslationsList.scss";

interface TranslationsListProps {
  translations: string[];
}

export function TranslationsList({ translations }: TranslationsListProps) {
  return (
    <ul className="translation__list">
      {translations?.map((translation, index) => (
        <li key={index} className="translation__item">
          {translation}
        </li>
      ))}
    </ul>
  );
}
