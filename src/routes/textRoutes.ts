import { Router } from "express";
import {
  getWordCount,
  getCharacterCount,
  getSentenceCount,
  getParagraphCount,
  getLongestWord,
  analyzeText,
} from "../controllers/textControllers";

const router = Router();

router.post("/words", getWordCount);
router.post("/characters", getCharacterCount);
router.post("/sentences", getSentenceCount);
router.post("/paragraphs", getParagraphCount);
router.post("/longest-word", getLongestWord);
router.post("/analyze", analyzeText);

export default router;
