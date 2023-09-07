import { resolve } from "path";
import { readFile } from 'node:fs/promises';
import { readdir } from 'node:fs/promises';

interface FilesList {
  [key: string]: string
}


export async function egReadFile() {
  const path = resolve(__dirname, '../../../corpus/data.json')
  const contents = await readFile(path, { encoding: 'utf-8' }).catch(err => err)
  if (contents) {
    console.log(contents)
  }
}

// 读取corpus里所有文件，并处理成文件名 -> 文件内容的形式的对象数据
export async function egReadAllFiles() {
  const path = resolve(__dirname, '../../../corpus')
  const files = await readdir(path, { encoding: 'utf-8' }).catch(err => err)
  const result: FilesList = {}
  for (const file of files) {
    console.log(file)
    if (file) {
      const fileContent = await readFile(resolve(path, file), { encoding: 'utf-8' }).catch(err => err)
      if (fileContent) {
        result[file] = fileContent
      }
    }
  }
}

