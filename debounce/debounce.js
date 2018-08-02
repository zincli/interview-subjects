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
module.exports = (fn, wait = 32) => {
  let time = null;
  if(fn instanceof Function) {
    return function () {
      let args = arguments;
      clearTimeout(time);
      let _this = this;
      time = setTimeout(function () {
        fn.apply(_this,args);
      },wait);
    }
  }
};

