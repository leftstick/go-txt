go-txt
=====================
[![NPM version][npm-image]][npm-url]
![][david-url]
![][travis-url]

Quickly copy file from one place to another. You can customize the copying process, for example: replace words


## Installation

```bash
npm install go-txt --save
```

## Usage

```javascript
var go = require('go-txt');

go('/tmp/file1.txt', '/tmp2/file2.txt');//this is just copy


//you can customize the copying process
go('/tmp/file1.txt', '/tmp2/file2.txt', function(content){
    return content.replace('ABC', 'PLA');
});

//binary file will be copied directly no matter whether you provide a process function
go('/tmp/logo.png', '/tmp2/logo2.png');
```

## LICENSE ##

[MIT License](https://raw.githubusercontent.com/leftstick/go-txt/master/LICENSE)




[npm-url]: https://npmjs.org/package/go-txt
[npm-image]: https://badge.fury.io/js/go-txt.png
[david-url]: https://david-dm.org/leftstick/go-txt.png
[travis-url]:https://api.travis-ci.org/leftstick/go-txt.svg?branch=master
