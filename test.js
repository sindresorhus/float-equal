'use strict';
var test = require('ava');
var floatEqual = require('./');

test(function (t) {
	t.assert(floatEqual(0.1 + 0.2, 0.3));
	t.assert(!floatEqual(0.1 + 0.4, 0.3));
	t.end();
});
