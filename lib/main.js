/**
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var isIteratorLike = require( '@stdlib/assert-is-iterator-like' );
var hasOwnProp = require( '@stdlib/assert-has-own-property' );
var incrmin = require( '@stdlib/stats-incr-min' );


// MAIN //

/**
* Computes the minimum value of all iterated values.
*
* @param {Iterator} iterator - input iterator
* @throws {TypeError} must provide an iterator
* @returns {(number|null)} minimum value
*
* @example
* var runif = require( '@stdlib/random-iter-uniform' );
*
* var rand = runif( -10.0, 10.0, {
*     'iter': 100
* });
*
* var m = itermin( rand );
* // returns <number>
*/
function itermin( iterator ) {
	var acc;
	var v;
	if ( !isIteratorLike( iterator ) ) {
		throw new TypeError( 'invalid argument. Must provide an iterator. Value: `'+iterator+'`.' );
	}
	acc = incrmin();
	while ( true ) {
		v = iterator.next();
		if ( typeof v.value === 'number' ) {
			acc( v.value );
		} else if ( hasOwnProp( v, 'value' ) ) {
			acc( NaN );
		}
		if ( v.done ) {
			break;
		}
	}
	return acc();
}


// EXPORTS //

module.exports = itermin;