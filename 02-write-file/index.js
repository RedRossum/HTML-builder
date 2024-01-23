const fs = require('fs');
const path = require('path');
const { stdout, stdin } = process;

const pathFile = path.join(__dirname, 'text.txt');
const output = fs.createWriteStream(pathFile);

stdout.write('Please, enter your text.\n');

stdin.on('data', data => {
  if (data.toString().trim() === 'exit') {
    process.exit();
  }
  output.write(data);
});

process.on('exit', () => stdout.write('Exited from the program.'));
process.on('SIGINT', () => process.exit());
