import test from 'ava';
import floatEqual from '.';

test('main', t => {
	t.true(floatEqual(0.1 + 0.2, 0.3));
	t.false(floatEqual(0.1 + 0.4, 0.3));
});
