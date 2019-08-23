---
title: 'Testing Express Applications'
date: '2019-08-23'
---


**Why?**

- Increases confidence in changing/ maintaining code.
- Makes code more reuseable.
- Debugging is easier / faster.<!-- end -->

**Testing Pattern:**

1. Assemble data to be tested (eg. an array in specific format).
2. Call the function that is being tested.
3. Assert that the results of the function call are as expected.

###### Unit tests

- Tests the smallest testable part of a program.

###### Integration Tests

- Tests the interaction between a group of individual units of software.

###### System Tests

- Tests a complete and integrated software system.

**Mocha - testing framework:**

- `describe()` - a function for building a test suite with one or more test cases.
- `it()` - a function for defining individual test cases.
- Use the `describe()` function to describe a part of the app that needs to be tested.
- ask "what if" questions to determine what needs to be tested.
- in the callback function to `describe()` add an `it()` function to test each "what if"
- write the answers to the "what if" questions as the description to the `it()` function.

_NOTE_ - Mocha Does not have a built in assertion library. Use Chia for assertions.

```js
describe('SAMPLE TEST SUITE', () => {
  // test case #1
  it('should test an individual test case', () => {
    // test case code
  });
  // test case #2
  it('should throw an error when test case fails', () => {
    //test case fail code
  });
});
```

**Chai - Assertion Library:**

- Integrates well with Mocha.
- Asserts that your the component you are testing does what you expect it to do.

**Supertest - tests HTTP calls**

