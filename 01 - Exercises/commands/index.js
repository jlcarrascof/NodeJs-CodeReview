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
        if (error) throw new Error(error);
        print(data);
    });
}

function head(print, args) {
    fs.readFile(args, 'utf8', (error, data) => {
        if (error) throw Error(error);
        const headSlice = data.split('\n').slice(0, 8);
        print(headSlice.join('\n'));
    }); 
}

function tail(print, args) {
    fs.readFile(args, 'utf8', (error, data) => {
        if (error) throw Error(error);
        print(data.split('\n').at(-1).trim());
    });
}

function curl() {}

module.exports = {
    pwd,
    date,
    echo,
    ls,
    cat,
    head,
    tail,
};
