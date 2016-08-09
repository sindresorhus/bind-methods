import test from 'ava';
import m from './';

test(t => {
	const unicorn = {
		name: 'Rainbow',
		message() {
			return `${this.name} is awesome!`;
		}
	};

	const message = unicorn.message;
	t.throws(() => message(), /Cannot read/);

	m(unicorn);

	const message2 = unicorn.message;
	t.is(message2(), 'Rainbow is awesome!');
});
