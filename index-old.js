
import http from 'node:http';

// Create a local server to receive data from
const server = http.createServer((request, response) => {

  

  response.write('Hola mundo');
  response.end();

});
server.listen(8080);

console.log('Escuchando el puerto ', 8080);
