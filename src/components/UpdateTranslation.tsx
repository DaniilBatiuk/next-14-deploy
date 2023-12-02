"use client";

import "@/styles/UpdateTranslation.scss";
import Modal from "./Modal";
import { ITranslations, handleUpdateById } from "@/functions/functions";

export interface IUpdateTranslation {
  active: boolean;
  setActive: (isActive: boolean) => void;
  translation: ITranslations;
}

export function UpdateTranslation({ active, setActive, translation }: IUpdateTranslation) {
  function onSubmit(formData: FormData) {
    const word = formData.get("word") as string | null;

    const translationString = formData.get("translation") as string | null;
    const translations = translationString ? translationString.split(",") : [];

    if (translations && word) {
      handleUpdateById(translation._id, word, translations);
      setActive(false);
    }
  }

  return (
    <form action={onSubmit} noValidate>
      <Modal active={active}>
        <div className="modal__content">
          <div className="modal__header">
            <h2 className="modal__title title">Edit</h2>
            <svg onClick={() => setActive(false)} xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-x modal__svg" viewBox="0 0 16 16" id="IconChangeColor">
              <path
                d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                id="mainIconPathAttribute"
                fill="#000000"
              ></path>
            </svg>
          </div>
          <label htmlFor="word" className="modal__label">
            Word
          </label>
          <input type="text" required defaultValue={translation.word} id="word" name="word" className="modal__input"></input>
          <label htmlFor="translations" className="modal__label">
            Translations
          </label>
          <div className="modal__list" id="translations">
            {translation.translations.length > 0 && <input className="modal__input" id="translation" name="translation" defaultValue={translation.translations.join(", ")} />}
          </div>
          <button type="submit" className="modal__button">
            Save
          </button>
        </div>
      </Modal>
    </form>
  );
}
