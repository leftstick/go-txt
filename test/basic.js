var go = require('../');
var should = require('should');
var path = require('path');
var fs = require('fs');
var rimraf = require('rimraf');

describe('basic test', function() {

    var src = path.resolve(__dirname, 'tmp', 'hello.txt');
    var src2 = path.resolve(__dirname, 'tmp', 'logo.png');
    var dest = path.resolve(__dirname, 'tmp', 'ttt', '_hello.txt');
    var dest2 = path.resolve(__dirname, 'tmp', 'ttt', '_logo.png');
    var destFolder = path.resolve(__dirname, 'tmp', 'ttt');

    it('simple copy', function(done) {
        go(src, dest);
        should(fs.readFileSync(dest, {encoding: 'utf8'})).eql('hello\n', 'simple copying with incorrect content');
        done();
    });

    it('with customize process', function(done) {
        go(src, dest, function(content) {
            return content.replace('hello', 'ABC');
        });
        should(fs.readFileSync(dest, {encoding: 'utf8'})).eql('ABC\n', 'customize process with incorrect content');
        done();
    });

    it('copy binaryfile', function(done) {
        go(src2, dest2);
        should(fs.statSync(dest2).isFile()).eql(true, 'binaryfile doesn\'t copied');
        done();
    });

    it('exception withour src', function(done) {
        try {
            go();
        } catch (e) {
            console.log(e.message)
            should(e.message).eql('src must be set as a file path', 'src doesn\'t set');
            done();
        }
    });

    it('exception withour dest', function(done) {
        try {
            go(src);
        } catch (e) {
            console.log(e.message)
            should(e.message).eql('dest must be set as a file path', 'dest doesn\'t set');
            done();
        }
    });

    afterEach(function() {
        try {
            rimraf.sync(destFolder);
        } catch (e) {}
    });

});
