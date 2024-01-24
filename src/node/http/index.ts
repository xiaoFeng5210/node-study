import http from 'node:http'
import url from 'node:url'

http.createServer((req, res) => {}).listen(520, () => {
  console.log('server is running at http://localhost:520')
})
