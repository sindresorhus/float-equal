'use strict';
var EPSILON = require('number-epsilon');

module.exports = function (a, b) {
	return Math.abs(a - b) < EPSILON;
};
