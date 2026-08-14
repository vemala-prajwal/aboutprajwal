import fs from 'node:fs';
import path from 'node:path';
import { PDFParse } from 'pdf-parse';

const outDir = 'c:/Users/waste/OneDrive/Desktop/portfolio/pdf-pages';
fs.mkdirSync(outDir, { recursive: true });

const buffer = fs.readFileSync('c:/Users/waste/OneDrive/Desktop/prompt pdf 1.pdf');
const parser = new PDFParse({ data: buffer });
const result = await parser.getScreenshot({ scale: 2 });

for (let i = 0; i < result.pages.length; i++) {
  const page = result.pages[i];
  const file = path.join(outDir, `page-${i + 1}.png`);
  fs.writeFileSync(file, page.data);
  console.log('Wrote', file);
}
