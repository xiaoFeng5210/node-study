import fs from 'fs'
import path from 'path'

const inputPath = path.resolve(__dirname, '../../assets/input.txt')

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

