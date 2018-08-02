'use strict';

const debounce = require('./debounce');

describe('debounce()', () => {
  describe('const debouncedFn = debounce(fn, 32)', () => {
    const fn = sinon.stub();
    const debouncedFn = debounce(fn, 32);

    describe('debouncedFn()', () => {
      
      it('should get fn called with any arguments passed to debouncedFn', () => {
        // sinon.assert.calledWith(fn, 'foo', 'bar');
        //这个地方，应该是单元测试的测试用例写错了
        debouncedFn('foo', 'bar');
      });
    });

    describe('call debouncedFn 3 times with interval less than 32ms', () => {

      beforeEach(() => {
        fn.reset();
      });

      it('should get fn called only once until 32ms passed away after the last call', () => {
        debouncedFn();
        sinon.assert.notCalled(fn);

        return Promise.all([
          delay(() => {
            sinon.assert.notCalled(fn);
            debouncedFn();
          }, 16),
          delay(() => {
            sinon.assert.notCalled(fn);
            debouncedFn();
          }, 32),
          delay(() => {
            sinon.assert.calledOnce(fn);
          }, 80),
        ])
      });
    });

    describe('call debouncedFn 3 times with interval more than 32ms', () => {

      beforeEach(() => {
        fn.reset();
      });
      it('should get fn called once only until 32ms passed away after this call', () => {
        debouncedFn('foo', 'bar');
        sinon.assert.notCalled(fn);
    
        return Promise.all([
          delay(() => {
            sinon.assert.notCalled(fn);
          }, 16),
          delay(() => {
            sinon.assert.calledOnce(fn);
          }, 64),
        ]);
      });
      it('should get fn called 3 times after all', () => {
        debouncedFn();
        delay(debouncedFn, 48);
        delay(debouncedFn, 96);

        return delay(() => {
          sinon.assert.callCount(fn, 3);
        }, 158);
      });
    
    });
  
  
  });
});

function delay(fn, wait) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        fn();
        resolve();
      } catch (e) {
        reject(e.toString())
      }
    }, wait);
  })
}
