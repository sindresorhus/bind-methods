# bind-methods

> Bind all methods in an object to itself or a specified context

## Install

```
$ npm install bind-methods
```

## Usage

```js
import bindMethods from 'bind-methods';

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

### bindMethods(input, context?)

Bind methods in `input` to itself or `context` if specified.

Returns the `input` object.

#### input

Type: `object`

Object with methods to bind.

#### context

Type: `object`\
Default: The `input` object

Object to bind the methods to.

## Related

- [auto-bind](https://github.com/sindresorhus/auto-bind) - Automatically bind methods to their class instance
