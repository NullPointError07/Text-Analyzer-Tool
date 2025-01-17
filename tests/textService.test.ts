import {
  countWords,
  countCharacters,
  countSentences,
  countParagraphs,
  findLongestWord,
} from "../src/services/textServices";

describe("Text Analysis Service", () => {
  const text = "The quick brown fox jumps over the lazy dog. The lazy dog slept in the sun.";

  it("should count words correctly", () => {
    expect(countWords(text)).toBe(16);
  });

  it("should count characters correctly", () => {
    expect(countCharacters(text)).toBe(75);
  });

  it("should count sentences correctly", () => {
    expect(countSentences(text)).toBe(2);
  });

  it("should count paragraphs correctly", () => {
    const multiParagraphText = "The quick brown fox.\n\nThe lazy dog slept.";
    expect(countParagraphs(multiParagraphText)).toBe(2);
  });

  it("should find the longest word correctly", () => {
    expect(findLongestWord(text)).toBe("quick");
  });
});
