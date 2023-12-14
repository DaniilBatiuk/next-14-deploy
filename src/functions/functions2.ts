import { IOneTranslation, ITest, ITranslations, ITrue, handleGetAllTranslations } from "./functions";

export const handleGetTest = async (): Promise<ITest[]> => {
  try {
    const allTranslations = await handleGetAllTranslations();

    const res = JSON.parse(JSON.stringify(allTranslations)) as ITranslations[];

    const newArray: IOneTranslation[] = res.map(obj => ({
      word: obj.word,
      translation: obj.translations[0],
    }));

    const testArray: ITest[] = createTestArray(newArray);

    console.log("Created test");
    return shuffleArray(testArray);
  } catch (err) {
    console.log(err);
    return [];
  }
};

export const handleGetTestTwenty = async (): Promise<ITest[]> => {
  try {
    const allTranslations = await (await handleGetAllTranslations()).slice(0, 20);

    const res = JSON.parse(JSON.stringify(allTranslations)) as ITranslations[];

    const newArray: IOneTranslation[] = res.map(obj => ({
      word: obj.word,
      translation: obj.translations[0],
    }));

    const testArray: ITest[] = createTestArray(newArray);

    console.log("Created test 20");
    return shuffleArray(testArray);
  } catch (err) {
    console.log(err);
    return [];
  }
};

function createTestArray(originalArray: IOneTranslation[]): ITest[] {
  return originalArray.map(obj => {
    const correctTranslation: ITrue = {
      word: obj.translation,
      isTrue: true,
    };

    const otherTranslations = originalArray
      .filter(o => o.word !== obj.word)
      .map(o => ({
        word: o.translation,
        isTrue: false,
      }));

    const randomOptions = shuffleArray(otherTranslations).slice(0, 3);

    const allOptions = shuffleArray([correctTranslation, ...randomOptions]);

    return {
      word: obj.word,
      translations: allOptions,
    };
  });
}

function shuffleArray<T>(array: T[]): T[] {
  const shuffledArray = [...array];

  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }

  return shuffledArray;
}
