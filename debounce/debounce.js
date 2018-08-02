'use strict';

/**
 * Please implement this debounce function.
 * Function details could be found in debounce.test.js
 * or the lodash.debounce documentation at https://lodash.com/docs/4.17.4#debounce
 * (the `options` argument should be ommited)
 */

/**
 * debounce
 * @param  {Function} fn   - target function
 * @param  {Number}   wait - debounce limited
 * @return {Function}      - debounced fn
 */
module.exports = (fn, wait) => {
  let time = null;
  let args = arguments;
  
  if(fn instanceof Function) {
    return function () {
      clearTimeout(time);
      time = setTimeout(function () {
        fn(args);
      },wait);
    }
  }
  
};
