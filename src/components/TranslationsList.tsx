interface TranslationsListProps {
  translations: string[];
}

export function TranslationsList({ translations }: TranslationsListProps) {
  return (
    <ul>
      {translations?.map((translation, index) => (
        <li key={index}>{translation}</li>
      ))}
    </ul>
  );
}
