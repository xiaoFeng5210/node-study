import { readFile } from "fs";
import { dirname, resolve } from 'path';

const path = resolve(__dirname, 'corpus/data.json')

readFile(path, { encoding: 'utf-8' }, (err, data) => {
  if (!err) {
    console.log(data)
  } else {
    console.log(err)
  }
})


