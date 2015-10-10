var copyFile = function(src, dest, process) {
    var ejs = fs.readFileSync(src, 'utf8');
    var after = ejs;
    if (process) {
        after = process(ejs);
    }
    fs.writeFileSync(dest, after, 'utf8');
};

module.exports = copyFile;
