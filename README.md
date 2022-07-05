<!--

@license Apache-2.0

Copyright (c) 2019 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# itermin

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Compute the minimum value of all [iterated][mdn-iterator-protocol] values.

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

```javascript
import itermin from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-iter-min@deno/mod.js';
```

#### itermin( iterator )

Computes the minimum value of all [iterated][mdn-iterator-protocol] values.

```javascript
import array2iterator from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-to-iterator@deno/mod.js';

var arr = array2iterator( [ 1.0, -2.0, -3.0, 4.0 ] );

var m = itermin( arr );
// returns -3.0
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   If an iterated value is non-numeric (including `NaN`), the returned [`iterator`][mdn-iterator-protocol] returns `NaN`. If non-numeric iterated values are possible, you are advised to provide an [`iterator`][mdn-iterator-protocol] which type checks and handles non-numeric values accordingly.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import runif from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-iter-uniform@deno/mod.js';
import itermin from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-iter-min@deno/mod.js';

// Create an iterator for generating uniformly distributed pseudorandom numbers:
var rand = runif( -10.0, 10.0, {
    'seed': 1234,
    'iter': 100
});

// Compute the minimum value:
var m = itermin( rand );
// returns <number>

console.log( 'Min: %d.', m );
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/stats/iter/max`][@stdlib/stats/iter/max]</span><span class="delimiter">: </span><span class="description">compute the maximum value of all iterated values.</span>
-   <span class="package-name">[`@stdlib/stats/iter/midrange`][@stdlib/stats/iter/midrange]</span><span class="delimiter">: </span><span class="description">compute the mid-range of all iterated values.</span>
-   <span class="package-name">[`@stdlib/stats/iter/mmin`][@stdlib/stats/iter/mmin]</span><span class="delimiter">: </span><span class="description">create an iterator which iteratively computes a moving minimum value.</span>
-   <span class="package-name">[`@stdlib/stats/iter/range`][@stdlib/stats/iter/range]</span><span class="delimiter">: </span><span class="description">compute the range of all iterated values.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-iter-min.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-iter-min

[test-image]: https://github.com/stdlib-js/stats-iter-min/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/stats-iter-min/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-iter-min/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-iter-min?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-iter-min.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-iter-min/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-iter-min/tree/deno
[umd-url]: https://github.com/stdlib-js/stats-iter-min/tree/umd
[esm-url]: https://github.com/stdlib-js/stats-iter-min/tree/esm
[branches-url]: https://github.com/stdlib-js/stats-iter-min/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-iter-min/main/LICENSE

[mdn-iterator-protocol]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterator_protocol

<!-- <related-links> -->

[@stdlib/stats/iter/max]: https://github.com/stdlib-js/stats-iter-max/tree/deno

[@stdlib/stats/iter/midrange]: https://github.com/stdlib-js/stats-iter-midrange/tree/deno

[@stdlib/stats/iter/mmin]: https://github.com/stdlib-js/stats-iter-mmin/tree/deno

[@stdlib/stats/iter/range]: https://github.com/stdlib-js/stats-iter-range/tree/deno

<!-- </related-links> -->

</section>

<!-- /.links -->