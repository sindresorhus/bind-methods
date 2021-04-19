import test from 'ava';
import bindMethods from './index.js';

test('main', t => {
	const unicorn = {
		name: 'Rainbow',
		message() {
			return `${this.name} is awesome!`;
		}
	};

	const {message} = unicorn;
	t.throws(() => {
		message();
	}, {
		message: /Cannot read/
	});

	const bounded = bindMethods(unicorn);
	t.is(bounded, unicorn);

	const message2 = unicorn.message;
	t.is(message2(), 'Rainbow is awesome!');
});
