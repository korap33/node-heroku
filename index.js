const http = require('http');  
(async () => {
  const requestHandler = (request, response) => {  
    console.log(request.url)
    response.end('Running')
  }
  const server = http.createServer(requestHandler)

  server.listen(process.env.PORT, (err) => {  
    if (err) {
      return console.log('something bad happened', err)
    }
    console.log(`server is listening`)
  })
})();
