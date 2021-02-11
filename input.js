/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
const setupInput = function() {
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
};

module.exports = { setupInput };