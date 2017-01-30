# bind-methods [![Build Status](https://travis-ci.org/sindresorhus/bind-methods.svg?branch=master)](https://travis-ci.org/sindresorhus/bind-methods)

> Bind all methods in an object to itself or a specified context


## Install

```
$ npm install --save bind-methods
```


## Usage

```js
const bindMethods = require('bind-methods');

const unicorn = {
	name: 'Rainbow',
	message() {
		return `${this.name} is awesome!`;
	}
};

const message = unicorn.message;
message();
//=> Error: Cannot read property 'name' of undefined

bindMethods(unicorn);

const message2 = unicorn.message;
message2();
//=> 'Rainbow is awesome!'
```


## API

### bindMethods(object, [context])

Bind methods in `object` to itself or `context` if specified and returns the `object` object.

#### object

Type: `Object`

Object with methods to bind.

#### context

Type: `Object`<br>
Default: The `input` object

Object to bind the methods to.


## Related

- [auto-bind](https://github.com/sindresorhus/auto-bind) - Automatically bind methods to their class instance


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
