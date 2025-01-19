import mongoose, { Schema, Document } from "mongoose";

export interface IText extends Document {
  userId: mongoose.Types.ObjectId;
  text: string;
  analysis: {
    wordCount: number;
    characterCount: number;
    sentenceCount: number;
    paragraphCount: number;
    longestWord: string;
  };
  createdAt: Date;
}

const textSchema = new Schema<IText>(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    text: { type: String, required: true },
    analysis: {
      wordCount: { type: Number, required: true },
      characterCount: { type: Number, required: true },
      sentenceCount: { type: Number, required: true },
      paragraphCount: { type: Number, required: true },
      longestWord: { type: String, required: true },
    },
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

const Text = mongoose.model<IText>("Text", textSchema);

export default Text;
