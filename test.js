import test from 'ava';
import floatEqual from './index.js';

test('main', t => {
	t.true(floatEqual(0.1 + 0.2, 0.3));
	t.true(floatEqual(2.3 + 2.4, 4.7));
	t.true(floatEqual(0.5 + 0.5, 1));
	t.false(floatEqual(0.1 + 0.4, 0.3));
});
