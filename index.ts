import { readFileSync } from "fs";
import { resolve } from 'path';
import { createRandomPicker, randomInt } from './lib/random';

type SentenceKey = 'famous' | 'bosh_before' | 'bosh' | 'said' | 'conclude';
type Pick = () => string;
type Replacer = {
  [key in SentenceKey]?: Pick | string
}

const path = resolve(__dirname, 'corpus/data.json')

const data = readFileSync(path, { encoding: 'utf-8' })

const corpus = JSON.parse(data)

function sentence(pick: Function, replacer: Replacer) {
  let ret = pick()
  for (const key in replacer) {
    ret = ret.replace(new RegExp(`{{${key}}}`, 'g'),
      typeof replacer[key as keyof Replacer] === 'function' ? (replacer[key as SentenceKey] as Pick)() : replacer[key as SentenceKey])
  }
  return ret
}

const { famous, bosh_before, bosh, said, conclude } = corpus;
const [pickFamous, pickBoshBefore, pickBosh, pickSaid, pickConclude] = [famous, bosh_before, bosh, said, conclude].map((item) => {
  return createRandomPicker(item);
});

sentence(pickFamous, { said: pickSaid, conclude: pickConclude }); // 生成一条名人名言











