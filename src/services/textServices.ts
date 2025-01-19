export const countWords = (text: string): number => {
  return text.trim().split(/\s+/).length;
};

export const countCharacters = (text: string): number => {
  return text.length;
};

export const countSentences = (text: string): number => {
  return (
    (text.match(/[.!?](?=\s|$)/g) || []).length +
    (text.trim().endsWith(".") || text.trim().endsWith("?") || text.trim().endsWith("!") || text.trim() === ""
      ? 0
      : 1)
  );
};

export const countParagraphs = (text: string): number => {
  return (text.match(/[^\n]+/g) || []).length;
};

export const findLongestWord = (text: string): string => {
  return text.split(/\s+/).reduce((longest, word) => (word.length > longest.length ? word : longest), "");
};
