function sumar(a, b) {
  return a + b;
}

const http = require('http');
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  const resultado = sumar(2, 3);
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(`Hola Arquitectos de Software! 2 + 3 = ${resultado}\n`);
});

if (require.main === module) {
  server.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
}

module.exports = { sumar };
