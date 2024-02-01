import ExecuteCallbackWithParams from '../old/src_old/ExecuteCallbackWithParams';

describe('ExecuteCallbackWithParams', () => {
  test('Executes the callback function with parameters', () => {
    const mockCallback = jest.fn();
    const param1 = 'parameter 1';
    const param2 = 42;
    ExecuteCallbackWithParams(mockCallback, param1, param2);

    // Ensure that the callback was called with the correct parameters
    expect(mockCallback).toHaveBeenCalledWith(param1, param2);
  });

  test('Handles non-function callback', () => {
    const nonFunctionCallback = 'not a function';
    // Execute with a non-function callback and parameters, should not throw an error
    expect(() => ExecuteCallbackWithParams(nonFunctionCallback, 'param')).not.toThrow();
  });

  test('Handles no callback provided', () => {
    // Execute without providing a callback, should not throw an error
    expect(() => ExecuteCallbackWithParams()).not.toThrow();
  });
});