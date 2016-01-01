import test from 'ava';
import m from './';

test(t => {
	t.true(m(0.1 + 0.2, 0.3));
	t.false(m(0.1 + 0.4, 0.3));
});
