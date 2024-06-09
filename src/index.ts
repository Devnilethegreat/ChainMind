// index.ts
import * as dotenv from 'dotenv';
dotenv.config();

interface ProcessData {
  value: number;
  velocity: number;
  count: number;
}

interface ProcessResult {
  score: number;
  flagged: boolean;
  threshold: number;
}

export class ChainMindCore {
  private threshold: number;

  constructor(threshold: number = 0.75) {
    this.threshold = threshold;
  }
