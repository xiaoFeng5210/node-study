import fs from 'fs'
import path from 'path'

const inputPath = path.resolve(__dirname, '../../assets/input.txt')
const outputPath = path.resolve(__dirname, '../../assets/output.txt')
let data = ''

function read() {
  const readerStream = fs.createReadStream(inputPath)
  readerStream.setEncoding('utf8')
  readerStream.on('data', function (chunk) {
    data += chunk
  })
  
  readerStream.on('end', function () {
    console.log('读取完成')
    write()
  })
  
  readerStream.on('error', function (err) {
  })
}

function write() {
  const writerStream = fs.createWriteStream(path.resolve(__dirname, '../../assets/output.txt'))
  writerStream.write(data, 'utf8')
  writerStream.end()

  writerStream.on('finish', function() {
    console.log('写入完成。')
  })

  writerStream.on('error', function(err) {
  })
}

export function pipeStream() {
  const readerStream = fs.createReadStream(inputPath)
  const writerStream = fs.createWriteStream(outputPath)

  readerStream.pipe(writerStream)
}

read()

