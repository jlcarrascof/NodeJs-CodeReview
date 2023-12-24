const process = require('process');
const { Z_ASCII } = require('zlib');
const commands = require('./commands/index.js');

function print(output) {
   process.stdout.write(output);
   process.stdout.write('\nprompt > ');
}

function bash() {
   process.stdout.write('prompt > ');
   process.stdin.on('data', (data) => {
      // console.log(data.toString().trim());
      let args = data.toString().trim().split(' ');
      // console.log(args);
      let cmd = args.shift();
      // console.log(cmd);

      if (!commands[cmd]) print(`Command not found:  ${cmd}`)
      else return commands[cmd](print, args.join(' '));
    

   });
}

bash();
module.exports = {
   print,
   bash,
};
