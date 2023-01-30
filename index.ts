import { readFile, readFileSync } from "fs";
import { dirname, resolve } from 'path';
import { randomPick } from './lib/random';

const path = resolve(__dirname, 'corpus/data.json')

const data = readFileSync(path, { encoding: 'utf-8' })
console.log(data)

const corpus = JSON.parse(data)
const title = randomPick(corpus.title)

const famous = randomPick(corpus.famous)



