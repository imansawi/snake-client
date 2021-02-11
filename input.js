const { MOVE_UP_KEY,
  MOVE_DOWN_KEY,
  MOVE_LEFT_KEY,
  MOVE_RIGHT_KEY
} = require('./constants');
/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
let connection;

const setupInput = function(conn) {
  connection = conn;

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data' , (data) => {
    handleUserInput(data);
  });
  return stdin;
}

const handleUserInput = function(data) {
// \u0003 maps to ctrl+c input
  if (data === '\u0003') {
    process.exit();
  }

  if (data === MOVE_UP_KEY) {
    connection.write("Move: up");
  }
  if (data === MOVE_DOWN_KEY) {
    connection.write("Move: down");
  }
  if (data === MOVE_LEFT_KEY) {
    connection.write("Move: left");
  }
  if (data === MOVE_RIGHT_KEY) {
    connection.write("Move: right");
  }

  if (data === '1') {
    connection.write("Say: I am a WINNER!");
  }
  if (data === '2') {
    connection.write("Say: L O S E R!");
  }
  if (data === '3') {
    connection.write("Say: Good Game!");
  }
  
};

module.exports = { setupInput };