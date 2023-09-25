import fs from 'fs'
import path from 'path'

const inputPath = path.resolve(__dirname, '../../assets/input.txt')
const outputPath = path.resolve(__dirname, '../../assets/output.txt')

const readerStream = fs.createReadStream(inputPath)
let data = ''

readerStream.setEncoding('utf8')

readerStream.on('data', function (chunk) {
  data += chunk
  console.log(chunk)
})

readerStream.on('end', function () {
})

readerStream.on('error', function (err) {
  console.log(err.stack)
})

function write() {
  const writerStream = fs.createWriteStream(path.resolve(__dirname, '../../assets/output.txt'))
  writerStream.write(data, 'utf8')
  writerStream.end()

  writerStream.on('finish', function() {
    console.log('写入完成')
  })

  writerStream.on('error', function(err) {
    console.log(err.stack)
  })
}

export function pipeStream() {
  const readerStream = fs.createReadStream(inputPath)
  const writerStream = fs.createWriteStream(outputPath)

  readerStream.pipe(writerStream)
}

