import { readFileSync } from "fs";
import { resolve } from 'path';
import { createRandomPicker } from './lib/random';

const path = resolve(__dirname, 'corpus/data.json')

const data = readFileSync(path, { encoding: 'utf-8' })

const corpus = JSON.parse(data)
const pickFamous = createRandomPicker(corpus.famous);
const pickBosh = createRandomPicker(corpus.bosh);

pickFamous(); // 随机取出一条名人名言

pickBosh(); // 随机取出一条废话








