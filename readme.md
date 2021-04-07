# float-equal

> Check if two floats are almost equal

Due to [rounding errors](https://stackoverflow.com/questions/588004/is-floating-point-math-broken) you shouldn't compare floats directly. Instead this module takes an [upperbound](https://en.wikipedia.org/wiki/Machine_epsilon) for rounding errors into consideration.

## Install

```
$ npm install float-equal
```

## Usage

```js
import floatEqual from 'float-equal';

console.log(0.1 + 0.2 === 0.3);
//=> false

console.log(floatEqual(0.1 + 0.2, 0.3));
//=> true
```
