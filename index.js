var fs = require('fs');
var path = require('path');
var isBinaryFile = require('isbinaryfile');
var mkdirp = require('mkdirp');

var createParent = function(out) {
    var dir = path.dirname(out);
    try {
        fs.statSync(dir);
    } catch (e) {
        mkdirp.sync(dir);
    }
};

var copyFile = function(src, dest, process) {
    if (!src) {
        throw new Error('src must be set as a file path');
    }
    
    if (!fs.existsSync(src)) {
        throw new Error('source file is not existed.');
    }

    if (!dest) {
        throw new Error('dest must be set as a file path');
    }

    createParent(dest);

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

module.exports = copyFile;