/* global rpTests, describe, it, expect, should */

describe('recursive range', function () {
  'use strict';


it('can use recursion to get a range of numbers', function(){
  expect(recursionRanger(2,9)).to.deep.equal([3,4,5,6,7,8]);
});
it('works on multiple number ranges', function(){
  expect(recursionRanger(1,10)).to.deep.equal([2,3,4,5,6,7,8,9]);
});
  
});

describe('recursive exponent', function(){
  'use strict'

  it('can recursively calculate an exponent', function(){
    expect(recursiveExponent(8,2)).to.equal(64);
  });
  it('can recursively calculate an exponent again', function(){
    expect(recursiveExponent(4,5)).to.equal(1024);
  });
});
