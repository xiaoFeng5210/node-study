import http from 'node:http'
import url from 'node:url'

http.createServer((req, res) => {
  const {pathname, query} = url.parse(req.url)
  console.log(query, pathname)
  if (req.method === 'GET') {

  }
  if (req.method === 'POST') {

  }
}).listen(520, () => {
  console.log('server is running at http://localhost:520')
})
