const SERVER_CERTIFICATE_FILE_PATH = "./tls/server-cert.pem"

const tls = require('tls');
const fs = require('fs');

const options = {
  ca: [ fs.readFileSync(SERVER_CERTIFICATE_FILE_PATH) ]
};

var socket = tls.connect(8000, 'localhost', options, () => {

  console.log('client connected',
              socket.authorized ? 'authorized' : 'unauthorized');

  process.stdin.pipe(socket);

  process.stdin.resume();

});

socket.setEncoding('utf8');

socket.on('data', (data) => {
  console.log(data);
});

socket.on('end', () => {
  console.log('Ended')
});