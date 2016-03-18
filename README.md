# server-root
> maps a relative path to its server full path location

![VERSION](https://img.shields.io/npm/v/server-root.svg)
![DOWNLOADS](https://img.shields.io/npm/dt/server-root.svg)
[![ISSUES](https://img.shields.io/github/issues-raw/akonoupakis/server-root.svg)](https://github.com/akonoupakis/server-root/issues)
![LICENCE](https://img.shields.io/npm/l/server-root.svg)

[![BUILD](https://api.travis-ci.org/akonoupakis/server-root.svg?branch=master)](http://travis-ci.org/akonoupakis/server-root)
![STANDARDJS](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)

[![NPM](https://nodei.co/npm/server-root.png?downloads=true)](https://nodei.co/npm/server-root/)

## overview

A module that maps a relative path to its server full path location.

## usage

```js
var server = require('server-root');

var path = server.mapPath('./folder/file.txt');
```

## copyright and license

Code and documentation copyright 2014 akon. Code released under [the MIT license](https://cdn.rawgit.com/akonoupakis/server-root/master/LICENSE).