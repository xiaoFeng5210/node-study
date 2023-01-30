import { readFileSync } from "fs";
import { resolve } from 'path';
import { createRandomPick } from './lib/random';

const path = resolve(__dirname, 'corpus/data.json')

const data = readFileSync(path, { encoding: 'utf-8' })

const corpus = JSON.parse(data)
const randomPickTitle = createRandomPick(corpus.title)
const randomPickFamous = createRandomPick(corpus.famous)
// const title = randomPickTitle()
// const famous = randomPickFamous()
for (let i = 0; i < 10; i++) {
  console.log(randomPickFamous())
}



