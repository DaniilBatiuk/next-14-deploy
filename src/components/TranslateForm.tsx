import { languagesList } from "@/constants/languages";
import "@/styles/TranslateForm.scss";
interface TranslationFormProps {
  formAction: any;
}

export function TranslationForm({ formAction }: TranslationFormProps) {
  const languages = languagesList;
  return (
    <form action={formAction} className="form">
      <div className="form__languages">
        <select name="languageFrom" id="languageFrom" defaultValue="English" className="form__select">
          {languages &&
            languages.map(language => (
              <option key={language} value={language}>
                {language}
              </option>
            ))}
        </select>

        <select name="languageTo" id="languageTo" defaultValue="Russian" className="form__select">
          {languages &&
            languages.map(language => (
              <option key={language} value={language}>
                {language}
              </option>
            ))}
        </select>
      </div>
      <div className="form__search">
        <div className="form__icon__input">
          <input type="text" name="word" className="form__input" />
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" className="form__icon">
            <path
              fill="currentColor"
              d="m19.65 9.04l-4.84-.42l-1.89-4.45c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.73l3.67-3.18c.67-.58.32-1.68-.56-1.75zM12 15.4l-3.76 2.27l1-4.28l-3.32-2.88l4.38-.38L12 6.1l1.71 4.04l4.38.38l-3.32 2.88l1 4.28z"
            />
          </svg>
        </div>
        <button type="submit" className="form__button">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5A6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14z"
            />
          </svg>
        </button>
      </div>
    </form>
  );
}
