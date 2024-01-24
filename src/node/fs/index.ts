import { resolve } from "path";
import { readFile } from 'node:fs/promises';
import { readdir, mkdir, writeFile } from 'node:fs/promises';

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


/** 增加文件夹 */
async function handlerMkdir() {
  const res = mkdir(resolve(__dirname, '../../../corpus/test/test01'), { recursive: true })
  console.log(res)
}

/** 写入内容 */
async function handlerWriteFile() {
  const res = await writeFile(resolve(__dirname, '../../../corpus/test.txt'), 'hello world', { encoding: 'utf-8', flag: 'a'})
  console.log(res)
}

/** 读取内容 */
async function handlerReadFile() {
  const res = await readFile(resolve(__dirname, '../../../corpus/test.txt'), { encoding: 'utf-8' })
  console.log(res.toString())
}
