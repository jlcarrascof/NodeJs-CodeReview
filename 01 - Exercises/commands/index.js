const fs = require("fs");
const utils = require("../utils/request");
const process = require("process");

function pwd(print) {
    print(process.cwd());
}

function date(print) {
    print(Date());
}

function echo(print, args) {
    print(args);
}

function ls(print) {
    fs.readdir('.', (err, files) => {
        if (err) throw new Error(err);
        print(files.join(' '));
    });
}

function cat(print, args) {
    fs.readFile(args, 'utf8', (error, data) => {
        if (error) throw Error(error);
        print(data);
    });
}

function head() {}

function tail() {}

function curl() {}

module.exports = {
    pwd,
    date,
    echo,
    ls,
    cat,
};
