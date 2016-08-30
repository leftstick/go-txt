var fs = require('fs');
var isBinaryFile = require('isbinaryfile');
//test

var copyFile = function(src, dest, process) {
    if (!src) {
        throw new Error('src must be set as a file path');
    }
    if (!dest) {
        throw new Error('dest must be set as a file path');
    }

    if (isBinaryFile.sync(src)) {
        //binaryfile will be copied directly
        fs.writeFileSync(dest, fs.readFileSync(src));
        return;
    }
    var ejs = fs.readFileSync(src, 'utf8');
    var after = ejs;
    if (process && process.call) {
        after = process(ejs);
    }
    fs.writeFileSync(dest, after, 'utf8');
};
console.log('test');
module.exports = copyFile;