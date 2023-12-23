const process = require('process');
const { Z_ASCII } = require('zlib');
const commands = require('./commands/index.js');

function print(output) {
   process.stdout.write(output);
   process.stdout.write('\nprompt > ');
}

function bash() {}

bash();
module.exports = {
   print,
   bash,
};
