# server-root
> gets a full path relative to the application root

![VERSION](https://img.shields.io/npm/v/server-root.svg)
![DOWNLOADS](https://img.shields.io/npm/dt/server-root.svg)
[![ISSUES](https://img.shields.io/github/issues-raw/akonoupakis/server-root.svg)](https://github.com/akonoupakis/server-root/issues)
![LICENCE](https://img.shields.io/npm/l/server-root.svg)

[![NPM](https://nodei.co/npm/server-root.png?downloads=true)](https://nodei.co/npm/server-root/)

## overview

	A installed module that will return a relative path compared to the application root.

## Usage

```js
var root = require('server-root');

// returns the full path of the given relative path
root.getPath('folder/file.txt');

```

## license

	The MIT License (MIT)

	Copyright (c) 2014 akon

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in
	all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	THE SOFTWARE.