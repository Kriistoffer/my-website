export const validateString = (value: unknown, maxLength: number) => {
  if (!value || typeof value !== 'string' || value.length > maxLength) {
    return false;
  }
  return true;
};

export const getErrorMessage = (error: unknown): string => {
  let message: string;

  if (error instanceof Error) {
    message = error.message;
  } else if (error && typeof error === 'object' && 'message' in error) {
    message = String(error.message);
  } else if (typeof error === 'string') {
    message = error;
  } else {
    message = 'Something went wrong';
  }
  return message;
};

export const returnCurrentAge = (): number => {
  let dateOfBirth = new Date(1993, 2, 15);
  let today = new Date();
  let age = today.getFullYear() - dateOfBirth.getFullYear();
  let m = today.getMonth() - dateOfBirth.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < dateOfBirth.getDate())) {
    age--;
  }
  return age;
};

//A shuffle function that's based on the Fisher-Yates/Knuth shuffle.
export const shuffleArray = (arrayOfValues: string[]): string[] => {
  let currentIndex = arrayOfValues.length,
    randomIndex;

  while (currentIndex > 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [arrayOfValues[currentIndex], arrayOfValues[randomIndex]] = [arrayOfValues[randomIndex], arrayOfValues[currentIndex]];
  }
  return arrayOfValues;
};

//A shuffle function that's based on the Durstenfeld shuffle, an optimized version of the Fisher-Yates shuffle.
export const shuffleArray2 = (arrayOfValues: string[]): string[] => {
  for (let i = arrayOfValues.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arrayOfValues[i], arrayOfValues[j]] = [arrayOfValues[j], arrayOfValues[i]];
  }
  return arrayOfValues;
};
