function sumar(a, b) {
  return a * b;
}

const http = require('http');
const server = http.createServer((req, res) => {
  const resultado = sumar(2, 3);
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(`Hola Mundo desde CI/CD! 2 + 3 = ${resultado}\n`);
});

if (require.main === module) {
  server.listen(3000, () => console.log('Servidor corriendo en puerto 3000'));
}

module.exports = { sumar };
