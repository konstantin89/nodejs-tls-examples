const SERVER_PRIVATE_KEY_FILE_PATH = "./tls/server-key.pem"
const SERVER_CERTIFICATE_FILE_PATH = "./tls/server-cert.pem"

const tls = require('tls');
const fs = require('fs');

const options = {
  key: fs.readFileSync(SERVER_PRIVATE_KEY_FILE_PATH),
  cert: fs.readFileSync(SERVER_CERTIFICATE_FILE_PATH),

  rejectUnauthorized: true,
};

const server = tls.createServer(options, (socket) => {
  console.log('server connected',
              socket.authorized ? 'authorized' : 'unauthorized');
  socket.write('welcome!\n');
  socket.setEncoding('utf8');
  socket.pipe(socket);
});

server.listen(8000, () => {
  console.log('server bound');
});