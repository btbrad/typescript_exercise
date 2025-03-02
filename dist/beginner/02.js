"use strict";
function sum(x, y) {
    if (typeof x === 'number' && typeof y === 'number') {
        return x + y;
    }
    else if (Array.isArray(x) && typeof y === 'number') {
        return x.map((item) => item + y);
    }
    else if (typeof x === 'number' && Array.isArray(y)) {
        return y.map((item) => item + x);
    }
    else if (Array.isArray(x) && Array.isArray(y)) {
        if (x.length !== y.length) {
            throw new Error('Array must have the same length');
        }
        else {
            return x.map((item, index) => item + y[index]);
        }
    }
    else {
        throw new Error('invalid arguments');
    }
}
sum(1, 2);
sum([1, 2, 3], 4);
