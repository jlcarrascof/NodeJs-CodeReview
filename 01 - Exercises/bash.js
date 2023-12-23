const process = require('process');
const { Z_ASCII } = require('zlib');
const commands = require('./commands/index.js');

function bash() {}

function print(output) {
   process.stdout.write(output);
}

bash();
module.exports = {
   print,
   bash,
};
