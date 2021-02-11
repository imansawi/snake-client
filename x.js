const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: '10.0.2.15',
    port: 50541
  });

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data' , (data) => {
      handleUserInput(data);
  });
  
// Incoming Data Interpreted as Text
conn.setEncoding('utf8'); 

return conn;

}

console.log('Connecting ...');

const handleUserInput = function(data) {
// \u0003 maps to ctrl+c input
  if (data === '\u0003') {
    process.exit();
  }
  return stdin;
};

connect();
