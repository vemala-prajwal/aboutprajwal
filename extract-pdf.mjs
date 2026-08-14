import fs from 'node:fs';
import { PDFParse } from 'pdf-parse';

const buffer = fs.readFileSync('c:/Users/waste/OneDrive/Desktop/prompt pdf 1.pdf');
const parser = new PDFParse({ data: buffer });
const result = await parser.getText();
console.log(result.text);
