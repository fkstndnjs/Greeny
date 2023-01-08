export const maskWord = (word: string) => {
  const start = Math.floor(word.length / 2);
  const end = word.length;
  const asterisks = '*'.repeat(word.length / 2);
  return word.replace(word.substring(start, end), asterisks);
};
