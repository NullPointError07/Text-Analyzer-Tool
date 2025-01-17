import { Request, Response } from "express";
import {
  countWords,
  countCharacters,
  countSentences,
  countParagraphs,
  findLongestWord,
} from "../services/textServices";

export const getWordCount = (req: Request, res: Response) => {
  const { text } = req.body;
  if (!text) return res.status(400).json({ error: "Text is required" });

  const wordCount = countWords(text);
  res.status(200).json({ wordCount });
};

export const getCharacterCount = (req: Request, res: Response) => {
  const { text } = req.body;
  if (!text) return res.status(400).json({ error: "Text is required" });

  const characterCount = countCharacters(text);
  res.status(200).json({ characterCount });
};

export const getSentenceCount = (req: Request, res: Response) => {
  const { text } = req.body;
  if (!text) return res.status(400).json({ error: "Text is required" });

  const sentenceCount = countSentences(text);
  res.status(200).json({ sentenceCount });
};

export const getParagraphCount = (req: Request, res: Response) => {
  const { text } = req.body;
  if (!text) return res.status(400).json({ error: "Text is required" });

  const paragraphCount = countParagraphs(text);
  res.status(200).json({ paragraphCount });
};

export const getLongestWord = (req: Request, res: Response) => {
  const { text } = req.body;
  if (!text) return res.status(400).json({ error: "Text is required" });

  const longestWord = findLongestWord(text);
  res.status(200).json({ longestWord });
};
